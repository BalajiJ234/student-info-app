import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import StudentList from "./components/Students/StudentList";
const DUMMY_STUD_DETIALS = [
  {
    id: Math.random().toString(),
    name: "Balaji U",
    age: 22,
    Department: "Computers",
    Batch: 2020,
    Percentage: 93,
  },
  {
    id: Math.random().toString(),
    name: "Surya",
    age: 22,
    Department: "Mechanical",
    Batch: 2020,
    Percentage: 92,
  },
  {
    id: Math.random().toString(),
    name: "Ram",
    age: 22,
    Department: "Mechanical",
    Batch: 2020,
    Percentage: 91,
  },
  {
    id: Math.random().toString(),
    name: "Siva",
    age: 22,
    Department: "Computers",
    Batch: 2020,
    Percentage: 90,
  },
  {
    id: Math.random().toString(),
    name: "Ram",
    age: 22,
    Department: "Mechanical",
    Batch: 2020,
    Percentage: 91,
  },
  {
    id: Math.random().toString(),
    name: "Siva",
    age: 22,
    Department: "Computers",
    Batch: 2020,
    Percentage: 90,
  },
  {
    id: Math.random().toString(),
    name: "Ram",
    age: 22,
    Department: "Mechanical",
    Batch: 2020,
    Percentage: 91,
  },
  {
    id: Math.random().toString(),
    name: "Siva",
    age: 22,
    Department: "Computers",
    Batch: 2020,
    Percentage: 90,
  },
  {
    id: Math.random().toString(),
    name: "Siva",
    age: 22,
    Department: "Computers",
    Batch: 2020,
    Percentage: 90,
  },
];
function App() {
  const [studentDetails, setStudentDetails] = useState(DUMMY_STUD_DETIALS);

  return (
    <React.Fragment>
      <CssBaseline />
      <StudentList students={studentDetails} />
    </React.Fragment>
  );
}

export default App;
