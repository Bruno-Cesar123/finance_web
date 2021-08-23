import { Avatar, Typography, Button } from '@material-ui/core';

import VpnLockOutlinedIcon from '@material-ui/icons/VpnLockOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import logo from '../../assets/images/logo.png';

import Input from '../../components/Input';

import { Container, Header, Content } from './styles';

export default function ForgotPassword() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Finance web" />
      </Header>

      <Content>
        <form>
          <Avatar className="avatar">
            <VpnLockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Esqueceu senha!
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            aria-describedby="Input de email"
            fullWidth
            name="email"
            label="Digite seu email"
            type="email"
            id="email"
            autoComplete="email"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="form-button"
          >
            Enviar
          </Button>

          <div className="links">
            <a href="/">
              <ArrowBackOutlinedIcon /> Retornar ao login
            </a>
          </div>
        </form>
      </Content>
    </Container>
  );
}
