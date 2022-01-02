import classes from "./PageAvatar.module.css";
import avatar from "./img/avatar.jpeg"

const PageAvatar = (props) => {
  return (
    <div className={classes.photoDiv}>
      <img src={avatar} className={classes.photo} alt="avatar photo" />
    </div>
  );
};

export default PageAvatar;
