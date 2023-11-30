import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) =>
        window.innerWidth >= 800 ? (
          <div className="w-24 h-24 rounded-3xl mb-10 " key={index}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center my-4">{technology.name}</p>
          </div>
        ) : (
          <>
            <div className="mb-10" key={index}>
              <div className="w-24 h-24 grid place-content-center bg-tertiary rounded-3xl p-4">
                <img src={technology.icon} className="" />
              </div>
              <p className="text-center my-4 ">{technology.name}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
