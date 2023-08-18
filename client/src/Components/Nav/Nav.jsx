import style from "./Nav.module.css";

const Nav = () => {
  const scrollTo = (where) => {
    const section = document.getElementById(where);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className={style.body}>
      <label className={style.item} onClick={() => scrollTo("home")}>
        Inicio
      </label>
      <label className={style.item} onClick={() => scrollTo("info")}>
        Informacion
      </label>
      <label className={style.item} onClick={() => scrollTo("premios")}>
        Premios
      </label>
      <label className={style.item} onClick={() => scrollTo("preguntas")}>
        Preguntas frecuentes
      </label>
      <label className={style.item} onClick={() => scrollTo("contact")}>
        Contacto
      </label>
    </div>
  );
};

export default Nav;
