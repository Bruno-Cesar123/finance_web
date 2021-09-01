import { useCallback, ChangeEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { Avatar, Typography } from '@material-ui/core';

import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import { Container, Header, Content, AvatarInput } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  old_password: Yup.string(),
  password: Yup.string()
    .min(6, '* No min 6 caracteres')
    .when('old_password', {
      is: (value: string) => value && value.length > 0,
      then: Yup.string().required('Campo obrigatório'),
      otherwise: Yup.string(),
    }),
  password_confirmation: Yup.string()
    .when('old_password', {
      is: (value: string) => value && value.length > 0,
      then: Yup.string().required('Campo obrigatório'),
      otherwise: Yup.string(),
    })
    .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta'),
});

export default function Profile() {
  const { addToast } = useToasts();
  const history = useHistory();
  const { user, updateUser } = useAuth();

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);

          addToast('Avatar atualizado com sucesso', {
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout: 3000,
          });
        });
      }
    },
    [updateUser, addToast],
  );

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      old_password: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema,
    onSubmit: useCallback(
      async (data: ProfileFormData) => {
        try {
          const { name, email, old_password, password, password_confirmation } =
            data;
          const formData = {
            name,
            email,
            ...(old_password
              ? {
                  old_password,
                  password,
                  password_confirmation,
                }
              : {}),
          };

          console.log(formData);

          const response = await api.put('/profile', formData);

          updateUser(response.data);

          history.push('/dashboard');

          addToast('Conta alterada sucesso', {
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout: 3000,
          });
        } catch (err) {
          addToast('Não foi possivel alterar sua conta', {
            appearance: 'error',
            autoDismiss: true,
            autoDismissTimeout: 3000,
          });
        }
      },
      [addToast, history, updateUser],
    ),
  });

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <KeyboardBackspaceOutlinedIcon />
        </Link>
      </Header>
      <Content>
        <form onSubmit={formik.handleSubmit}>
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <CameraAltOutlinedIcon />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <Avatar className="avatar">
            <AssignmentIndOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Meu Perfil
          </Typography>

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="name"
            fullWidth
            autoFocus
            aria-describedby="Input de nome"
            label="Nome:"
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
            label="E-mail"
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
            autoComplete="old-password"
            fullWidth
            aria-describedby="Input de senha"
            label="Senha antiga"
            type="password"
            name="old_password"
            id="old_password"
            value={formik.values.old_password}
            onChange={formik.handleChange}
            error={
              formik.touched.old_password && Boolean(formik.errors.old_password)
            }
            helperText={
              formik.touched.old_password && formik.errors.old_password
            }
          />

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="password"
            fullWidth
            aria-describedby="Input de senha"
            label="Nova senha"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="password-confirmation"
            fullWidth
            aria-describedby="Input de senha"
            label="Confirme sua senha"
            type="password"
            name="password_confirmation"
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
            Confirmar mudanças
          </Button>
        </form>
      </Content>
    </Container>
  );
}
