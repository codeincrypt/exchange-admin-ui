import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import users from "../assets/json/users.json";
import Loader from "./Components/Loader";

import { FiUsers } from "react-icons/fi";
import { LiaMoneyBillAltSolid, LiaCogSolid } from "react-icons/lia";
import { PiContactlessPayment } from "react-icons/pi";
import { ImAttachment } from "react-icons/im";

const UsersView = () => {
  const { id } = useParams();
  const [profiledata, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const getData = (id) => {
    const profiledata = users.find((item) => item.userid === id);
    setData(profiledata);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="col-lg-12">
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className="col-lg-12 mb-3">
            <div className="row">
              <button
                className="btn btn-secondary ml-2"
                onClick={console.log("here")}
              >
                <FiUsers className="mr-2" />
                Profile
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={console.log("here")}
              >
                <FiUsers className="mr-2" />
                Crypto balance
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={console.log("here")}
              >
                <PiContactlessPayment className="mr-2" />
                Wallet History
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={console.log("here")}
              >
                <LiaMoneyBillAltSolid className="mr-2" />
                Fiat History
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={console.log("here")}
              >
                <LiaCogSolid className="mr-2" />
                Setting
              </button>
            </div>
          </div>
          <div className="card p-5">
            <div className="row justify-content-center">
              <div className="col-lg-2">
                <img
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912768/avatar-icon-md.png"
                  className="img-fluid"
                  alt="profile"
                />

                <div className="my-4 text-center">
                  <h5>{profiledata.name}</h5>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-3">
                    <p>Email</p>
                  </div>
                  <div className="col-lg-8">
                    <h6>{profiledata.email}</h6>
                  </div>
                  <div className="col-lg-1">
                    <h6>
                      {profiledata.status === "1" ? (
                        <span className="badge-success badge badge-lg">
                          Active
                        </span>
                      ) : (
                        <span className="badge-danger badge badge-lg">
                          Blocked
                        </span>
                      )}
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3">
                    <p>User Id</p>
                  </div>
                  <div className="col-lg-9">
                    <h6>{profiledata.userid}</h6>
                  </div>
                </div>
                <div className="border-hr"></div>
                <div className="row">
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Mobile Number</p>
                    <h6>{profiledata.phone}</h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Date of Birth</p>
                    <h6>{profiledata.address.zipcode}</h6>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Address</p>
                    <h6>
                      {profiledata.address.street} {profiledata.address.city}
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">State</p>
                    <h6>-</h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Country</p>
                    <h6>-</h6>
                  </div>
                </div>
                <div className="border-hr mt-3"></div>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-1 mt-4">KYC status</p>
                    <h6>
                      {profiledata.kyc === "1" ? (
                        <span className="badge-warning badge badge-lg">
                          Tier 1
                        </span>
                      ) : profiledata.kyc === "2" ? (
                        <span className="badge-warning badge badge-lg">
                          Tier 2
                        </span>
                      ) : profiledata.kyc === "3" ? (
                        <span className="badge-success badge badge-lg">
                          Verified
                        </span>
                      ) : (
                        <span className="badge-danger badge badge-lg">
                          No KYC
                        </span>
                      )}
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Aadhar Number</p>
                    <h6> 1234-5678-9810</h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Aadhar Card Front</p>
                    <h6>
                      {" "}
                      Updated{" "}
                      <ImAttachment
                        className="ml-2"
                        style={{ cursor: "pointer" }}
                      />{" "}
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">Aadhar Card Back</p>
                    <h6>
                      {" "}
                      Updated{" "}
                      <ImAttachment
                        className="ml-2"
                        style={{ cursor: "pointer" }}
                      />{" "}
                    </h6>
                  </div>
                  <div className="col-lg-4">
                    <p className="mb-1 mt-4">PAN Card</p>
                    <h6> ABCDE1234Z</h6>
                  </div>
                  <div className="col-lg-8">
                    <p className="mb-1 mt-4">PAN Card</p>
                    <h6 className="text-danger">
                      {" "}
                      Not Updated{" "}
                      <ImAttachment
                        className="ml-2"
                        style={{ cursor: "pointer" }}
                      />{" "}
                    </h6>
                  </div>
                  <div className="col-lg-12">
                    <p className="mb-1 mt-4">Bank Details</p>
                    <h6>
                      {" "}
                      Updated{" "}
                      <ImAttachment
                        className="ml-2"
                        style={{ cursor: "pointer" }}
                      />{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default UsersView;
