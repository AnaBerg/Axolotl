import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import AxolotlIcon from '../../assets/icons/axolotl-colored.svg';
import VictorImg from '../../assets/img/victor.jpg';
import AnaImg from '../../assets/img/ana.jpeg';
import AthosImg from '../../assets/img/athos.jpeg';
import LucasImg from '../../assets/img/lucas.jpeg';

import { Header, UserCard } from '../../components';

const useStyles = makeStyles((theme) => ({
  align: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'column',
    marginLeft: 50,
    height: 'calc(100vh - 90px)',
  },
  card: {
    width: '70%',
    marginTop: 100,
  },
  img: {
    borderRadius: '50%',
  },
  cardText: {
    marginLeft: 100,
    marginRight: 100,
  },
  cardContainer: {
    padding: 100,
    maxHeight: 300,
  },
  userCardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  userCard: {
    width: '60%',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 30,
  },
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <Header />

      <div className={classes.align}>
        <img
          src={AxolotlIcon}
          alt="Imagem Axolote"
          classeName={classes.img}
          height={500}
          width={500}
        />
        <div className={`${classes.align} ${classes.text}`}>
          <Typography variant="h1">AXOLOTE.DEV</Typography>
          <Typography variant="h6">Lorem Ipsum Dolun</Typography>
        </div>
      </div>

      <UserCard
        img={VictorImg}
        name="Victor Ohashi"
        description="Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que
              abundância meu irmão viuu!! Só digo uma coisa, Domingo ela não
              vai! Danadaa!! Pau que nasce torto, Nunca se endireita."
      />
      <UserCard
        img={AnaImg}
        name="Ana Berg"
        description="Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!!"
        reverse
      />
      <UserCard
        img={AthosImg}
        name="Athos Fleming"
        description="Eiiitaaa Mainhaaa!! Esse Lorem ipsum é só na sacanageeem!! E que
        abundância meu irmão viuu!! Só digo uma coisa, Domingo ela não
        vai! Danadaa!! Pau que nasce torto, Nunca se endireita."
      />
      <UserCard
        img={LucasImg}
        name="Lucas Araújo"
        description="Sabe de nada inocente!! Conheça meu lorem que é Tchan, Tchan, Tchannn!! Txu Txu Tu Paaaaa!! Vem, vem ordinária!! Venha provar do meu dendê que você não vai se arrepender. Só na sacanageeem!!"
        reverse
      />
    </>
  );
}

export default LandingPage;
