import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';

import Axolotl from '../../assets/icons/axolotl.svg';

const useStyles = makeStyles((theme) => ({
  align: {
    display: 'flex',
    flexDirection: 'columns',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing: {
    display: 'flex',
    flexDirection: 'columns',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    textDecoration: 'none',
    color: 'white',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = (route) => {
    history.push(route);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.spacing}>
          <Button
            className={`${classes.logo} ${classes.align}`}
            onClick={() => {
              handleRoute('');
            }}
          >
            <img
              src={Axolotl}
              alt="Icone Axolote"
              height={75}
              width={75}
              className={classes.icon}
            />
            <Typography variant="h3" color="textPrimary">
              Axolote.dev
            </Typography>
          </Button>
          <div>
            <Button
              color="inherit"
              onClick={() => {
                handleRoute('');
              }}
              disableElevation={true}
            >
              <HomeIcon />
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                handleRoute('contato');
              }}
            >
              <EmailIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
