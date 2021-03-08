import { TextField, Grid, makeStyles, Paper, Button } from '@material-ui/core';

import Header from '../../components/Header';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: 'calc(100vh - 90px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 30,
    backgroundColor: theme.palette.primary.main,
    maxWidth: '90%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Input(props) {
  const { grid } = props;
  return (
    <Grid item xs={12} {...grid}>
      <Paper elevation={1}>
        <TextField fullWidth variant="outlined" color="secondary" {...props} />
      </Paper>
    </Grid>
  );
}

function Form() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <form>
        <div className={classes.container}>
          <Paper elevation={2} className={classes.card}>
            <Grid container spacing={3}>
              <Input label="Nome completo" />

              <Input label="E-mail" grid={{ md: 6 }} />

              <Input label="CPF" grid={{ md: 6 }} />

              <Input label="N° cartão de crédito" />

              <Input label="Código de segurança" grid={{ md: 6 }} />

              <Input label="Data de validade" grid={{ md: 6 }} />

              <Grid item xs={12} className={classes.buttonContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  ENVIAR
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </form>
    </>
  );
}

export default Form;
