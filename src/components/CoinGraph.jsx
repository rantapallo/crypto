import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

function CoinGraph({coinHistory, days}) {

  Chart.register(...registerables)

  return (
    <div className="coin-graph">
      <Line 
        data={{
          labels: coinHistory.map((coin) => {
            let date = new Date(coin[0]);
            return date.toLocaleDateString();
          }),
          datasets: [{
            label: `${days} days value change`,
            data: coinHistory.map((coin) => coin[1]),
            borderColor: ['rgba(110, 110, 110, 1)'],
            borderWidth: 1
          }]
        }} 
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  )
}

export default CoinGraph