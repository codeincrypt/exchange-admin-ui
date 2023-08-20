import React from "react";

const RightSidebar = (props) => {
  const orderid = props.orderid
  const viewdata = props.viewdata
  const closeSidebar = () => {
    props.closeRightSidebar(false)
  }
  // eslint-disable-next-line
  {/* <div className={`right-sidebar right-sidebar-animate ${orderid === null ? 'd-none' : ''}`}> */}
  return (
    <React.Fragment>
      {viewdata ? (
        <div className={`right-sidebar right-sidebar-animate ${orderid === null ? 'd-none' : ''}`}>
        <div className="col-lg-12 p-3">
          <span>
            <span className="h6">TXN ID : {viewdata.orderid}</span>
            <button className="btn btn-secondary btn-sm float-right" onClick={closeSidebar}>X</button>
          </span>
        </div>
        <div className="border-hr"></div>
        <div className="col-lg-12 p-3">
          <span>
            <span className="h6">Coming soon</span>
          </span>
        </div>
      </div>
      ) : null}
      </React.Fragment>
  );
};

export default RightSidebar;
