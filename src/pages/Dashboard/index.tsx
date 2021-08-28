import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

import Header from '../../components/Header';
import Grid from '../../components/Grid';

import { Container, Content, SectionGrid, ContentChart } from './styles';
import api from '../../services/api';

interface TotalMoney {
  sum: string;
}

export default function Dashboard() {
  const [total, setTotal] = useState<TotalMoney>();

  useEffect(() => {
    api
      .get('/finance/total/entrance')
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('erro');
      });
  }, []);

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
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: 'series-2',
        data: [90, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <Container>
      <Header />
      <Content>
        <Grid>
          <SectionGrid>
            <div>
              <h3>Total Entrada:</h3>
              <AttachMoneyOutlinedIcon />
            </div>
            <p>{total?.sum}</p>
          </SectionGrid>
        </Grid>

        <Grid>
          <SectionGrid>
            <div>
              <h3>Total Gastos:</h3>
              <AttachMoneyOutlinedIcon />
            </div>
            <p>R$ -2000,00</p>
          </SectionGrid>
        </Grid>

        <Grid>
          <SectionGrid>
            <div>
              <h3>Total:</h3>
              <AttachMoneyOutlinedIcon />
            </div>
            <p>R$ 3000,00</p>
          </SectionGrid>
        </Grid>
      </Content>

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
    </Container>
  );
}
