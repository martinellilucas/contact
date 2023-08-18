import Form from "../Form/Form";
import Information from "../Information/Information";
import Nav from "../Nav/Nav";
import style from "./Home.module.css";
import home from "../../assets/images/3.png";
import Premios from "../Premios/Premios";
const Home = () => {
  return (
    <div id="home" className={style.body}>
      <Nav />
      <div className={style.header}>
        <h3 className={style.subTitle}>¿BUSCAS CAMBIAR TU ECONOMÍA?</h3>
        <h1 className={style.title}>Comenzá tu negocio Essen hoy mismo</h1>
        <div className={style.anticipo}>
          <div className={style.formContainer}>
            <Form />
          </div>
          <div className={style.info}>
            <img src={home} alt="img" className={style.img} />
            <p className={style.text}>
              Tener un negocio rentable y sin inversión, es posible con Essen.
            </p>
            <p className={style.text}>
              Obtendrás ganancias desde la primer venta y formarás parte de un
              equipo de trabajo que te brindará herramientas y soporte 24 horas.
            </p>
          </div>
        </div>
      </div>
      <Information />
      <Premios />
      <div id="contact">
        <Form />
      </div>
    </div>
  );
};

export default Home;
