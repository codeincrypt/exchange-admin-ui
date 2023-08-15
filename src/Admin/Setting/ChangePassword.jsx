import React from "react";
import SettingSidebar from "../Components/SettingSidebar";

const ChangePassword = () => {
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
                  <label for="oldpass">Old Password</label>
                  <input
                    className="form-control form-control-lg form-control-dark"
                    id="oldpass"
                    name="oldpass"
                    type="text"
                  />
                </div>

                <div class="form-group">
                  <label for="newpass">New Password</label>
                  <input
                    className="form-control form-control-lg form-control-dark"
                    id="newpass"
                    name="newpass"
                    type="text"
                  />
                </div>

                <div class="form-group">
                  <label for="newpass">Confirm New Password</label>
                  <input
                    className="form-control form-control-lg form-control-dark"
                    id="confirmnewpass"
                    name="confirmnewpass"
                    type="text"
                  />
                </div>

                <div class="form-group">
                  <button type="button" className="btn btn-warning btn-block">
                    Update Password
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

export default ChangePassword;
