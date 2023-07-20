import style from "./Information.module.css";

const Information = () => {
  return (
    <div id="info" className={style.body}>
      <div className={style.imageContainer}>
        <h3 className={style.title}>Nati Colman</h3>
        <p className={style.subTitle}>Ejecutiva</p>
      </div>
      <div className={style.infoContainer}>
        <div data-aos="flip-up" className={style.celeste}>
          <h3 className={style.info}>Negocio sin inversión</h3>
        </div>
        <div data-aos="flip-down" className={style.violeta}>
          <h3 className={style.info}>Requisitos mínimos</h3>
        </div>
        <div data-aos="flip-down" className={style.violeta}>
          <h3 className={style.info}>Equipá tu cocina gratis</h3>
        </div>
        <div data-aos="flip-up" className={style.celeste}>
          <h3 className={style.info}>Excelentes comisiones</h3>
        </div>
        <div data-aos="flip-up" className={style.celeste}>
          <h3 className={style.info}>Trabajá desde donde quieras</h3>
        </div>
        <div data-aos="flip-down" className={style.violeta}>
          <h3 className={style.info}>Empezá hoy mismo</h3>
        </div>
      </div>
    </div>
  );
};

export default Information;
