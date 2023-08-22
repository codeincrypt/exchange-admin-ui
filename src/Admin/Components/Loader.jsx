import React from "react";

const Loader = () => {
  return (
    <>
    <div className="card text-center" style={{ paddingTop: 180, paddingBottom: 180 }}>
      <div className="text-center mb-4">
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
      <h5 className="text-white font-weight-light">Loading...</h5>
      </div>
    </>
  );
};

export default Loader;
