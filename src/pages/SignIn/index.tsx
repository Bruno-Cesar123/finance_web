import { Link } from 'react-router-dom';
import { Avatar, Typography, Button } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import logo from '../../assets/images/logo.png';
import video from '../../assets/videos/video.mp4';

import Input from '../../components/Input';

import { Container, Content, Header, VideoBg, Background } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Logo Finance web" />
        </Header>

        <form>
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Faça seu Login
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            aria-describedby="Input de email"
            fullWidth
            id="email"
            label="Digite seu email"
            name="email"
            autoComplete="email"
            autoFocus
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
            Entrar
          </Button>
          <div className="links">
            <Link to="/forgot-password">Esqueceu a senha?</Link>
            <Link to="/signup">Ainda não possui conta?</Link>
          </div>
        </form>
      </Content>
      <Background>
        <div className="title">
          <h1>
            Gerencie seus ganhos e gastos de forma <span>gratuita.</span>
          </h1>
        </div>
        <VideoBg autoPlay loop muted src={video} />
      </Background>
    </Container>
  );
}
