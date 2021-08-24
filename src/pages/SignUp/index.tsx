import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { Avatar, Typography, Button } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import logo from '../../assets/images/logo.png';

import Input from '../../components/Input';

import { Container, Header, Content } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('* Nome obrigatório'),
  email: Yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrogatório'),
  password: Yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos'),
});

export default function SignUp() {
  const { addToast } = useToasts();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (data: SignUpFormData) => {
      console.log(data);

      addToast('Conta criada com sucesso', {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    },
  });

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Finance web" />
      </Header>

      <Content>
        <form onSubmit={formik.handleSubmit}>
          <Avatar className="avatar">
            <LockOpenOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Cadastre-se!
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="name"
            fullWidth
            autoFocus
            aria-describedby="Input de nome"
            label="Digite seu nome"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="email"
            fullWidth
            aria-describedby="Input de email"
            label="Digite seu email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="current-password"
            fullWidth
            aria-describedby="Input de senha"
            label="Digite sua senha"
            type="password"
            name="password"
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
            Criar conta
          </Button>

          <div className="links">
            <Link to="/">
              <ArrowBackOutlinedIcon /> Retornar ao login
            </Link>
          </div>
        </form>
      </Content>
    </Container>
  );
}
