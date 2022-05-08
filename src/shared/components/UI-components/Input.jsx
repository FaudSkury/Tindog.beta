import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["form-control"]}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.name}
      />
    </div>
  );
};

export default Input;
