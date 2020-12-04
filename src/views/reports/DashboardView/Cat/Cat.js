import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import AccessAlarmIcon from '@material-ui/icons/';
import styles from './index.module.scss';
import 'swiper/swiper.scss';
import { Button } from '@material-ui/core';

const Categoria = ({ cat, setSeleccionado }) => {
  let [isClosed, setIsClosed] = useState(true);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title}`}>{cat.nombre}</div>
      <div className={`${styles.descripcion}`}>{cat.descripcion}</div>
      <Button
        className={styles.seleccionaAqui}
        onClick={() => setIsClosed(!isClosed)}
      >
        Selecciona un Indeseable aquí &nbsp;{/* <AccessAlarmIcon />*/}
      </Button>

      <div className={`${styles.votacion} ${isClosed ? styles.isClosed : ''}`}>
        <div className={`${styles.nominadosCont}`}>
          {cat.nominados.map(nominado => (
            <div
              className={`${styles.round} ${
                nominado.selected ? styles.selected : ''
              }`}
              onClick={() => setSeleccionado(cat, nominado)}
            >
              <img src={`/static/users/${nominado.imagen || ''}`} alt="" />
              <h3 className={`${styles.nombreNominado}`}>{nominado.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categoria;
