import { useState } from "react";
import style from "./Login.module.css";

const Login = ({ login }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [target]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
    setUserData({ email: "", password: "" });
  };
  return (
    <div className={style.body}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Bienvenido/a al Panel</h1>
      </div>
      <hr></hr>
      <div className={style.subtitleContainer}>
        <h2 className={style.subTitle}>Inicie sesión</h2>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.section}>
          <div className={style.triangle}></div>
          <div className={style.subSection}>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              value={userData.email}
              onChange={handleChange}
              className={style.input}
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.triangle}></div>
          <div className={style.subSection}>
            <label htmlFor="password" className={style.label}>
              Contraseña
            </label>
            <input
              name="password"
              id="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              className={style.input}
              placeholder="Contraseña"
            ></input>
          </div>
        </div>
        <button className={style.button} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
