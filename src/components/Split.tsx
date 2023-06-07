import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Split = ({
  left,
  right,
  className = "",
  container,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  container?: boolean;
}) => {
  const render = (
    <>
      <div className="md:flex-1">{left}</div>
      <div className="md:flex-1">{right}</div>
    </>
  );
  return (
    <div
      className={twMerge(
        `flex flex-col md:flex-row w-full p-10 md:p-20 md:gap-20`,
        className
      )}
    >
      {container ? (
        <div className="container mx-auto flex flex-col md:flex-row">
          {render}
        </div>
      ) : (
        render
      )}
    </div>
  );
};
