import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myresume';
  name = "Anushka";
  student = {
    "rno":1,"name":"abc"
  }

  arr = [1,4,2,6,9];

  stuArr = [
    { rno : 1, name : "Gandhar"},
    { rno: 3, name: "Isha"}
  ];
  myProfile = {
    "fname" : " CLARENCE",
    "lname" : "TAYLOR",
    "address" : "3542 BERRY STREET · CHEYENNE WELLS, CO 80810",
    "contactNo" : "(317)585-8468",
    "email": " NAME@EMAIL.COM",
    "about": "I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    "projects":[
        {
            "project_name":"project one",
            "year":2023,
            "role":["Designed UI in figma", "Crated Login and signup pages"],
            "description":"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        },
        {
            "project_name":"project two",
            "year":2023,
            "role":["describe your tasks"],
            "description":"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        },
        {
            "project_name":"project three",
            "year":2023,
            "role":"describe your tasks",
            "description":"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
        }
    ],
    "education":[
        {
            "graduation":{
                "type":"graduation",
                "duration":"2016-2020",
                "course_name":"BE in computer science",
                "gpa":10,
            },
            "hsc":{
                "type":"HSC",
                "duration":"2016-2020",
                "course_name":"BE in computer science",
                "gpa":10,
            },
            "ssc":{
                "type":"SSC",
                "duration":"2016-2020",
                "course_name":"BE in computer science",
                "gpa":10,
            },
            "diploma" : {
                "type":"Diploma",
                "duration":"2016-2020",
                "course_name":"BE in computer science",
                "gpa":10,
                
            }

        }
       
    ],
    "skills":[{"title" : "PROGRAMMING LANGUAGES", "skills" : ["Java", "Angular", "NodeJS"]},
    {"title" : "Tools", "skills" : ["VSCode", "Eclipse", "Visual Studio for C++", "Github", "firebase"]}],
    "awards":["Google Analytics Certified Developer","Mobile Web Specialist - Google Certification","University of Colorado Boulder - Emerging Tech Competition 2009","University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)"],
    "hobbies" : ["Chess", "Playing flute", "Reading Books", "Watching Movies", "Trekking"]
  };
}
