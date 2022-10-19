import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <html>
      <center><h1>The Assignment</h1></center>
      <p>Implement a Single Page React Application to Manage students.</p>
      <h3>
      <p><b>Easy</b></p>
      </h3>
      <li>There will be 2 pages:
        <ul>
          <li>Add student</li>
          <li>Students</li>
        </ul>
      </li>
      <li>Students page
      <ul>
          <li>There should be “Add student” button which will redirect to a new page
          (Add Student) where a user can fill in a form and add a new student.
          After saving the data the new student should appear in the table of all
          students on the Students page.</li>
          <li>Table heading:</li>
            <ul>
              <li>First Name - string</li>
              <li>Last Name - string,</li>
              <li>Username - string,</li>
              <li>School Name - string,</li>
              <li>Licence – enum(licensed, not licensed)</li>
            </ul>
          <li>There should be an ability to delete a student/multiple students from the list.</li>
          <li>There should be an ability to edit information about an existing student.</li>
        </ul>
      </li>
      <h3>
      <p><b>Medium</b></p>
      </h3>
      All requirements for <b>easy</b> and the following:
      <li>All information on the Students page (student first/last name, username, password, school name) 
          must be preserved after page reload (provide RestAPI and DB);</li>
      <li>Usage of Cookies is prohibited;</li>
      <li>Ability to sort and filter the grid;</li>
      <li>Ability to save current filter for quick-search later;</li>
      <li>By clicking on a student username a student photo is opened as a modal window (alerts and prompts are prohibited)</li>
      <h3>
      <p><b>Hard</b></p>
      </h3>
      All requirements for <b>medium</b> and the following:
      <li>Use ESLint</li>
          </html>
    );
  }
}
 
export default Home;