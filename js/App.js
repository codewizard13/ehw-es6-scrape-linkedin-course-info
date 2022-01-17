/*
Program Name:   EHW APP: Scrape LinkedIn Course Info
File Name:      App.js
Date Created:   01/17/22
Date Modified:  --
Version:        1.00
Programmer:     Eric L. Hepperle

TAGS:           Eric Hepperle, JavaScript, ES6, DOM Manipulation, Demo, Eric L. Hepperle

Purpose: 
    This JavaScript file contains the main "business logic" and primary
    mechanics of the current project. This project scrapes 
    a selection of useful course info from a LinkedIn Learning
    course page.
    
Usage:
    Navigate to any video of a LinkedIn Learning course and paste
    this code into the browser developer console and hit enter to run.

Sample results: 

--

Requires:
	* controller.php
    * Browser
    
Demonstrates:
    * Vanilla JavaScript
    * JavaScript ES6/ECMAScript2015

*/

console.log("HELLO!   I'm in App.js");

// get chapter vids
const chapters = document.querySelectorAll('.classroom-toc-section__toggle-title');
[...chapters].forEach((el, i) => {
   console.log(el.innerText);
});

console.log("~~~ ~~~ ~~~");

// get sub-chapter vids
const subchaps = document.querySelectorAll('.classroom-toc-item__title');
[...subchaps].forEach((el, i) => {
   console.log(el.innerText);
});