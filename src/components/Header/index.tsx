import { Link } from 'react-router-dom';
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import logo from '../../assets/images/logo.png';

import { useAuth } from '../../hooks/AuthContext';

import { Container, ContentHeader, Menu, Profile, ContentMenu } from './styles';

export default function Header() {
  const { signOut, user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <ContentHeader>
        <img src={logo} alt="logo finance web" />
        <Menu>
          <Profile onClick={() => setOpenMenu(!openMenu)}>
            <img src={user.avatar_url} alt={user.name} />
          </Profile>
          {openMenu && (
            <ContentMenu>
              <h3>
                {user.name}
                <br />
              </h3>
              <ul>
                <li>
                  <AccountCircleOutlinedIcon />
                  <Link to="/profile">Meu perfil</Link>
                </li>
                <li>
                  <ExitToAppOutlinedIcon />
                  <Link to="/" onClick={signOut}>
                    Logout
                  </Link>
                </li>
              </ul>
            </ContentMenu>
          )}
        </Menu>
      </ContentHeader>
    </Container>
  );
}
