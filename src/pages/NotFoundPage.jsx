import { Link } from "react-router-dom";
// import { FaExclamationTriangle } from 'react-icons/fa';
import { suiteImg, textureImgMin } from "../assets/icons";

const NotFoundPage = () => {
  return (
    <section className="relative text-center flex flex-col justify-between items-center flex-grow bg-[#0B1623]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-[35%]"
        style={{ backgroundImage: `url(${textureImgMin})` }}
      ></div>
      <div>
        <h1 className="md:text-[360px] text-[300px] max-sm:text-[180px] max-md:mb-6 font-brandonGrotesqueBlack text-[#EEEDEB] leading-none">
          404
        </h1>
      </div>
      <div className="relative">
        <p className="text-[24px] leading-none mb-3 font-brandonGrotesqueMedium text-[#EEEDEB] max-sm:text-[20px]">
          Page not found
        </p>
        <p className="mb-8 text-[16px] leading-none font-brandonGrotesqueMedium text-[#DDDDDD] max-sm:text-[14px]">
          Woops.. Sorry, we are not able to find what you were looking for
        </p>
        <Link
          to="/"
          className="text-[#EEEDEB] hover:bg-[#293346] px-3 py-2 font-brandonGrotesqueMedium border border-[#EEEDEB] text-[14px] max-sm:text-[12px]"
        >
          HOME PAGE
        </Link>
      </div>
      <div className="relative">
        <img src={suiteImg} alt="" />
      </div>
    </section>
  );
};

export default NotFoundPage;
