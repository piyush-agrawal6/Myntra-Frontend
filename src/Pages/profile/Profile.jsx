import React, { useState } from "react";
import "./profile.css";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Profile = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    avatar: "",
    gender: "",
    shipping: "",
  });
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      if (
        formData.name.trim().length < 4 ||
        formData.password.trim().length < 4
      ) {
      } else {
        // dispatch(registerUser(formData));
      }
    } else {
    }
  };
  const { user } = useSelector((store) => store.auth.data);

  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img src={user?.avatar} alt="avatar" />
          <p>{user?.email}</p>
          <button onClick={() => setModal2Open(true)}>EDIT PROFILE</button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>{user?.name}</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>{user?.mobile ? user.mobile : "Not added"}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.gender ? user.gender : "Not added"}</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <p>{user?.shipping ? user.shipping : "Not added"}</p>
          </div>
          <Modal
            title="Edit your personal details"
            open={modal2Open}
            footer={null}
            onCancel={() => setModal2Open(false)}
            style={{ width: { sm: "100%" } }}
          >
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
              <br />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                type="tel"
                placeholder="Enter phone number"
              />
              <br />
              <input
                name="avatar"
                value={formData.avatar}
                onChange={handleFormChange}
                type="url"
                placeholder="Paste avatar link"
              />
              <br />
              <input
                name="shipping"
                value={formData.shipping}
                onChange={handleFormChange}
                type="text"
                placeholder="Shipping details"
              />
              <br />
              <select>
                <option value="true">Select gender</option>
                <option value="true">Male</option>
                <option value="false">Female</option>
                <option value="false">Others</option>
              </select>
              <br />

              <button type="submit">Cancel</button>
              <button type="submit">Save</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
