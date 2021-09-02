import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useLocation, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { Avatar, Typography } from '@material-ui/core';
import VpnLockOutlinedIcon from '@material-ui/icons/VpnLockOutlined';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/images/logo.png';

import api from '../../services/api';

import { Container, Header, Content } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Confirmação incorreta',
  ),
});

export default function ResetPassword() {
  const { addToast } = useToasts();
  const history = useHistory();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirmation: '',
    },
    validationSchema,
    onSubmit: async (data: ResetPasswordFormData) => {
      try {
        const { password, password_confirmation } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        addToast('Senha alterada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });

        history.push('/');
      } catch (err) {
        addToast('Não foi possível alterar a senha', {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
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
            Resetar senha!
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            autoFocus
            fullWidth
            autoComplete="password"
            aria-describedby="Input de senha"
            label="Digite a nova senha"
            name="password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Input
            variant="outlined"
            margin="normal"
            autoFocus
            fullWidth
            autoComplete="password_confirmation"
            aria-describedby="Input de senha"
            label="Confirme a nova senha"
            name="password_confirmation"
            type="password"
            id="password_confirmation"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.password_confirmation &&
              Boolean(formik.errors.password_confirmation)
            }
            helperText={
              formik.touched.password_confirmation &&
              formik.errors.password_confirmation
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="form-button"
          >
            Confirmar
          </Button>
        </form>
      </Content>
    </Container>
  );
}
