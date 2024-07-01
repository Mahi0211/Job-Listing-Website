// eslint-disable-next-line react/prop-types
const Card = ({ children, bg = "bg-[#E8F6EF]" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-lg`}>{children}</div>;
};

export default Card;
