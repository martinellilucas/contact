import { useState } from "react";
import style from "./Dashboard.module.css";
import Login from "./Login/Login";

const Dashboard = () => {
  const [access, setAccess] = useState(false);
  const email = "nataliacolman.18@gmail.com";
  const password = "Dakota94";

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
    }
  };
  return (
    <div className={style.body}>
      {access ? (
        <h1 className={style.title}>Panel</h1>
      ) : (
        <Login login={login}></Login>
      )}
    </div>
  );
};

export default Dashboard;
