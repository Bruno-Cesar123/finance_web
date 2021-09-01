import { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import {
  Avatar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import { useAuth } from '../../hooks/AuthContext';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Header, Content } from './styles';
import api from '../../services/api';

interface FinanceFormData {
  type: string;
  description: string;
  user_id: string;
  value: number;
  date: Date;
}

const defaultdate = format(new Date(), 'yyyy-MM-dd');

const formatedDate = parseISO(defaultdate);

const validationSchema = Yup.object().shape({
  type: Yup.string().required('* Tipo obrigatório'),
  description: Yup.string().required('* Descrição obrigatória'),
  user_id: Yup.string(),
  value: Yup.number().required('* Valor obrigatório'),
  date: Yup.date().required('* Data obrigatória'),
});

export default function Finance() {
  const history = useHistory();
  const { addToast } = useToasts();
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: {
      type: 'entrada',
      description: '',
      user_id: user.id,
      value: 0,
      date: formatedDate,
    },
    validationSchema,
    onSubmit: useCallback(
      async (data: FinanceFormData) => {
        try {
          await api.post('/finance', data);

          history.push('/dashboard');

          addToast('Transação cadastrada com sucesso', {
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout: 3000,
          });
        } catch (err) {
          addToast('Houve um erro ao cadastrar, Tente novamente!', {
            appearance: 'error',
            autoDismiss: true,
            autoDismissTimeout: 3000,
          });
        }
      },
      [addToast, history],
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
          <Avatar className="avatar">
            <MonetizationOnOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Cadastrar nova transação!
          </Typography>

          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="type">Tipo da transação</InputLabel>
            <Select
              labelId="type"
              label="Tipo da transação"
              fullWidth
              aria-describedby="Input de tipo"
              id="type"
              name="type"
              autoFocus
              value={formik.values.type}
              onChange={formik.handleChange}
              error={formik.touched.type && Boolean(formik.errors.type)}
            >
              <MenuItem value="entrada">Entrada</MenuItem>
              <MenuItem value="gasto">Gasto</MenuItem>
            </Select>
            <FormHelperText>
              {formik.touched.type && formik.errors.type}
            </FormHelperText>
          </FormControl>

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="description"
            fullWidth
            aria-describedby="Input de descrição"
            label="Digite uma descrição"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="value"
            fullWidth
            aria-describedby="Input de Valor"
            label="Digite um valor"
            id="value"
            name="value"
            type="number"
            placeholder="Ex: R$ 00.00"
            value={formik.values.value}
            onChange={formik.handleChange}
            error={formik.touched.value && Boolean(formik.errors.value)}
            helperText={formik.touched.value && formik.errors.value}
          />

          <Input
            variant="outlined"
            margin="normal"
            autoComplete="date"
            fullWidth
            aria-describedby="Input de Data"
            defaultValue={defaultdate}
            type="date"
            name="date"
            id="date"
            // value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
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
        </form>
      </Content>
    </Container>
  );
}
