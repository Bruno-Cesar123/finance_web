import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const Container = styled.div`
  min-height: 100vh;
  background: #fff;

  .menu {
    background: #0db14b;
  }
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: '#814444',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
