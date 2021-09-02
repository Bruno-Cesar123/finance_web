import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';

import { Avatar, Typography } from '@material-ui/core';
import VpnLockOutlinedIcon from '@material-ui/icons/VpnLockOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import logo from '../../assets/images/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';

import { Container, Header, Content } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('* Digite um email válido')
    .required('* E-mail obrogatório'),
});

export default function ForgotPassword() {
  const { addToast } = useToasts();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        await api.post('/password/forgot', {
          email: data.email,
        });

        history.push('/');

        addToast('Email enviado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      } catch (err) {
        addToast('Não foi possível enviar o email', {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      } finally {
        setLoading(false);
      }
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
            <VpnLockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Recuperação de senha!
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            autoFocus
            fullWidth
            autoComplete="email"
            aria-describedby="Input de email"
            label="Digite seu email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="form-button"
          >
            {loading ? 'ENVIANDO...' : 'ENVIAR'}
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
