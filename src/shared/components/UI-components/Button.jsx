import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={classes[props.className]}
    >
      {props.children}
    </button>
  );
};

export default Button;
