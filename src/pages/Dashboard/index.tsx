import Chart from 'react-apexcharts';

import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';

import Header from '../../components/Header';
import Grid from '../../components/Grid';

import { Container, Content, SectionGrid, ContentChart } from './styles';

export default function Dashboard() {
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
            <div className="entrance">
              <h4>Entradas</h4>
              <ArrowUpwardOutlinedIcon />
            </div>

            <p>R$ 5000.00</p>
          </SectionGrid>
        </Grid>

        <Grid>
          <SectionGrid>
            <div className="spend">
              <h4>Gastos</h4>
              <ArrowDownwardOutlinedIcon />
            </div>
            <p>- R$ 3000.00</p>
          </SectionGrid>
        </Grid>

        <Grid>
          <SectionGrid>
            <div>
              <h4>Total</h4>
              <AttachMoneyOutlinedIcon />
            </div>
            <p>R$ 2000.00</p>
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
