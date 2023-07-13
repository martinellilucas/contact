import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>Contacto</h1>
      <form className={style.form}>
        <div className={style.section}>
          <label className={style.label}></label>
          <input placeholder="Nombre" className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}></label>
          <input placeholder="Email" className={style.input}></input>
        </div>
        <div className={style.section}>
          <label className={style.label}></label>
          <input placeholder="Teléfono" className={style.input}></input>
        </div>
        <div className={style.section}>
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
