import classes from "./SendButton.module.scss";

const SendButton = ({ disabled, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={classes.btnSend}
      style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      Отправить
    </button>
  );
};

export default SendButton;
