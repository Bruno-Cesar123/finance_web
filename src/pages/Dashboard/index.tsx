import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import Header from '../../components/Header';
import Grid from '../../components/Grid';

import {
  Container,
  Content,
  SectionGrid,
  ContentChart,
  InfoValues,
  Title,
} from './styles';
import api from '../../services/api';

export default function Dashboard() {
  const [totalEntrance, setTotalEntrance] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [total, setTotal] = useState(0);

  const chartOptions = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'Entradas',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: 'Gastos',
        data: [90, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  useEffect(() => {
    api.get('/finance/list/total/entrance').then((response) => {
      setTotalEntrance(response.data);
    });

    api.get('/finance/list/total/spend').then((response) => {
      setTotalSpend(response.data);
    });

    setTotal(totalEntrance - totalSpend);
  }, [totalEntrance, totalSpend]);

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

        <ContentChart>
          <Grid>
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="area"
              height="300"
            />
          </Grid>
        </ContentChart>
      </Content>
    </Container>
  );
}
