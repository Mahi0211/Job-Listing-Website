import { Link } from "react-router-dom";
// import { FaExclamationTriangle } from 'react-icons/fa';
import { suiteImg, textureImg } from "../assets/icons";

const NotFoundPage = () => {
  return (
    <section className="relative text-center flex flex-col justify-between items-center flex-grow bg-[#0B1623]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-50"
        style={{ backgroundImage: `url(${textureImg})` }}
      ></div>
      <div className="relative">
        <h1 className="text-[360px] font-brandonGrotesqueBlack text-[#EEEDEB] leading-none">
          404
        </h1>
        <p className="text-[24px] leading-none mb-3 font-brandonGrotesqueMedium text-[#EEEDEB]">
          Page not found
        </p>
        <p className="mb-8 text-[16px] leading-none font-brandonGrotesqueMedium text-[#DDDDDD]">
          Woops.. Sorry, we are not able to find what you were looking for
        </p>
        <Link
          to="/"
          className="text-[#EEEDEB] hover:bg-[#293346] px-3 py-2 font-brandonGrotesqueMedium border border-[#EEEDEB] text-[14px]"
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
