const ButtonComponent = ({ text, bgColor }) => {
  return (
    <>
      <button className={`btn bold ${bgColor}`}>{text}</button>
    </>
  );
};

export default ButtonComponent;
