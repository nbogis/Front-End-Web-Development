
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
    'skills': ['C/C++/C#', 'MatLab', 'Python', 'AVR and MIPS Assembly', 'VHDL', 'Chapel', 'MPI',
    'UPC', 'HTML', 'CSS', 'JavaScript', 'DAC/ADC', 'Git', 'UART', 'RS232', 'GPIO', 'TCP/IP'],
    'biopic': ['images/profile.jpg','images/profile_1x.jpg','images/profile_2x.jpg','my profile picture'],
};

/** bio display function using encapsulation*/
bio.display = function() {
    /** add button to internationalize name */
    $('#header').prepend(internationalizeButton); /** display an internationalize button */

    /** add name and role to the header */ 
    var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
    $('#header').prepend(formattedRole);

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);

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
        $('#topContacts').append(formattedGit);
    }

    if (bio.contacts.website.length) {
        var formattedWeb = HTMLwebsite.replace('%data%', bio.contacts.website);
        $('#topContacts').append(formattedWeb);
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
        $('#footerContacts').append(formattedGit);
    }

    if (bio.contacts.website.length) {
        var formattedWeb = HTMLwebsite.replace('%data%', bio.contacts.website);
        $('#footerContacts').append(formattedWeb);
    }
};

bio.displaymenu = function() {

    /** add menu bars on top and bottom of the page */
    $('#main').addClass('container');

    $('<ul id="mymenu" class="flex-menu list-inline"></ul>').insertBefore('#header');
    /** add work menu to scroll to work experience */ 
    var tmp = menu.replace('%data%','work');
    tmp = tmp.replace('%data%','workExperience');
    $('#mymenu').append(tmp);

    /** add education menu to scroll to Education */
    tmp = menu.replace('%data%','edu');
    tmp = tmp.replace('%data%','Education');
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
            'url' : 'http://www.gwu.edu/',
            'course' : ['Computer Organization',
                'Microcomputer Systems Architecture',
                'Parallel Computer Architecture',
                'Grid and Cloud Computing (Objective-C)',
                'High-PerformanceProcessors',
                'IntroductiontoComputerNetwork',
                'Device Electronics (elective)',
                'Computer Vision (elective, MatLab)',
                'Introduction to High-Performance Computing',
                'EmbeddedSystems'
            ]
        },
        {
            'name' : 'Saint Louis University',
            'location' : 'Saint Louis, MO',
            'degree' : 'Bachelors',
            'major' : 'Computer Engineering',
            'minor' : 'Computer Science and Engineering Mathematics',
            'dates' : 2012,
            'url' : 'http://slu.edu' ,
            'course' : ['Senior Design',
                'Microprocessor (AVR)',
                'Hardware / Software Co-Design (C, VHDL)',
                'Computer Architecture',
                'Computer Networking',
                'Data Structure (C++)',
                'Object Oriented Programming (Python)',
                'Operating Systems (C / C++)',
                'Linear Algebra',
                'Advanced Mathematics',
                'Probability and Statistics'
            ]
        }
    ],

    'OnlineCourses' : [
        {
            'title' : 'Embedded Systems - Shape the World',
            'school' : 'EdX - The University of Texas at Austin',
            'date' : 2015,
            'url' : 'https://www.edx.org/course/embedded-systems-shape-world-utaustinx-ut-6-02x'
        },
        {
            'title' : 'How to Use Git and GitHub',
            'school' : 'Udacity',
            'date' : 2015,
            'url' : 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
        },
        {
            'title' : 'Front-End Web Development Nanodegree',
            'school' : 'Udacity',
            'date' : 2015,
            'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
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
            $('.education-entry:last').append(formattedDeg);

            formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            $('.education-entry:last').append(formattedDates);

            formattedLoc = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            $('.education-entry:last').append(formattedLoc);

            formattedMaj = HTMLschoolMajor.replace('%data%', education.schools[i].major);
            $('.education-entry:last').append(formattedMaj);

            formattedMin = HTMLschoolMinor.replace('%data%', education.schools[i].minor);
            $('.education-entry:last').append(formattedMin);

            /** Displaying courses */
            $('.education-entry:last').append(HTMLschoolCrsStart);
            for (var j=0; j < education.schools[i].course.length; j++){
                formattedCrs = HTMLschoolCourse.replace('%data%', education.schools[i].course[j]);
                $('.courses-h3:last').append(formattedCrs);
            }
        }
    }
    /** display online courses */
    if (education.OnlineCourses.length > 0){
        $('.education-entry:last').append(HTMLonlineClasses);
        var formattedTitle,formattedDates,formattedUrl;
        for (var i=0; i<education.OnlineCourses.length; i++){
            formattedTitle = HTMLonlineTitle.replace('%data%', education.OnlineCourses[i].title);
            $('.education-entry:last').append(formattedTitle);

            formattedName = HTMLonlineSchool.replace('%data%', education.OnlineCourses[i].school);
            $('.education-entry:last').append(formattedName);

            formattedDates = HTMLonlineDates.replace('%data%', education.OnlineCourses[i].date);
            $('.education-entry:last').append(formattedDates);

            formattedUrl = HTMLonlineURL.replace('%data%', education.OnlineCourses[i].url);
            formattedUrl = formattedUrl.replace('#',education.OnlineCourses[i].url)
            $('.education-entry:last').append(formattedUrl);
        }
    }
};

/** work object */ 
var work = {
    'jobs' : [
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
            'description' : ['Experience with ArcSight, the security management systems which includes:',
                'Optimized rules to manage database events, which resulted in a 100% improve in performance',
                'Investigated database threats and reported events',
                'Created dashboards to classify events based on their priority',
                'Developed active lists, queries and reports'
            ],
            'url' : 'http://www.worldbank.org/'
        },
        {
            'employer' : 'Saint Louis University',
            'title' : 'Admission Assistant',
            'location' :  'Madird, Spain',
            'dates' : 'Aug 2009 - Novermber 2009',
            'description' : ['Prepared the university flyers and advertisements',
                'Answered phone calls and directing callers to the appropriate department',
                'Arranged orders and deliveries of the University'
            ],
            'url' : 'http://spain.slu.edu/' 
        }
    ]
};

/** work display function using encapsulation */
work.display = function() {
    if(work.jobs.length > 0){
        $('#workExperience').append(HTMLworkStart);
    }
    for (var i=0; i < work.jobs.length; i++){
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

        for (var j=0; j < work.jobs[i].description.length; j++){
            formattedDes = HTMLworkDescription.replace('%data%', work.jobs[i].description[j]);
            $('.work-entry:last').append(formattedDes);
        }
    }
};

/** projects object */ 
var projects = {
    'projects' : [
        {
            'school' : 'Edx - The University of Texas at Austin',
            'title' : 'Space Invaders',
            'course' : 'Embedded Systems',
            'url' : 'https://www.edx.org/course/embedded-systems-shape-world-utaustinx-ut-6-03x',
            'dates' : 'Mar 2015 - Mar 2015',
            'description' : 'Built Space Invaders hand-held game using Tiva TM4C123 microcontroller. The game engine is based on random appearance of enemies and their attacks. It con- sists of Interrupt Service Routines (ISR) and timers to read keys input and to play sound effects. Digital to Analog Converter (DAC) and Analog to Digital Converter (ADC) were implemented to output the sound and to control the player with a potentiometer. The characters were drawn in paint program and were converted to arrays. The sounds were also converted from .wav to arrays of values to output to the DAC.',
            'images' : ['images_src/IMG_2755_1024.jpg','images/IMG_2755_1024_1x.jpg','images/IMG_2755_1024_2x.jpg','my space invader game']
            },
            {
            'school' : 'The George Washington University' ,
            'title' : 'Quran Prayers',
            'course' : 'Embedded Systems',
            'url' : 'http://www.gwu.edu/',
            'dates' : 'Aug 2014 - Jul 2014',
            'description' : 'Developed a device that shows verses of the Qura’an for Muslims to read during their prayers. The device mainly consist of a tablet and Arduino microcontroller, which communicate via Bluetooth. The device senses the worshipper’s poses and configures the display accordingly. The project was programmed in C and Java.',
            'images' : ['images_src//IMG_1977_1024.jpg','images//IMG_1977_1024_1x.jpg','images//IMG_1977_1024_2x.jpg','my device on a praying carpet']
            },
            {
            'school' : 'The George Washington University', 
            'title' : 'Chapel\'s Performance',
            'course' : 'Introduction to High-Performance Computing',
            'url' : 'http://www.gwu.edu/',
            'dates' : 'Nov 2014 - Dec 2014',
            'description' : 'Programmed matrix multiplication and sobel edge detection benchmarks in Chapel parallel programming language. These codes were developed to test the performance of the George, which is a supercomputer at the George Washington University, and the programming language.',
            'images' : ''
            },
            {
            'school' : 'Saint Louis University' ,
            'title' : 'RAD Dosimeter',
            'course' : 'Senior Design' ,
            'url' : 'http://www.slu.edu/',
            'dates' : 'Aug 2011 - May 2011' ,
            'description' : 'Engineered a dosimeter to measure active and cumulative radiation doses from conceptual design to completion. Maple microcontroller with ARM architecture was selected then programmed in C. LCD was designed to display radiation doses and implemented an alarm to notify user when the doses exceeded a set threshold. The device’s different components were selected based on cost, weight, size, and power consumption constraints. The design was presented in front of professors and engineers resulting in being selected for display at the Saint Louis University Senior Design Symposium.',
            'images' : ['images_src/Untitled.jpg','images/Untitled_1x.jpg','images/Untitled_2x.jpg','RAD device\'s components']
            },
            {
            'school' : 'Saint Louis University',
            'title' : 'Image Processing',
            'course' : 'Image Processing',
            'url' : 'http://www.slu.edu/',
            'dates' : 'Jan 2012 - Aug 2012',
            'description' : 'Created 3D models of a walking man using the transformation matrices. Implemented a program to calculate the calibration matrix of a stereoscopic camera and process the captured images. These projects were completed using MatLab.',
            'images' : ['images_src/Untitled1.jpg','images/Untitled1_1x.jpg','images/Untitled1_2x.jpg','modeling of a walking man on MatLab']
            },
            {
            'school' : 'Saint Louis University',
            'title' : 'Automated Robot',
            'course' : 'Junior Design' ,
            'url' : 'http://www.slu.edu/',
            'dates' : 'Jan 2011 - Aug 2011',
            'description' : 'Developed algorithms to navigate a robot through a course autonomously. The algorithms were designed in both MatLab and C.',
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
            $('.project-entry:last').append(formattedTitle);

            formattedScl = HTMLprojectScl.replace('%data%', projects.projects[i].school);
            formattedScl = formattedScl.replace('#',projects.projects[i].url)
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
