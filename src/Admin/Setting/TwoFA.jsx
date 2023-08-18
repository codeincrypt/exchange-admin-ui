import React from "react";
import SettingSidebar from "../Components/SettingSidebar";
import { GrLinkNext } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import qrcode from "../../assets/images/qrcode_73015098_ae5ae7e300c340a6cc948816a6742bda.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";

const TwoFA = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const jumpStep = (e) => {
    setCurrentStep(e);
  };

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-3">
          <SettingSidebar />
        </div>
        <div className="col-lg-9">
          <div className="card py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                {/* <h3>An extra layer of security</h3>

                <p className="text-justify">
                  Two-factor authentication (also known as 2FA) is an extra
                  layer of security which requires not only a password and
                  username but also a 6-digit code generated with Authenticator
                  app on your personal device (such as tablet or mobile phone).
                  AppsCo is using Google Authenticator which requires a second
                  step of verification when you sign in.
                </p> */}

                <div class="mb-5">
                  <div class="br-step" data-initial="1" data-label="bottom">
                    <div class="step-progress">
                      <button class={`step-progress-btn active`} type="button">
                        <span class="step-info">Step 1</span>
                      </button>
                      <button
                        class={`step-progress-btn ${
                          currentStep > 1 ? "active" : ""
                        }`}
                        type="button"
                      >
                        <span class="step-info">Step 2</span>
                      </button>
                      <button
                        class={`step-progress-btn ${
                          currentStep > 2 ? "active" : ""
                        }`}
                        type="button"
                      >
                        <span class="step-info">Step 3</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="my-3">
                  {currentStep === 1 ? (
                    <div class="row">
                      <div class="col-3">
                        <img className="img-fluid" src={qrcode} alt="qrcode" />
                      </div>
                      <div class="col-1"></div>
                      <div class="col-8">
                        <p className="text-md">
                          Scan the QR code with authenticator app
                        </p>
                        <p className="text-md">
                          Two-factor authentication (also known as 2FA) is an
                          extra layer of security which requires not only a
                          password and username but also a 6-digit code
                          generated with Authenticator
                        </p>
                      </div>
                      <div class="col-12">
                        <div class="form-group text-center mt-4">
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={(e) => jumpStep(2)}
                          >
                            Next Step <GrLinkNext className="ml-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : currentStep === 2 ? (
                    <React.Fragment>
                      <div class="row justify-content-center mb-5">
                        <div class="col-3 text-center">
                          <img
                            className="img-responsive"
                            style={{ width: 100 }}
                            src={icon1}
                            alt="otpicon1"
                          />
                        </div>
                        <div class="col-6">
                          <p className="text-md">
                            Enter your 6 digit code from your authenticator app
                          </p>
                          <p className="text-md">This will connect the app</p>
                        </div>
                      </div>
                      <div class="row justify-content-center">
                        <div class="col-8">
                          <div class="form-group">
                            <input
                              className="form-control form-control-lg form-control-dark"
                              id="vcode"
                              name="vcode"
                              type="number"
                              placeholder="6 digit code"
                            />
                          </div>
                          <div class="form-group">
                            <button
                              type="button"
                              className="btn btn-warning btn-block"
                              onClick={(e) => jumpStep(3)}
                            >
                              Verify Code
                            </button>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div class="row justify-content-center mb-3">
                        <div class="col-3 text-center">
                          <img
                            className="img-responsive"
                            style={{ width: 100 }}
                            src={icon2}
                            alt="otpicon2"
                          />
                        </div>
                        <div class="col-6">
                          <p className="text-md">
                            You'll need this recovery code if you ever need to
                            sign in without your device
                          </p>
                          <p className="text-md">Save it somewhere safe</p>
                        </div>
                      </div>
                      <div class="row justify-content-center mb-3">
                        <div class="col-3">
                          <ul className="nav text-md text-white font-weight-bold">
                            <li>zEVQIeSF3c</li>
                            <li>wVhJiwTENi</li>
                            <li>0QqieKWjPD</li>
                            <li>ixzFBNQBJS</li>
                            <li>4dngHJb54j</li>
                          </ul>
                        </div>
                        <div class="col-3">
                          <ul className="nav text-md text-white font-weight-bold">
                            <li>gPiI8OpqxQ</li>
                            <li>CpMaPhJmsk</li>
                            <li>alUdVjYMjT</li>
                            <li>g6jtGwmKUh</li>
                            <li>w0HimXUENi</li>
                          </ul>
                        </div>
                      </div>
                      <div class="row justify-content-center">
                        <div class="col-8">
                          <div className="text-center mb-4">
                            <button className="btn btn-warning mx-2 px-4"> <FaRegCopy /> Copy</button>
                            <button className="btn btn-warning mx-2 px-4"> <BiDownload /> Download</button>
                          </div>
                          <p className="small">
                            If you lose access to your phone, you won't be able
                            to log in without a recovery codes, Copy or write
                            down your codes and save it somewhere safe
                          </p>
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFA;
