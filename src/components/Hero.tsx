import { Split } from "./Split";

export const Hero = () => {
  return (
    <Split
      className="md:max-h-screen p-0 md:p-0"
      left={<img src="/hero.webp" />}
      right={
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="font-semibold text-6xl mb-4">Sari Purdue</h1>
          <p className="text-3xl">Software Engineer</p>
        </div>
      }
    />
  );
};
