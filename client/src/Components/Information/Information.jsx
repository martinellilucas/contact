import style from "./Information.module.css";

const Information = () => {
  return (
    <div id="info" className={style.body}>
      <div className={style.infoContainer}>
        <div data-aos="flip-up" className={style.celeste}>
          <h3 className={style.title}>EXCELENTES COMISIONES</h3>
          <p className={style.info}>
            Ganancia promedio por producto vendido: $20.000
          </p>
          <p className={style.info}>
            Sin techo de ganancia. Bonos extra de dinero según nivel de venta.
          </p>
        </div>
        <div data-aos="flip-down" className={style.naranja}>
          <h3 className={style.title}>TRABAJÁ DESDE CASA</h3>
          <p className={style.info}>
            Vos elegís dónde y de qué forma hacer crecer tu emprendimiento
            Essen.
          </p>
          <p className={style.info}>
            Combinable con otras actividades que ya tengas
          </p>
        </div>
        <div data-aos="flip-down" className={style.celeste}>
          <h3 className={style.title}>SIN MÍNIMOS, NI MÁXIMOS</h3>
          <p className={style.info}>
            No tenemos mínimos de venta. Si no vendes, no pasa nada. Pero vamos
            a trabajar juntos para que vendas porque si no vendes no comisionás.
          </p>
        </div>
        <div data-aos="flip-up" className={style.naranja}>
          <h3 className={style.title}>APTO PARA TODO ARGENTINA</h3>
          <p className={style.info}>
            Podés trabajar desde cualquier parte y vender a todo el país. La
            empresa realiza los envíos a través de Transporte Andreani.
          </p>
          <p className={style.info}>La logística está resuelta.</p>
        </div>
        <div data-aos="flip-up" className={style.celeste}>
          <h3 className={style.title}>REQUISITOS MÍNIMOS</h3>
          <p className={style.info}>
            Cobramos mediante cuenta bancaria y facturamos las ganancias
          </p>
          <p className={style.info}>
            Podemos ayudarte a gestionar el monotributo. Tendrás que abrir una
            cuenta para cobrar y tener un servicio a tu nombre con tu domicilio
          </p>
        </div>
        <div data-aos="flip-down" className={style.naranja}>
          <h3 className={style.title}>EMPEZÁ HOY MISMO</h3>
          <p className={style.info}>
            Podes empezar hoy mismo, sin necesidad de tener dinero. Comisionás a
            partir de la primer venta.
          </p>
          <p className={style.info}>Probá! No perdes nada, escribime.</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
