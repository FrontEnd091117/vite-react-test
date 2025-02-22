import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  const imageLayout = (image: string, text: string) => {
    return (
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={image} alt="" />
        <p className="mt-2">{text}</p>
      </div>
    );
  };

  return (
    <div className="border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My
        <br />
        Tech
        <br /> Stack
      </h2>
      {imageLayout(tailwind, `Tailwind`)}
      {imageLayout(html, `HTML`)}
      {imageLayout(css, `CSS`)}
      {imageLayout(react, `React`)}
      {imageLayout(javascript, `JavaScript`)}
    </div>
  );
};

export default Skills;
