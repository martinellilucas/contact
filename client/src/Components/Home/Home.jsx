import Form from "../Form/Form";
import Information from "../Information/Information";
import Nav from "../Nav/Nav";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div id="home" className={style.body}>
      <Nav />
      <div className={style.header}>
        <h3 className={style.subTitle}>¿BUSCAS CAMBIAR TU ECONOMÍA?</h3>
        <h1 className={style.title}>Comenzá tu negocio Essen</h1>
      </div>
      <Information />
      <Form></Form>
    </div>
  );
};

export default Home;
