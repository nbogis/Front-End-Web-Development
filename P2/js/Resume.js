/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Nidaa");

/*var email= "bent.al7ejaz90@hotmail.com";
 var newEmail = email.replace("hotmail","gmail");*/

/*var awesomeThoughts = "I am Nidaa and I am AWESOME!";

var funThoughts =  awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);*/

/*var formattedName = HTMLheaderName.replace("%data%","Nidaa Bugis");

var formattedRole = HTMLheaderRole.replace("%data%","Masters in Computer Engineering");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);*/

//// or $("#header").prepend(formattedRole);
////    $("#header").prepend(formattedName);

/* //// replace and slice exercise ////
var s = "audacity";

var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = s.replace('u','U');
    s = s.slice(1);

    return s;
};
//// or
var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);

//console.log(udacityizer(s));*/

/* //// arrays: incrementing the last element by 1 /////
function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0); // === newArray = -array;
    var lastNumber = newArray.pop(); // pop last element
    newArray.push(lastNumber + 1); // increment it and push it back

    // or newArray[newArray.length-1] = newArray[newArray.length-1]+1;

    return newArray;
}*/

/* //// make first letter of first name uppercase and all letters in last name uppercase ////

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var Name = finalName.split(" "); // split first and last names
    Name[0] = Name[0].toLowerCase();
    var firstLet = Name[0].slice(0,1);  // get first letter
    Name[0] = Name[0].replace(firstLet,firstLet.toUpperCase()); // replace first letter with uppercase
    Name[1] = Name[1].toUpperCase();

    finalName = Name[0] + ' '+ Name[1];

    // or names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

    finalName = name.join(" "); // rejoin the elements
    // Don't delete this line!
    return finalName;
}; */
/*
 //// create an object and assined values to properties ////
 var bio = {"name": "Nidaa Bugis",
"role": "Computer Engineering",
"contactInfo": {"email": "bent.al7ejaz90@gmail.com",
"gitHub": "nbogis",
"location": "Huntington Beach"},
"picUrl": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/183/3d9/35323b5.jpg","welcome": "Welcome to my resume page. I am an awesome programmer and web developer",
"skills": ["Programming", " Embedded Systems", " Web Development"]};
// add phone number //
bio["phone"] = "3144980776";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedGen = HTMLcontactGeneric.replace("%contact%","Email address");
var formattedCont =  HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedPic = HTMLbioPic.replace("%data%", bio.picUrl);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
//$("#main").prepend(bio["phone"]);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedCont);
//$("#header").prepend(formattedGen);
$("#header").append(formattedPic);
$("#header").append(formattedMsg);
$("#header").append(formattedSkills);

//// adding work and education experience using dot notation and square brackets //// 
var work = {};
work.position = "web dev";
work.employer = "Udacity";
work.years = "1 year";
work.city = "Huntington Beach, CA";

var workEmpl = HTMLworkEmployer.replace("%data%", work["employer"]);
var workPos = HTMLworkTitle.replace("%data%", work.position);
var workDate = HTMLworkDates.replace("%data%", work.years);
var workLoc = HTMLworkLocation.replace("%data%", work.city);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(workEmpl);
$("#workExperience").append(workPos);
$("#workExperience").append(workDate);
$("#workExperience").append(workLoc);

// Education
var edu = {};

edu["name"] = "The George Washington University";
edu["years"] = "Jan 2013 - Dec 2014";
edu["degree"] = "Masters of Science";
edu["city"] = "Washington, DC";
edu["major"] = "Computer Engineering";

var eduName = HTMLschoolName.replace("%data%", edu.name);
var eduDeg = HTMLschoolDegree.replace("%data%", edu.degree);
var eduDate = HTMLschoolDates.replace("%data%", edu["years"]);
var eduLoc = HTMLschoolLocation.replace("%data%", edu["city"]);
var eduMaj = HTMLschoolMajor.replace("%data%", edu["major"]);

$("#education").append(HTMLschoolStart);
$("#education").append(eduName);
$("#education").append(eduDeg);
$("#education").append(eduDate);
$("#education").append(eduLoc);
$("#education").append(eduMaj);*/


//// create an object and assined values to properties ////
/* var bio = {"name": "Nidaa Bugis",
"role": "Computer Engineering",
"contactInfo": {"email": "bent.al7ejaz90@gmail.com",
"gitHub": "nbogis",
"location": "Huntington Beach"},
"picUrl": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/183/3d9/35323b5.jpg","welcome": "Welcome to my resume page. I am an awesome programmer and web developer",
"skills": ["Programming", " Embedded Systems", " Web Development"]};
// add phone number //
bio["phone"] = "3144980776";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedGen = HTMLcontactGeneric.replace("%contact%","Email address");
var formattedCont =  HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedPic = HTMLbioPic.replace("%data%", bio.picUrl);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
//$("#main").prepend(bio["phone"]);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedCont);
//$("#header").prepend(formattedGen);
$("#header").append(formattedPic);
$("#header").append(formattedMsg);
$("#header").append(formattedSkills);
*/
