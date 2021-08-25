import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { Container, useStyles } from './styles';

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static" className="menu">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}
