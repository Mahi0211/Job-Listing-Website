// eslint-disable-next-line react/prop-types
const Card = ({ children, bg = "bg-[#e3f2fd]" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-lg`}>{children}</div>;
};

export default Card;
