import { Split } from "./Split";
import { Title } from "./Title";

export const Experience = () => {
  return (
    <Split
      container
      left={<Title>Experience & Education</Title>}
      right={
        <div className="flex gap-10 flex-col">
          <div className="flex-1 grid grid-cols-4 gap-2">
            <div className="text-medium font-bold">2030</div>
            <div className="col-span-3 grid grid-cols-1 gap-4">
              <p className="font-bold">SENIOR SOFTWARE ENGINEER</p>
              <p>HEIMAN SOFTWARE LABS</p>
              <p>
                Provides direction for applications in development. Researches
                and develops new ways to improve our development process.
                Mentors Junior Software Engineers.
              </p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-2">
            <div className="text-medium font-bold">2027</div>
            <div className="col-span-3 grid grid-cols-1 gap-4">
              <p className="font-bold">JUNIOR SOFTWARE ENGINEER</p>
              <p>HEIMAN SOFTWARE LABS</p>
              <p>
                Developed, installed, and configured internal applications, as
                well as new application releases into test and production
                environments.
              </p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-2">
            <div className="text-medium font-bold">2025</div>
            <div className="col-span-3 grid grid-cols-1 gap-4">
              <p className="font-bold">
                MASTER OF SCIENCE IN SOFTWARE ENGINEERING
              </p>
              <p>HEIMAN SOFTWARE LABS</p>
              <p>
                De Loureigh University
                <br />
                Venston Bay
                <br />
                Heiman Software Labs Scholar
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};
