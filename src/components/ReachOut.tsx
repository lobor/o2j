import { Split } from "./Split";
import { Title } from "./Title";

export const ReachOut = () => {
  return (
    <Split
      container
      className="bg-black text-white"
      left={
        <div className="md:flex-1 h-[38rem]">
          <div className="h-full bg-[url('/reachOut.jpg')] bg-contain bg-center bg-no-repeat" />
        </div>
      }
      right={
        <div className="h-full w-full flex flex-col justify-evenly items-stretch">
          <Title>Reach out</Title>
          <div>
            <p>Sarah BERTRAND</p>
            <p>hello@reallygreatsite.com</p>
          </div>
          <div>
            <p>CONNECT WITH ME</p>
            <div>instagram - twitter - facebook - linkedin</div>
          </div>
        </div>
      }
    />
  );
};
