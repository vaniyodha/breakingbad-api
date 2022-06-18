import styles from "./card.module.css";
const Card = (props) => {
  console.log("props", props);
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={props.img} alt="" width={150} height={150}></img>
          <h3> Name:{props.name}</h3>
          <p key={props.char_id}></p>
          <p>Date Of Birth: {props.birthday}</p>
          <p> Nickname :{props.nickname}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
