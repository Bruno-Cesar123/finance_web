import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';

import { Container } from './styles';

export default function NavBar() {
  return (
    <Container>
      <List>
        <Link to="/dashboard" className="link">
          <ListItem button>
            <ListItemIcon>
              <EqualizerOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="dashboard" />
          </ListItem>
        </Link>
        <Link to="/profile" className="link">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="profile" />
          </ListItem>
        </Link>
      </List>
    </Container>
  );
}
