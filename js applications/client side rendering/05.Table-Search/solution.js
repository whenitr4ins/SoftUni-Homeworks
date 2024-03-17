import { html, render } from "./node_modules/lit-html/lit-html.js"

const tbody = document.querySelector("tbody");
const searchField = document.getElementById("searchField");

solve();

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   loadStudents();

   function onClick() {
      loadStudents();
   }

   async function loadStudents(){
      const response = await fetch("http://localhost:3030/jsonstore/advanced/table");
      const data = await response.json();
      const searchStudent = Object.values(data).map(student => findStudent(student));
      render(searchStudent, tbody);
      searchField.value = "";
   }
   function findStudent({firstName, lastName, email, course, _id}){
      const searchValue = searchField.value.toLowerCase();
      const firstNameLower = firstName.toLowerCase();
      const lastNameLower = lastName.toLowerCase();
      const emailLower = email.toLowerCase(); 
      const courseLower = course.toLowerCase();
      let isActive = false;
      if(searchValue){
          if(firstNameLower.includes(searchValue) ||
          lastNameLower.includes(searchValue) ||
          emailLower.includes(searchValue) ||
          courseLower.includes(searchValue)){
              isActive = true;
          }
      }
      let studentTemplate = html`
          <tr class="${isActive ? "select" : ""}">
              <td>${firstName} ${lastName}</td>
              <td>${email}</td>
              <td>${course}</td>
          </tr>
      `;
      return studentTemplate;
  }
   
}