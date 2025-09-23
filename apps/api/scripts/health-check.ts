#!/usr/bin/env bun

/**
 * Health Check Script for Suparoute API
 *
 * This script tests the API endpoints to ensure everything is working correctly.
 * Run with: bun run scripts/health-check.ts
 */

interface HealthCheckResult {
  endpoint: string;
  status: 'PASS' | 'FAIL' | 'SKIP';
  statusCode?: number;
  responseTime?: number;
  error?: string;
  data?: any;
}

class HealthChecker {
  private baseUrl: string;
  private results: HealthCheckResult[] = [];

  constructor(baseUrl: string = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  private async makeRequest(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<HealthCheckResult> {
    const startTime = Date.now();

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const responseTime = Date.now() - startTime;
      const data = await response.json().catch(() => null);

      return {
        endpoint,
        status: response.ok ? 'PASS' : 'FAIL',
        statusCode: response.status,
        responseTime,
        data,
      };
    } catch (error) {
      const responseTime = Date.now() - startTime;
      return {
        endpoint,
        status: 'FAIL',
        responseTime,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async checkBasicEndpoints(): Promise<void> {
    console.log('🔍 Checking basic endpoints...\n');

    // Root endpoint
    const rootResult = await this.makeRequest('/');
    this.results.push(rootResult);
    this.logResult(rootResult);

    // Health endpoint
    const healthResult = await this.makeRequest('/health');
    this.results.push(healthResult);
    this.logResult(healthResult);

    // Docs endpoint
    const docsResult = await this.makeRequest('/docs');
    this.results.push(docsResult);
    this.logResult(docsResult);

    // AI health check
    const aiHealthResult = await this.makeRequest('/ai/health');
    this.results.push(aiHealthResult);
    this.logResult(aiHealthResult);
  }

  async checkAuthEndpoints(): Promise<void> {
    console.log('\n🔐 Checking authentication endpoints...\n');

    // Test unauthenticated access to /auth/me
    const unauthResult = await this.makeRequest('/auth/me');
    this.results.push(unauthResult);
    this.logResult(unauthResult);

    // Test protected route without auth
    const protectedResult = await this.makeRequest('/protected');
    this.results.push(protectedResult);
    this.logResult(protectedResult);
  }

  async checkAIEndpoints(): Promise<void> {
    console.log('\n🤖 Checking AI endpoints (without auth - should fail)...\n');

    // Test chat endpoint without auth
    const chatResult = await this.makeRequest('/ai/chat', {
      method: 'POST',
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello' }],
      }),
    });
    this.results.push(chatResult);
    this.logResult(chatResult);

    // Test moderation endpoint (no auth required)
    const moderationResult = await this.makeRequest('/ai/moderate', {
      method: 'POST',
      body: JSON.stringify({
        text: 'This is a test message',
      }),
    });
    this.results.push(moderationResult);
    this.logResult(moderationResult);
  }

  async checkEnvironmentConfiguration(): Promise<void> {
    console.log('\n⚙️  Checking environment configuration...\n');

    const requiredEnvVars = [
      'BETTER_AUTH_SECRET',
      'OPENAI_API_KEY',
    ];

    const optionalEnvVars = [
      'DATABASE_URL',
      'DATABASE_AUTH_TOKEN',
      'BETTER_AUTH_URL',
      'GITHUB_CLIENT_ID',
      'GITHUB_CLIENT_SECRET',
      'GOOGLE_CLIENT_ID',
      'GOOGLE_CLIENT_SECRET',
    ];

    console.log('Required environment variables:');
    for (const envVar of requiredEnvVars) {
      const isSet = !!process.env[envVar];
      console.log(`  ${isSet ? '✅' : '❌'} ${envVar}: ${isSet ? 'Set' : 'Missing'}`);
    }

    console.log('\nOptional environment variables:');
    for (const envVar of optionalEnvVars) {
      const isSet = !!process.env[envVar];
      console.log(`  ${isSet ? '✅' : '⚪'} ${envVar}: ${isSet ? 'Set' : 'Not set'}`);
    }
  }

  private logResult(result: HealthCheckResult): void {
    const statusIcon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⏭️';
    const responseTime = result.responseTime ? `(${result.responseTime}ms)` : '';

    console.log(`${statusIcon} ${result.endpoint} - ${result.status} ${responseTime}`);

    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }

    if (result.statusCode) {
      console.log(`   Status: ${result.statusCode}`);
    }

    // Log interesting data for successful responses
    if (result.status === 'PASS' && result.data) {
      if (result.endpoint === '/' && result.data.services) {
        console.log(`   Services: ${JSON.stringify(result.data.services)}`);
      }
      if (result.endpoint === '/health' && result.data.services) {
        console.log(`   OpenAI: ${result.data.services.openai?.configured ? 'Configured' : 'Not configured'}`);
      }
      if (result.endpoint === '/ai/health' && result.data.configured !== undefined) {
        console.log(`   OpenAI configured: ${result.data.configured}`);
      }
    }
  }

  private generateSummary(): void {
    console.log('\n📊 Health Check Summary');
    console.log('========================\n');

    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const skipped = this.results.filter(r => r.status === 'SKIP').length;
    const total = this.results.length;

    console.log(`Total endpoints checked: ${total}`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`⏭️  Skipped: ${skipped}`);

    const averageResponseTime = this.results
      .filter(r => r.responseTime)
      .reduce((sum, r) => sum + r.responseTime!, 0) / this.results.filter(r => r.responseTime).length;

    if (averageResponseTime) {
      console.log(`⚡ Average response time: ${Math.round(averageResponseTime)}ms`);
    }

    console.log(`\n🏥 Overall health: ${failed === 0 ? 'HEALTHY' : 'UNHEALTHY'}`);

    if (failed > 0) {
      console.log('\n❌ Failed endpoints:');
      this.results
        .filter(r => r.status === 'FAIL')
        .forEach(r => {
          console.log(`  - ${r.endpoint}: ${r.error || `HTTP ${r.statusCode}`}`);
        });
    }
  }

  async runFullCheck(): Promise<void> {
    console.log('🚀 Starting Suparoute API Health Check\n');
    console.log(`Target: ${this.baseUrl}\n`);

    try {
      await this.checkEnvironmentConfiguration();
      await this.checkBasicEndpoints();
      await this.checkAuthEndpoints();
      await this.checkAIEndpoints();
    } catch (error) {
      console.error('Health check failed:', error);
    }

    this.generateSummary();
  }
}

// Main execution
async function main() {
  const baseUrl = process.argv[2] || 'http://localhost:3000';
  const checker = new HealthChecker(baseUrl);
  await checker.runFullCheck();
}

// Run if called directly
if (import.meta.main) {
  main().catch(console.error);
}

export { HealthChecker };
