import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Avatar, Typography, Button } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import logo from '../../assets/images/logo.png';
import video from '../../assets/videos/video.mp4';

import AuthContext from '../../context/AuthContext';

import Input from '../../components/Input';

import { Container, Content, Header, VideoBg, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrogatório'),
  password: Yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos'),
});

export default function SignIn() {
  const { name } = useContext(AuthContext);

  console.log(name);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (data: SignInFormData) => {
      console.log(data);
    },
  });

  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Logo Finance web" />
        </Header>

        <form onSubmit={formik.handleSubmit}>
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Faça seu Login
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            autoFocus
            fullWidth
            autoComplete="email"
            aria-describedby="Input de email"
            label="Digite seu email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Input
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="current-password"
            aria-describedby="Input de senha"
            label="Digite sua senha"
            name="password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
            Gerencie seus ganhos e gastos de forma
            <span> Gratuita.</span>
          </h1>
        </div>
        <VideoBg autoPlay loop muted src={video} />
      </Background>
    </Container>
  );
}
