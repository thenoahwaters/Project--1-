/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";
import { useLocation } from "react-router-dom";
function Students(result) {
  const location = useLocation();
  console.log(result);

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);


  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      first: "Noah",
      last: "Waters",
      user: "aUser15",
      school: "UW Madison",
      enum: "Yes",
    },
    {
      id: 2,
      first: "Frank",
      last: "Hart",
      user: "13lots",
      school: "U of Oregon",
      enum: "No",
    }, {
      id: 3,
      first: "Michelle",
      last: "Denfrey",
      user: "mimi14",
      school: "Harvard",
      enum: "Yes",
    }, {
      id: 4,
      first: "Leslie",
      last: "Owens",
      user: "pithcer34",
      school: "Harvard",
      enum: "No",
    }, {
      id: 5,
      first: "Mike",
      last: "Park",
      user: "mike84",
      school: "UW Madison",
      enum: "No",
    },
    {
      id: 6,
      first: "Karen",
      last: "Trust",
      user: "baseball42",
      school: "Texas A&M",
      enum: "No",
    },
    {
      id: 7,
      first: "Parker",
      last: "Tuss",
      user: "frisb98",
      school: "U of Oregon",
      enum: "Yes",
    },
    {
      id: 8,
      first: "Derrick",
      last: "Nort",
      user: "13lots",
      school: "U of Michigan",
      enum: "Yes",
    },
    {
      id: 9,
      first: "Walter",
      last: "Vurc",
      user: "lastjr33",
      school: "Texas A&M",
      enum: "Yes",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "First Name",
      dataIndex: "first",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.first.localeCompare(b.first),
    },
    {
      key: "2",
      title: "Last Name",
      dataIndex: "last",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.last.localeCompare(b.last),
    },
    {
      key: "3",
      title: "Username",
      dataIndex: "user",
    },
    {
      key: "4",
      title: "School Name",
      dataIndex: "school",
      filters: [
        {
          text: "UW Madison",
          value: "UW Madison",
        },
        {
          text: "U of Oregon",
          value: "U of Oregon",
        },
        {
          text: "Harvard",
          value: "Harvard",
        },
        {
          text: "Texas A&M",
          value: "Texas A&M",
        },
        {
          text: "U of Michigan",
          value: "U of Michigan",
        },
      ],
      onFilter: (value, record) => record.school.indexOf(value) === 0,
    },
    {
      key: "5",
      title: "License",
      dataIndex: "enum",
      filters: [
        {
          text: "Yes",
          value: "Yes",
        },
        {
          text: "No",
          value: "No",
        },
      ],
      onFilter: (value, record) => record.enum.indexOf(value) === 0,
    },
    {
      key: "6",
      title: "Student Info",
      render: () => {
        return (
          <Button type="primary" onClick={onClickUser}>
            User Profile
          </Button>

        );
      }
    },
    {
      key: "7",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined onClick={() => {
              onEditStudent(record);
            }}
              style={{ color: "black" }}
            />
            <DeleteOutlined onClick={() => {
              onDeleteStudent(record);
            }}
              style={{ color: "red", marginLeft: 4 }}
            />
          </>
        );
      },
    },

  ];
  useEffect(() => {

    if (location.state) {
      const { firstName, lastName, licenseEnum, schoolName, userName } = location.state;
      setDataSource([...dataSource,
      {
        id: dataSource.length + 1,
        first: firstName,
        last: lastName,
        user: userName,
        school: schoolName,
        enum: licenseEnum,
      },
      ]);
    }
  }, [location.state]);
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Please confirm deletion.",
      okText: "Delete",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id != record.id);
        });
      }
    });
  };

  const onClickUser = () => {
    Modal.info({
      title: "Student",
      content: <img src={require(".//picture_student.png")}></img>,
      onOk: () => {

        return;
      }
    }
    );
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  return (
    <div>
      <center>
        <h2>Add Students Form</h2>
      </center>
      <p></p>

      <center><button type="button" onClick={(e) => {
        e.preventDefault();
        window.location.href = "/addStudents";
      }}> Add student</button></center>
      <Table columns={columns} dataSource={dataSource}></Table>

      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          setIsEditing(false);
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          setIsEditing(false);
        }}
      >
        <Input value={editingStudent?.first} onChange={(e) => {
          setEditingStudent(pre => {
            return { ...pre, first: e.target.value };
          });
        }} />
        <Input value={editingStudent?.last} onChange={(e) => {
          setEditingStudent(pre => {
            return { ...pre, last: e.target.value };
          });
        }} />
        <Input value={editingStudent?.user} onChange={(e) => {
          setEditingStudent(pre => {
            return { ...pre, user: e.target.value };
          });
        }} />
        <Input value={editingStudent?.school} onChange={(e) => {
          setEditingStudent(pre => {
            return { ...pre, school: e.target.value };
          });
        }} />
        <Input value={editingStudent?.enum} onChange={(e) => {
          setEditingStudent(pre => {
            return { ...pre, enum: e.target.value };
          });
        }} />
      </Modal>

    </div>
  );
}

export default Students;