import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["form-control"]}>
      <label htmlFor={props.id}></label>
      <input id={props.id} />
    </div>
  );
};

export default Input;
