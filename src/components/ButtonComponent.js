const ButtonComponent = ({ text, styleProps, btnIcon }) => {
  return (
    <div className="button-component-wrapper">
      <img src={btnIcon} alt="" className="btn-icon" />

      <button className={`btn bold ${styleProps}`}>{text}</button>
    </div>
  );
};

export default ButtonComponent;
