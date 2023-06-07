import { Split } from "./Split";
import { Title } from "./Title";

export const About = () => {
  return (
    <Split
      container
      className="bg-[#b4b0ab]"
      left={
        <div className="h-full flex flex-col justify-center">
          <Title className="mb-4">About Me</Title>
          <p className="text-medium">
            {`I am a diligent senior software engineer with years of experience in
            business applications. I'm eager to join your crew to build
            out-of-the-box solutions for regional clients. I am skilled in
            developing plans, managing projects, and user documentation.`}
          </p>
        </div>
      }
      right={
        <div className="md:flex-1 h-[38rem]">
          <div className="h-full bg-[url('/about.webp')] bg-contain bg-center bg-no-repeat" />
        </div>
      }
    />
  );
};
