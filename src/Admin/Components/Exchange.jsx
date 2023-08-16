import InputGroup from "react-bootstrap/InputGroup";

const CurrencyExchange = ({ from, to }) => {
  return (
    <>
      <h2 className="text-right">0.4 MYTOKEN</h2>
      {/* <h2 className="text-right">1 USD</h2> */}
      <InputGroup className="mb-3">
        <input className="form-control form-control-lg form-control-dark" value="80" type="number" />
        <select className="form-control form-control-lg form-control-dark">
          {from.map((item, i) => (
            <option key={i} value={item.value}>{item.name} </option>
          ))}
        </select>
      </InputGroup>
      <InputGroup className="mb-3">
      <input className="form-control form-control-lg form-control-dark" value="1" type="number" />
        <select className="form-control form-control-lg form-control-dark">
          {to.slice(1, 10).map((item, j) => (
            <option key={j} value={item.value}>{item.name} </option>
          ))}
        </select>
      </InputGroup>
      <p className="small text-success">Showing converted price of 80 INR  </p>
    </>
  );
};

export default CurrencyExchange;
