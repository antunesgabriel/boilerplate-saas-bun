import { useState } from "react";
import {
  RiErrorWarningFill,
  RiEyeCloseLine,
  RiEyeLine,
  RiInformationFill,
  RiLoader4Line,
} from "@remixicon/react";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as FancyButton from "@repo/ui/components/fancy-button";
import * as LinkButton from "@repo/ui/components/link-button";
import * as Input from "@repo/ui/components/input";
import * as Label from "@repo/ui/components/label";
import * as Divider from "@repo/ui/components/divider";
import * as SocialButton from "@repo/ui/components/social-button";
import { GoogleIcon } from "@repo/ui/components/icons/google";
import { LinkedinIcon } from "@repo/ui/components/icons/linkedin";
import { AppleIcon } from "@repo/ui/components/icons/apple";
import * as Hint from "@repo/ui/components/hint";
import { cn } from "@repo/ui/utils/cn";
import * as Alert from "@repo/ui/components/alert";

import { authClient } from "~/config/auth.config";

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

export function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log("authClient", authClient);
    setServerError("");
    setIsLoading(true);
    await authClient.signIn.email(data, {
      onSuccess: (x) => {
        console.log(x);
        setIsLoading(false);

        navigate("/");
      },
      onError: (err) => {
        setIsLoading(false);
        setServerError(err.error.message);
      },
    });
  };

  return (
    <div className="flex flex-col gap-5 p-6 w-full rounded-3xl max-w-[400px] bg-bg-white-0 shadow-regular-xs">
      <div className="mx-auto rounded-full size-14 bg-primary-base" />

      <div className="text-center">
        <div className="text-title-h6 text-text-strong-950">Welcome</div>
        <div className="text-paragraph-sm text-text-sub-600">
          Please enter your details to login.
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <SocialButton.Root mode="stroke">
          <SocialButton.Icon as={AppleIcon} />
        </SocialButton.Root>

        <SocialButton.Root mode="stroke">
          <SocialButton.Icon as={GoogleIcon} />
        </SocialButton.Root>

        <SocialButton.Root mode="stroke">
          <SocialButton.Icon as={LinkedinIcon} />
        </SocialButton.Root>
      </div>

      <Divider.Root variant="line-text">OR</Divider.Root>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          {!!serverError && (
            <Alert.Root variant="filled" status="error">
              <Alert.Icon as={RiErrorWarningFill} />
              {serverError}
              <button type="button" onClick={() => setServerError("")}>
                <Alert.CloseIcon />
              </button>
            </Alert.Root>
          )}

          <div className="flex flex-col gap-1">
            {/*@ts-expect-error - conflit with react 19*/}
            <Label.Root htmlFor="email">
              Email Address
              <Label.Asterisk />
            </Label.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  id="email"
                  type="email"
                  placeholder="jhon.doe@suparoute.com"
                  hasError={!!errors.email}
                  {...register("email")}
                  disabled={isLoading}
                />
              </Input.Wrapper>
            </Input.Root>

            <Hint.Root
              hasError
              className={cn(
                "opacity-0 transition-all duration-100 ease-in-out",
                errors.email ? "opacity-100" : "",
              )}
            >
              <Hint.Icon as={RiInformationFill} />
              {errors?.email?.message}
            </Hint.Root>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              {/*@ts-expect-error - conflit with react 19*/}
              <Label.Root htmlFor="password">Password</Label.Root>
              <LinkButton.Root variant="gray" size="small">
                Forgot?
              </LinkButton.Root>
            </div>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  hasError={!!errors.password}
                  {...register("password")}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <RiEyeCloseLine className="size-5 text-text-soft-400" />
                  ) : (
                    <RiEyeLine className="size-5 text-text-soft-400" />
                  )}
                </button>
              </Input.Wrapper>
            </Input.Root>

            <Hint.Root
              hasError
              className={cn(
                "opacity-0 transition-all duration-100 ease-in-out",
                errors.password ? "opacity-100" : "",
              )}
            >
              <Hint.Icon as={RiInformationFill} />
              {errors?.password?.message}
            </Hint.Root>
          </div>
        </div>

        <FancyButton.Root variant="primary" type="submit">
          {isLoading ? (
            <RiLoader4Line className="animate-spin size-4 text-inherit" />
          ) : (
            "Login"
          )}
        </FancyButton.Root>
      </form>

      <div className="flex gap-1 justify-center text-paragraph-sm text-text-sub-600">
        Don’t have an account?
        <LinkButton.Root variant="black" size="medium" asChild>
          <Link to="/auth/sign-up">Register</Link>
        </LinkButton.Root>
      </div>
    </div>
  );
}
