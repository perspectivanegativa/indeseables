import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestProducts from './LatestProducts';
import Cat from './Cat/Cat';
import data from '../../../data';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);
  const [preferencias, setPreferencias] = useState([]);
  const getPreferencias = () => {
    return {
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6
    };
  };
  useEffect(() => {
    const pref = getPreferencias();
    const formateado = data.map(cat => ({
      ...cat,
      nominados: cat.nominados.map(nom => ({
        ...nom,
        selected: pref[cat.id] === nom.id
      }))
    }));
    setCategorias(formateado);
  }, []);
  const setSeleccionado = (categoria, seleccionado) => {
    const nuevasCats = categorias.map(c => ({
      ...c,
      nominados:
        categoria.id === c.id
          ? c.nominados.map(n => ({ ...n, selected: n.id === seleccionado.id }))
          : c.nominados
    }));
    setCategorias(nuevasCats);
  };

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            {categorias.map(categoria => (
              <Cat cat={categoria} setSeleccionado={setSeleccionado} />
            ))}
          </Grid>
          {/*<Grid item lg={4} md={6} xl={3} xs={12}>*/}
          {/*  <LatestProducts />*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </Page>
  );
};
export default Dashboard;
