import React from "react";
import SettingSidebar from "../Components/SettingSidebar";

const CryptoCoins = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-3">
          <SettingSidebar />
        </div>
        <div className="col-lg-9">
          <div className="card py-5">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div class="form-group">
                  <label for="oldpass">Currency Name</label>
                  <input
                    className="form-control form-control-dark"
                    id="oldpass"
                    name="oldpass"
                    type="text"
                    placeholder="Enter currency name"
                  />
                </div>

                <div class="form-group">
                  <label for="newpass">Currency assets code</label>
                  <input
                    className="form-control form-control-dark"
                    id="newpass"
                    name="newpass"
                    type="text"
                    placeholder="Enter Currency assets code"
                  />
                </div>

                <div class="form-group">
                  <label for="newpass">Currency Status</label>
                  <select
                    className="form-control form-control-dark"
                    id="newpass"
                    name="newpass"
                    type="text"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                <div class="form-group">
                  <button type="button" className="btn btn-warning btn-block">
                    Add New Currency
                  </button>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCoins;
