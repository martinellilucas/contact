import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.body}>
      <label className={style.item}>Inicio</label>
      <label className={style.item}>Informacion</label>
      <label className={style.item}>Contacto</label>
    </div>
  );
};

export default Nav;
