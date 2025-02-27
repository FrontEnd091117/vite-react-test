import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";

const Work = () => {
  const card = (img: string) => {
    return (
      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative">
        <img src={img} alt="" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">
            Project
          </span>
          <div className="pt-8 text-center">
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color"></p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {card(proj1)}
        {card(proj2)}
        {card(proj3)}
        {card(proj4)}
        {card(proj5)}
        {card(proj6)}
      </div>
    </div>
  );
};

export default Work;
