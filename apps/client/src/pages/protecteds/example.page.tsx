import {
  RiAddLine,
  RiLayout2Line,
  RiLayoutGridLine,
  RiListCheck,
} from "@remixicon/react";

import * as Avatar from "@repo/ui/components/avatar";
import * as ButtonGroup from "@repo/ui/components/button-group";
import * as CompactButton from "@repo/ui/components/compact-button";
import * as FancyButton from "@repo/ui/components/fancy-button";

import { useTheme } from "~/hooks/use-theme";

import { useSession } from "~/hooks/use-session";

export function ExamplePage() {
  const { theme, setTheme } = useTheme();

  const { data } = useSession();

  return (
    <div className="flex flex-col gap-4 items-center h-dvh justify-center">
      <ButtonGroup.Root>
        <ButtonGroup.Item>
          <ButtonGroup.Icon as={RiLayoutGridLine} />
          Grid view
        </ButtonGroup.Item>
        <ButtonGroup.Item size="small">
          <ButtonGroup.Icon as={RiListCheck} />
          List view
        </ButtonGroup.Item>
        <ButtonGroup.Item>
          <ButtonGroup.Icon as={RiLayout2Line} />
          Gallery view
        </ButtonGroup.Item>
      </ButtonGroup.Root>

      <CompactButton.Root>
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>

      <div className="flex gap-6">
        <Avatar.Root size="32">{data?.user?.name?.slice?.(0, 2)}</Avatar.Root>
        <Avatar.Root size="32" color="yellow" placeholderType="company" />
        <Avatar.Root size="32" color="purple" />
      </div>

      <FancyButton.Root
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant="primary"
      >
        Toggle Theme
      </FancyButton.Root>
    </div>
  );
}
