import React, { useState } from "react";
import Log from "../../Components/Login/Log";
import "./profile.css";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
const Profile = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const login = true;
  if (!login) {
    return <Log />;
  }
  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="avatar"
          />
          <p>agrawaljoy1@gmail.com</p>
          <button onClick={() => setModal2Open(true)}>EDIT PROFILE</button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Email</p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Gender</p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <div>
              <p>piyush agrawal joy agrawal</p>
              <p>piyush agrawal joy agrawal</p>
              <p>piyush agrawal joy agrawal</p>
            </div>
          </div>
          <Modal
            title="Edit your personal details"
            open={modal2Open}
            footer={null}
            style={{ width: { sm: "100%" } }}
          >
            <Form
              labelCol={{ span: { sm: 8, xl: 5 } }}
              wrapperCol={{ span: 17 }}
              layout="horizontal"
            >
              <Form.Item style={{ marginTop: "20px" }} label="Name">
                <Input />
              </Form.Item>
              <Form.Item label="Email">
                <Input />
              </Form.Item>
              <Form.Item label="Number">
                <Input />
              </Form.Item>
              <Form.Item label="Gender">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Avatar">
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item label="Shipping">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ marginRight: "20px" }}
                  onClick={() => setModal2Open(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setModal2Open(false)}
                  style={{ marginRight: "20px" }}
                >
                  Edit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
