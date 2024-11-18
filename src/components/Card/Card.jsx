import style from "./Card.module.css";

function Card({title, image}) {
  return (
    <div className={style.card_main}>
      <div className={style.container_image}>
        <img src={image} alt="" />
      </div>
      <div className={style.container_title}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
