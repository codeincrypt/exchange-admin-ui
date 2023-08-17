import React from "react";
import SettingSidebar from "../Components/SettingSidebar";

import qrcode from "../../assets/images/qrcode_73015098_ae5ae7e300c340a6cc948816a6742bda.png";

const TwoFA = () => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-3">
          <SettingSidebar />
        </div>
        <div className="col-lg-9">
          <div className="card py-5">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">

                <h3>An extra layer of security</h3>
                
                <p className="text-justify">Two-factor authentication (also known as 2FA) is an extra layer of security which requires not only a password and username but also a 6-digit code generated with Authenticator app on your personal device (such as tablet or mobile phone). AppsCo is using Google Authenticator which requires a second step of verification when you sign in.</p>

                <p className="text-center">Download and install application for your device</p>

                <p className="text-center">Once you scanned the barcode, enter the 6 digit code below : </p>

                <div class="form-group">
                  <label for="vcode">Verification Code</label>
                  <input className="form-control form-control-lg form-control-dark" id="vcode" name="vcode" type="number" />
                </div>

                <div class="form-group">
                  <button type="button" className="btn btn-warning">
                    Enable 2FA
                  </button>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFA;
