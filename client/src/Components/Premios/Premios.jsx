import style from "./Premios.module.css";

const Premios = () => {
  return (
    <div id="premios" className={style.body}>
      <h1 className={style.title}>EQUIPÁ TU COCINA EN LOS PRIMEROS 3 MESES</h1>
      <div className={style.cardscontainer}>
        <div className={style.card}>
          <h3 className={style.subTitle}>FLIP</h3>
          <img src="" alt="flip" />
        </div>
        <div className={style.card}>
          <h3 className={style.subTitle}>SARTÉN 24</h3>
          <img src="" alt="sarten" />
        </div>
        <div className={style.card}>
          <h3 className={style.subTitle}>CACEROLA 24</h3>
          <img src="" alt="cace24" />
        </div>
        <div className={style.card}>
          <h3 className={style.subTitle}>CACEROLA 18</h3>
          <img src="" alt="cace18" />
        </div>
      </div>
    </div>
  );
};

export default Premios;
