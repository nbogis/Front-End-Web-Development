
/** Biography info object */
var bio = {
    'name': 'Nidaa Bugis',
    'role': 'Masters in Computer Engineering',
    'contacts': {     
        'mobile' : '314-498-0776',
        'email': 'bent.al7ejaz90@gmail.com',
        'gitHub' : 'https://github.com/nbogis',
        'twitter' : '',
        'website' : 'http://nidaabugis.weebly.com',
        'location': 'Huntington Beach, CA'},
    'welcomeMessage' : 'Dynamic Computer engineering graduate with portfolio of success delivering on schedule, dependable, and high precession results. Adept at analyzing and organizing challenges collaboratively and independently with creative problem solving, and strong aptitude to learn new technologies. Self-motivated and highly ambitious to growing as a professional through academic understanding and practical applications.',
    'skills': ['HTML5', 'CSS3', 'JavaScript','Git', 'GitHub', 'jQuery', 'Bootstrap', ' knockout', 'Grunt'],
    'biopic': ['images_src/profile_2x.jpg','images/profile_1x.jpg','images_src/profile_2x.jpg','my profile picture'],
};

/** bio display function using encapsulation*/
bio.display = function() {
    /** add name and role to the header */ 
    var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
    $('#header').prepend(formattedRole);

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);

    /** add button to internationalize name */
    $('#header span:first').append(internationalizeButton); /** display an internationalize button */

    /** add contacts info to topContacts */
    if (bio.contacts.mobile.length) {
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);
    }

    if (bio.contacts.email.length) {
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#topContacts').append(formattedEmail);
    }

    if (bio.contacts.twitter.length) {
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        $('#topContacts').append(formattedTwitter);
    }

    if (bio.contacts.gitHub.length) { 
        var formattedGit = HTMLgithub.replace('%data%', bio.contacts.gitHub);
        formattedGit = formattedGit.replace('#',bio.contacts.gitHub);
        $('#topContacts').append(formattedGit);
    }

    if (bio.contacts.location !== '') {
        var formattedLoc = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#topContacts').append(formattedLoc);
    }

    if (bio.biopic.length) {
        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic[0]);
        formattedPic = formattedPic.replace('%data1%', bio.biopic[1]);
        formattedPic = formattedPic.replace('%data2%', bio.biopic[2]);
        formattedPic = formattedPic.replace('%data3%', bio.biopic[3]);
    }

    $('<div class="row" id=picMessage>').insertAfter('#topContacts');
    $('#picMessage').append('<div class="col-xs-4 col-md-2">'+formattedPic+'</div>');

    if (bio.welcomeMessage.length) {
        var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    }
    $('#picMessage').append('<div class="col-xs-12 col-md-8" id="stretch">'+formattedMsg+'</div>');

    /** Displaying skills */
    if (bio.skills.length) {
        $('#header').append(HTMLskillsStart);
        var formattedSkill;
        for (var i=0; i < bio.skills.length; i++){
          formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
          $('#skills').append(formattedSkill);
        }
    }

    /** add contacts info to topContacts */
    if (bio.contacts.mobile.length) {
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#footerContacts').append(formattedMobile);
    }

    if (bio.contacts.email.length) {
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#footerContacts').append(formattedEmail);
    }

    if (bio.contacts.twitter.length) {
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        $('#footerContacts').append(formattedTwitter);
    }

    if (bio.contacts.gitHub.length) { 
        var formattedGit = HTMLgithub.replace('%data%', bio.contacts.gitHub);
        formattedGit = formattedGit.replace('#',bio.contacts.gitHub);
        $('#footerContacts').append(formattedGit);
    }
};

bio.displaymenu = function() {

    /** add menu bars on top and bottom of the page */
    $('#main').addClass('container');

    $('<ul id="mymenu" class="flex-menu list-inline"></ul>').insertBefore('#header');

    /** add education menu to scroll to Education */
    tmp = menu.replace('%data%','edu');
    tmp = tmp.replace('%data%','Education');
    $('#mymenu').append(tmp);

    /** add projects menu to scroll to work experience */ 
    var tmp = menu.replace('%data%','pro');
    tmp = tmp.replace('%data%','Projects');
    $('#mymenu').append(tmp);

    /** add work menu to scroll to work experience */ 
    var tmp = menu.replace('%data%','work');
    tmp = tmp.replace('%data%','workExperience');
    $('#mymenu').append(tmp);

    /** add map menu to scroll to where I've lived and worked */ 
    tmp = menu.replace('%data%','mp');
    tmp = tmp.replace('%data%','Where I\'ve Lived and Worked');
    $('#mymenu').append(tmp);

    /** back to the top of the page */
    $('#main').append('<div id="bmenu"><div>');
    $('#bmenu').children().append(bottomMenu);

    tmp = menu.replace('%data%','btop');
    tmp = tmp.replace('%data%','back to Top');
    $('#bmenu').children().children().append(tmp);

    tmp = menu.replace('%data%','biog');
    tmp = tmp.replace('%data%','Biography');
    $('#bmenu:last').children().children().append(tmp);
};

/** Education objects */
var education = {
    'schools' : [
        {
            'name' : 'The George Washington University',
            'location' : 'Washington, DC',
            'degree' : 'Masters',
            'major' : 'Computer Engineering',
            'minor' : 'Computer Architecture and High-Performance Computing',
            'dates' : 2014,
            'url' : 'http://www.gwu.edu/'
        },
        {
            'name' : 'Saint Louis University',
            'location' : 'Saint Louis, MO',
            'degree' : 'Bachelors',
            'major' : 'Computer Engineering',
            'minor' : 'Computer Science and Engineering Mathematics',
            'dates' : 2012,
            'url' : 'http://slu.edu'
        }
    ],

    'OnlineCourses' : [
        {
            'title' : 'Front-End Web Development Nanodegree',
            'school' : 'Udacity',
            'date' : 'Sep 2015',
            'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
            'projects' : [
            'Build a Portfolio Site',
            'Interactive Resume',
            'Classic Arcade Game Clone',
            'Website Optimization',
            'Neighborhood Map',
            'Feed Reader Testing'
            ]

        },
        {
            'title' : 'Embedded Systems - Shape the World',
            'school' : 'EdX',
            'date' : 'May 2015',
            'url' : 'https://www.edx.org/course/embedded-systems-shape-world-utaustinx-ut-6-02x',
            'projects' : [
            'Finite State Machines',
            'Interrupts',
            'DAC and Sound',
            'ADC Data Acquisition',
            'Systems Approach to Game Design'
            ]
        },
        {
            'title' : 'How to Use Git and GitHub',
            'school' : 'Udacity',
            'date' : 'Aug 2015',
            'url' : 'https://www.udacity.com/course/how-to-use-git-and-github--ud775',
            'projects' : [
            'Navigating a Commit History',
            'Creating and Modifying a Repository',
            'Using GitHub to Collaborate'
            ]
        }
    ]
};

/** education display function using encapsulation */
education.display = function() {
    if (education.schools.length > 0){
        var formattedName,formattedDeg,formattedDates,formattedLoc,formattedMaj,formattedMin,formattedCrs;
        for (var i=0; i < education.schools.length; i++){
            $('#education').append(HTMLschoolStart);

            formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
            formattedName = formattedName.replace('#', education.schools[i].url);
            $('.education-entry:last').append(formattedName);

            formattedDeg = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            formattedDeg = formattedDeg.replace('%data1%',education.schools[i].dates)
            $('.education-entry:last').append(formattedDeg);

            formattedLoc = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            $('.education-entry:last').append(formattedLoc);

            formattedMaj = HTMLschoolMajor.replace('%data%', education.schools[i].major);
            $('.education-entry:last').append(formattedMaj);

            formattedMin = HTMLschoolMinor.replace('%data%', education.schools[i].minor);
            $('.education-entry:last').append(formattedMin);

        }
    }
    /** display online courses */
    if (education.OnlineCourses.length > 0){
        $('#education').append(HTMLschoolStart);

        var formattedTitle,formattedDates,formattedUrl;
        for (var i=0; i<education.OnlineCourses.length; i++){


            formattedTitle = HTMLonlineTitle.replace('%data1%', education.OnlineCourses[i].school);
            formattedTitle = formattedTitle.replace('%data%',education.OnlineCourses[i].title)
            formattedTitle = formattedTitle.replace('#', education.OnlineCourses[i].url);
            $('.education-entry:last').append(formattedTitle);

            $('.education-entry:last').append(HTMLonline);

            // formattedName = HTMLonlineSchool.replace('%data%', education.OnlineCourses[i].school);
            formattedDate = HTMLonlineDate.replace('%data%',education.OnlineCourses[i].date)
            $('.education-entry:last').append(formattedDate);
            $('.education-entry:last').append(HTMLOnlineprojStart);
            var formattedProj;
            for (var j=0; j < education.OnlineCourses[i].projects.length; j++){
                formattedProj = HTMLonlineprojects.replace('%data%', '- ' + education.OnlineCourses[i].projects[j]);
               $('.projs:last').append(formattedProj);
            }
        }
    }
};

/** work object */ 
var work = {
    'jobs' : [
        {
            'employer' : 'Edwards Lifesciences',
            'title' : 'Junior Software Engineer at Automated Software Testing for Hemodynamic Monitoring Unit',
            'location' : 'Irvine, CA',
            'dates' : 'Nov 2015 - current',
            'description' : [ 'Write automated python and C# scripts',
                'Execute automated scripts in Robot framework for hardware and software units',
                'Debug and log software defects',
                'Validate and Document test protocols'
            ],
            'url' : 'http://www.edwards.com/'
        },
        {
            'employer' : 'The George Washington University',
            'title' : 'Autonomous Robotics and Perception volunteer',
            'location' : 'Washington, DC',
            'dates' : 'Jun 2014 - Jul 2014',
            'description' : [ 'Converted a city block model to povray (Persistence of Vision Raytracer) file',
                'Contained the city model in a sky box',
                'Created a camera object that travels around the city with random paths',
                'Displayed the povray images that the camera captures',
                'Calculated velocity and acceleration of the camera'
            ],
            'url' : 'http://www.gwu.edu/'
        },
        {
            'employer' : 'The World Bank Organization',
            'title' : 'Event Management Systems intern',
            'location' : 'Washington, DC',
            'dates' : 'Jul 2011 - Aug 2011',
            'description' : ['Experienced with ArcSight, a security management systems which includes:',
                'Optimized rules to manage database events, which resulted in a 100% improve in performance',
                'Investigated database threats and reported events',
                'Created dashboards to classify events based on their priority',
                'Developed active lists, queries and reports'
            ],
            'url' : 'http://www.worldbank.org/'
        }
    ]
};

/** work display function using encapsulation */
work.display = function() {
    if(work.jobs.length > 0){
        for (var i=0; i < work.jobs.length; i++){
            $('#workExperience').append(HTMLworkStart);

            formattedEmpl = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
            formattedEmpl = formattedEmpl .replace('#', work.jobs[i].url);
            formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
            string = formattedEmpl + formattedTitle; 
            /** append to work-entry */
            $('.work-entry:last').append(string);

            formattedLoc = HTMLworkLocation.replace('%data%', work.jobs[i].location);
            $('.work-entry:last').append(formattedLoc);

            formattedDate = HTMLworkDates.replace('%data%', work.jobs[i].dates);
            $('.work-entry:last').append(formattedDate);

            $('.work-entry:last').append(HTMLworkDescStart);
            for (var j=0; j < work.jobs[i].description.length; j++){
                formattedDes = HTMLworkDescription.replace('%data%', '- '+work.jobs[i].description[j]);
                // $('#desc').append(formattedDes);
                $('.desc-Start:last').append(formattedDes);
            }
        }
    }
};

/** projects object */ 
var projects = {
    'projects' : [
        {
            'school' : 'Udacity',
            'title' : 'Neighborhood Map',
            'course' : 'Front-End Web Development Nanodegree',
            'url' : 'https://github.com/nbogis/Project-5/tree/master/neighbor_map',
            'dates' : 'Sep 2015',
            'description' : 'An app shows a map with points of interest (POI) around a location which can be filtered.' +
            'POI\'s marker and their name in the list can be clicked to show more information. Ajax data were requested from Wikipedia to show these information.'+
            'Knowckout framework was used for binding POI on the map with filtered data. The MVVM view model was also implemented.',
            'images' : ['images_src/neighbor_2x.jpg','images/neighbor_1x.jpg','images_src/neighbor_2x.jpg','my frogger online game']
            },
            {
            'school' : 'Udacity',
            'title' : 'Website Optimization',
            'course' : 'Front-End Web Development Nanodegree',
            'url' : 'https://github.com/nbogis/Front-End-Web-Development/tree/master/P4/Cam%20profile%20min/pizza%20min',
            'dates' : 'Sep 2015',
            'description' : 'Heavy loaded website was optimized to achieve 90fps. Images were resized to different sizes and srcset was used '+
            'to load the appropriate image. CSS, html and javscript were also minified using Grunt. Extra layers and fonts were removed to minimize the traffic.',
            'images' : ['images_src/pizza_2x.jpg','images/pizza_1x.jpg','images_src/pizza_2x.jpg','my frogger online game']
            },
            {
            'school' : 'Udacity',
            'title' : 'Classic Arcade Game Clone',
            'course' : 'Front-End Web Development Nanodegree',
            'url' : 'https://github.com/nbogis/Front-End-Web-Development/tree/master/P3',
            'dates' : 'Aug 2015',
            'description' : 'Frogger online video game was written in HTML, Javascript, and CSS. Game functionalities include ' +
            'controlling using keyboard keys, character selection, collision with enemeis' +
            'collecting jewels, displaying score, music and sound effects, displaying texts. All of the game functionalities were implemented in Javascript. ',
            'images' : ['images_src/frogger_2x.jpg','images/frogger_1x.jpg','images_src/frogger_2x.jpg','my frogger online game']
            },
            
            {
            'school' : 'Edx - The University of Texas at Austin',
            'title' : 'Space Invaders',
            'course' : 'Embedded Systems',
            'url' : 'https://www.edx.org/course/embedded-systems-shape-world-utaustinx-ut-6-03x',
            'dates' : 'Mar 2015',
            'description' : 'Built Space Invaders hand-held game using Tiva TM4C123 microcontroller. The game engine is based on random appearance of enemies and their attacks. It con- sists of Interrupt Service Routines (ISR) and timers to read keys input and to play sound effects. Digital to Analog Converter (DAC) and Analog to Digital Converter (ADC) were implemented to output the sound and to control the player with a potentiometer. The characters were drawn in paint program and were converted to arrays. The sounds were also converted from .wav to arrays of values to output to the DAC.',
            'images' : ['images_src/IMG_2755_1024_2x.jpg','images/IMG_2755_1024_1x.jpg','images_src/IMG_2755_1024_2x.jpg','my space invader game']
            },
            {
            'school' : 'The George Washington University', 
            'title' : 'Chapel\'s Performance',
            'course' : 'Introduction to High-Performance Computing',
            'url' : 'http://www.gwu.edu/',
            'dates' : 'Nov 2014 - Dec 2014',
            'description' : 'Programmed matrix multiplication and sobel edge detection benchmarks in Chapel parallel programming language. These codes were developed to test the performance of the George, which is a supercomputer at the George Washington University, and the programming language.',
            'images' : ''
            }
    ]
};

/** display projects using encapsulation */
projects.display = function() {
    if (projects.projects.length > 0){
        for (var i =0; i < projects.projects.length; i++){
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            formattedTitle = formattedTitle.replace('#',projects.projects[i].url)
            $('.project-entry:last').append(formattedTitle);

            formattedScl = HTMLprojectScl.replace('%data%', projects.projects[i].school);
            $('.project-entry:last').append(formattedScl);

            formattedCrs = HTMLprocjectCourse.replace('%data%', projects.projects[i].course);
            $('.project-entry:last').append(formattedCrs);

            formattedDate = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
            $('.project-entry:last').append(formattedDate);

            formattedDes = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            $('.project-entry:last').append(formattedDes);

            if(projects.projects[i].images != ''){
                var formattedImg = HTMLprojectImage.replace('%data%', projects.projects[i].images[0]);
                formattedImg = formattedImg.replace('%data1%', projects.projects[i].images[1]);
                formattedImg = formattedImg.replace('%data2%', projects.projects[i].images[2]);
                formattedImg = formattedImg.replace('%data3%', projects.projects[i].images[3]);
                $('.project-entry:last').append(formattedImg);
            }
        }
    }
};

$('#mapDiv').append(googleMap);
