import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(uiActions.clearNotification());
  };

  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses} onDoubleClick={closeHandler}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
