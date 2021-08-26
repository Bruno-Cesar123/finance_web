import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const Container = styled.div`
  min-height: 100vh;
  background: #fff;

  .menu {
    background: #0db14b;
  }
`;

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      color: '#0db14b',
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);

export const Content = styled.main`
  margin-top: 70px;
`;

export const HeaderSidebar = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    width: 120px;
  }
`;
