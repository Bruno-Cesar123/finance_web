import { useState, ReactNode } from 'react';

import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Button from '../Button';
import Navbar from '../Navbar';

import logo from '../../assets/images/logo.png';

import { Container, useStyles, Content, HeaderSidebar } from './styles';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="fixed" className="menu">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Finance Web
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <HeaderSidebar>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
            <img src={logo} alt="Logo Finance web" />
          </HeaderSidebar>

          <Divider />

          <Navbar />
        </Drawer>

        <Content>{children}</Content>
      </div>
    </Container>
  );
}
