import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Title = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h2 className={twMerge("font-semibold text-4xl", className)}>{children}</h2>
  );
};
