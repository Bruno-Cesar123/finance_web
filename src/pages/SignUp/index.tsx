import { Avatar, Typography, Button } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import logo from '../../assets/images/logo.png';

import Input from '../../components/Input';

import { Container, Header } from './styles';

export default function SignUp() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Finance web" />
      </Header>

      <form>
        <Avatar className="avatar">
          <LockOpenOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Cadastre-se!
        </Typography>

        <Input
          variant="outlined"
          margin="normal"
          aria-describedby="Input de nome"
          fullWidth
          id="name"
          label="Digite seu nome"
          name="name"
          autoComplete="name"
          autoFocus
        />

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

        <Input
          variant="outlined"
          margin="normal"
          aria-describedby="Input de senha"
          fullWidth
          name="password"
          label="Digite sua senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="form-button"
        >
          Criar conta
        </Button>

        <div className="links">
          <a href="/">
            <ArrowBackOutlinedIcon /> Retornar ao login
          </a>
        </div>
      </form>
    </Container>
  );
}
