import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

let labels = [];
for (let i = 1; i <= 31; i++) {
  labels.push(i + " Aug");
}
let datalists = [
  "0.0894",
  "0.1145",
  "0.0955",
  "0.09634",
  "0.11534",
  "0.11657",
  "0.11896",
  "0.09855",
  "0.09654",
  "0.0912",
  "0.1145",
  "0.1136",
  "0.064",
  "0.064",
  "0.064",
  "0.078",
  "0.078",
  "0.078",
  "0.078",
  "0.09756",
  "0.09965",
  "0.1123",
  "0.1123",
  "0.11654",
  "0.11654",
  "0.11654",
  "0.12754",
  "0.11428",
  "0.0963",
  "0.084",
  "0.050",
];
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: "BTC Balance Chart ",
      data: datalists,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const CryptoBalanceChart = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="">
              <Line data={data} />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
          <div className="card-header">
          <h4>Bitcoin (BTC)</h4>
          </div>
            <table className="table">
              <tr>
                <td width="40%">Currency</td>
                <td>Bitcoin</td>
              </tr>
              <tr>
                <td>Asset Name</td>
                <td>BTC</td>
              </tr>
              <tr>
                <td>Deposit</td>
                <td>0.05</td>
              </tr>
              <tr>
                <td>Withdrawal</td>
                <td>0.05</td>
              </tr>
              <tr>
                <td>Send</td>
                <td>0.05</td>
              </tr>
              <tr>
                <td>Receive</td>
                <td>0.05</td>
              </tr>
              <tr>
                <td>Opening Balance</td>
                <td>0.089</td>
              </tr>
              <tr>
                <td>Current Balance</td>
                <td>0.05</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoBalanceChart;
