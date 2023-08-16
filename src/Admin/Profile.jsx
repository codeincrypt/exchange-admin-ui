import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="col-lg-12">
      <div className="card text-center" style={{height: "80vh", paddingTop:'14%'}}>
        <h1 className="">Profile</h1>
        <h3 className="">Coming soon...</h3>
        <Link className="btn btn-lg btn-secondary mt-3" to="/">Go Back</Link>
      </div>
    </div>
  )
}

export default Profile