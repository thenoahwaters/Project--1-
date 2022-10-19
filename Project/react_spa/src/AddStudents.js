import React, {  } from "react";
import { Button, Input, Form } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { useNavigate } from "react-router-dom";


function AddStudents() {
  const navigate = useNavigate();
  const onFinish = ( e ) => {
    navigate( "/students", { state: e } );
    // result = Object.entries(e);  
  };

  // console.log(result)

  /*
  const randomNumber = parseInt(Math.random() * 1000);
  const newStudent ={
    id:randomNumber,
    first:result[0],
    last: result[1],
    user: result[2],
    school: result[3],
    enum: result[4],
  }
*/


  return (

    <div className="Student Form">
      <center><h1>Add Student Form</h1></center>
      <Form onFinish={onFinish}>
        <Form.Item label='First Name' name='firstName'>
          <Input placeholder="Please enter your first name"></Input>
        </Form.Item>
        <Form.Item label='Last Name' name='lastName'>
          <Input placeholder="Please enter your last name"></Input>
        </Form.Item>
        <Form.Item label='Username' name='userName'>
          <Input placeholder="Please enter your username"></Input>
        </Form.Item>
        <Form.Item label='School Name' name='schoolName'>
          <Input placeholder="Please enter your school's name"></Input>
        </Form.Item>
        <Form.Item label='Licensed?' name='licenseEnum'>
          <Input placeholder="Yes/No"></Input>
        </Form.Item>

        <Form.Item>
          <Form.Item></Form.Item><Button block type='primary' htmlType='submit'>
            Submit</Button>
        </Form.Item>
      </Form>

    </div>

  );

}


export default AddStudents;