const ButtonComponent = ({ text, styleProps }) => {
  return (
    <div className="button-component-wrapper">
      <button className={`btn bold ${styleProps}`}>{text}</button>
    </div>
  );
};

export default ButtonComponent;
