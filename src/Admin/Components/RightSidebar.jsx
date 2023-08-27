import React from "react";

const RightSidebar = (props) => {
  const orderid = props.orderid;
  const viewdata = props.viewdata;
  const closeSidebar = () => {
    props.closeRightSidebar(false);
  };
  // eslint-disable-next-line
  {
    /* <div className={`right-sidebar right-sidebar-animate ${orderid === null ? 'd-none' : ''}`}> */
  }
  return (
    <React.Fragment>
      {viewdata ? (
        <div
          className={`right-sidebar right-sidebar-animate ${
            orderid === null ? "d-none" : ""
          }`}
        >
          <div className="col-lg-12 p-3">
            <span>
              <span className="h6">TXN ID : {viewdata.orderid}</span>
              <button
                className="btn btn-secondary btn-sm float-right"
                onClick={closeSidebar}
              >
                X
              </button>
            </span>
          </div>
          <div className="border-hr"></div>
          <div className="col-lg-12">
            <div className="p-2 mt-3">
              <h6 className="text-muted">Details</h6>
            </div>
            <table className="table">
              <tr>
                <td>Txn Type </td>
                <td>
                  <span
                    className={`text-center badge badge-lg ${
                      viewdata.type === "DEPOSIT"
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {viewdata.type}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Currency </td>
                <td>{viewdata.currency}</td>
              </tr>
              <tr>
                <td>Amount </td>
                <td> <span className="h5"> {viewdata.amount} </span></td>
              </tr>
              <tr>
                <td>Date </td>
                <td>{viewdata.date}</td>
              </tr>
            </table>
            <div className="p-2">
              <h6 className="text-muted">Customer Details</h6>
            </div>
            <table className="table">
              <tr>
                <td>Customer Name </td>
                <td>{viewdata.name}</td>
              </tr>
              <tr>
                <td>User Id </td>
                <td>{viewdata.userid}</td>
              </tr>
            </table>
            <div className="p-2">
              <h6 className="text-muted">Bank Details</h6>
            </div>
            <table className="table">
              <tr>
                <td>Bank </td>
                <td>{viewdata.senderbank}</td>
              </tr>
              <tr>
                <td>Bank Account No. </td>
                <td>{viewdata.senderbankac}</td>
              </tr>
              <tr>
                <td>Beneficiary name </td>
                <td>{viewdata.senderbeneficiary}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default RightSidebar;
