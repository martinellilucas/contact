import style from "./Form.module.css";

const Form = () => {
  return (
    <div id="contact" className={style.body}>
      <div data-aos="zoom-out" className={style.titleContainer}>
        <h1 className={style.title}>Contacto</h1>
      </div>
      <form className={style.form}>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <label className={style.label}></label>
          <input placeholder="Nombre" className={style.input}></input>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <label className={style.label}></label>
          <input placeholder="Email" className={style.input}></input>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <label className={style.label}></label>
          <input placeholder="Teléfono" className={style.input}></input>
        </div>
        <div data-aos="fade-left" className={style.section}>
          <div className={style.triangle}></div>
          <label className={style.label}></label>
          <textarea placeholder="Mensaje" className={style.input}></textarea>
        </div>
        <button className={style.button} type="Submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
