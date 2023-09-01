import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { BiCopy } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import cryptobalance from "../assets/json/cryptobalance.json";
import Loader from "./Components/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoBalanceChart = () => {
  const { id } = useParams();
  const [mydata, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const getData = (id) => {
    const mydata = cryptobalance.find((item) => item.asset === id);
    setData(mydata);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  let labels = [];
  for (let i = 1; i <= 30; i++) {
    labels.push(i + " Sep");
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

  const data = {
    labels,
    datasets: [
      {
        label: `${id} Balance Chart `,
        data: datalists,
        borderColor: `rgba(${mydata.color})`,
        backgroundColor: `rgba(${mydata.color}, 0.5)`,
        // borderColor: `rgb(255, 99, 132)`,
        // backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-8">
          {loading ? (
            <Loader />
          ) : (
            <div className="card">
                <Line data={data} />
              <div className="card-bg-image" style={{backgroundImage: `url(${mydata.icon})`}}>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-4">
          {loading ? (
            <Loader />
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="card p-3">
                  <h4 className="">
                    {mydata.currency} ({mydata.asset})
                  </h4>
                  <p className="text-muted pb-0 mb-0">
                    {mydata.address}
                    <BiCopy
                      className="ml-2"
                      style={{ cursor: "pointer" }}
                      onClick={console.log("copied")}
                    />{" "}
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="card p-3">
                  <h3> {mydata.balance} </h3>
                  <h5 className="text-muted font-weight-light ">Balance</h5>
                  {mydata.balance > 1 ? (
                    <BsArrowUp className="card-icons text-success" />
                  ) : (
                    <BsArrowDown className="card-icons text-danger" />
                  )}
                </div>
              </div>

              <div className="col-6">
                <div className="card p-3">
                  <h3>0.05</h3>
                  <h5 className="text-muted font-weight-light ">
                    Opening Balance
                  </h5>
                </div>
              </div>

              <div className="col-6">
                <div className="card p-3">
                  <h3>0.05</h3>
                  <h5 className="text-success font-weight-light ">Deposit</h5>
                </div>
              </div>

              <div className="col-6">
                <div className="card p-3">
                  <h3>0.05</h3>
                  <h5 className="text-danger font-weight-light ">Withdrawal</h5>
                </div>
              </div>

              <div className="col-6">
                <div className="card p-3">
                  <h3>0.05</h3>
                  <h5 className="text-danger font-weight-light ">Send</h5>
                </div>
              </div>

              <div className="col-6">
                <div className="card p-3">
                  <h3>0.05</h3>
                  <h5 className="text-success font-weight-light ">Receive</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoBalanceChart;
