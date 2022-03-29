const Button = (props) => {
  return (
    <button
      className="col-span-3 rounded-full m-0
          outline outline-blue-300/50 
          hover:rounded-lg hover:outline-blue-400/75"
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};
export default Button;
