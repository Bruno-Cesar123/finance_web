import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { format, parseISO } from 'date-fns';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core';

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import Header from '../../components/Header';
import Grid from '../../components/Grid';

import api from '../../services/api';

import {
  Container,
  Content,
  SectionGrid,
  InfoValues,
  Title,
  ContentTable,
} from './styles';

interface Finances {
  id: string;
  type: string;
  description: string;
  value: number;
  date: string;
  dateFormatted: string;
  createdAtFormatted: string;
  created_at: string;
}

export default function Dashboard() {
  const { addToast } = useToasts();
  const [totalEntrance, setTotalEntrance] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [finances, setFinances] = useState<Finances[]>([]);

  const handleTotalEntrance = useCallback(() => {
    api.get('/finance/total/entrance').then((response) => {
      setTotalEntrance(response.data);
    });
  }, []);

  const handleTotalSpend = useCallback(() => {
    api.get('/finance/total/spend').then((response) => {
      setTotalSpend(response.data);
    });
  }, []);

  const handleDelete = useCallback(
    async (id: string, index: number) => {
      try {
        await api.delete(`/finance/${id}`);
        const newFinances = [...finances];
        newFinances.splice(index, 1);
        setFinances(newFinances);
        handleTotalEntrance();
        handleTotalSpend();
      } catch (err) {
        addToast('Houve um erro ao deletar', {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      }
    },
    [finances, handleTotalEntrance, handleTotalSpend, addToast],
  );

  useEffect(() => {
    api.get<Finances[]>('/finance').then((response) => {
      const financesFormated = response.data.map((finance) => {
        return {
          ...finance,
          createdAtFormatted: format(
            parseISO(finance.created_at),
            'dd-MM-yyyy',
          ),
          dateFormatted: format(parseISO(finance.date), 'dd-MM-yyyy'),
        };
      });
      setFinances(financesFormated);
    });
  }, []);

  useEffect(() => {
    handleTotalEntrance();
    handleTotalSpend();
  }, [handleTotalEntrance, handleTotalSpend]);

  const total = totalEntrance - totalSpend;

  return (
    <Container>
      <Header />

      <Content>
        <Title>
          <h2>Dashboard</h2>
          <Link to="/finance">
            <AddCircleOutlineOutlinedIcon />
            Nova transação
          </Link>
        </Title>
        <InfoValues>
          <Grid>
            <SectionGrid>
              <div className="entrance">
                <h4>Entradas</h4>
                <ArrowUpwardOutlinedIcon />
              </div>

              <p>R$ {totalEntrance || '0.00'}</p>
            </SectionGrid>
          </Grid>

          <Grid>
            <SectionGrid>
              <div className="spend">
                <h4>Gastos</h4>
                <ArrowDownwardOutlinedIcon />
              </div>
              <p> R$ -{totalSpend || '0.00'}</p>
            </SectionGrid>
          </Grid>

          <Grid>
            <SectionGrid>
              <div>
                <h4>Total</h4>
                <AttachMoneyOutlinedIcon />
              </div>
              <p>R$ {total.toFixed(2)}</p>
            </SectionGrid>
          </Grid>
        </InfoValues>

        <ContentTable>
          <Grid>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Tipo</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                  <TableCell align="right">Valor</TableCell>
                  <TableCell align="right">Data da transação</TableCell>
                  <TableCell align="right">Criado em:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {finances.map((finance, index) => {
                  return (
                    <TableRow key={finance.id}>
                      <TableCell align="right">{finance.type}</TableCell>
                      <TableCell align="right">{finance.description}</TableCell>
                      <TableCell align="right">{finance.value}</TableCell>
                      <TableCell align="right">
                        {finance.dateFormatted}
                      </TableCell>
                      <TableCell align="right">
                        {finance.createdAtFormatted}
                      </TableCell>

                      <TableCell align="right">
                        <DeleteForeverOutlinedIcon
                          style={{ color: 'red', cursor: 'pointer' }}
                          onClick={() => handleDelete(finance.id, index)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
        </ContentTable>
      </Content>
    </Container>
  );
}
