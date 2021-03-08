/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Satish Narayan",
  title: "Hi all, I'm Satish",
  subTitle: emoji(
    "A passionate Freelancer,Front-End Software Developer 🚀 having an experience of designing and building Web  applications with JavaScript / Reactjs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1P-QYPH4ASl3W0X0jUWFZNe2rBwuKgv6F/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/drakosi99",
  linkedin: "https://www.linkedin.com/in/satish-narayan-44bb36151/",
  gmail: "yssatishnarayan@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://satish-narayan.medium.com/",
  hackerrank: "https://www.hackerrank.com/narayansatish",

  twitter: 'https://twitter.com/NarayanSatish10',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web  applications"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },



    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
    ,
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [

    {
      schoolName: "Indian Institute Of Engineering Science &Technology ,Shibpur",
      logo: "https://i.ibb.co/QCw7qfW/iiest-logo.png",
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2017 - present",


    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      //progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      // progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      //progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "https://github.com/narayansatish/Github-Battle/tree/development",
      company: "Github Battle",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "https://githubbattlenarayansatish.netlify.app",
      desc:
        "Github Game using Github Api, as well as you can find TOP 30 repo of a domain.",
      descBullets: [

      ]
    },
    {
      role: "https://github.com/narayansatish/e-commerce/tree/development",
      company: "E-Commerce App",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "https://e-commerce-application-using-react.netlify.app",
      desc:
        "An E-commerce application using react-js,used local storage for storing data"
    },
    {
      role: "https://github.com/narayansatish/Mini-Project-Stopwatch-Assignment",
      company: "Stopwatch App",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "https://stopwatchappnarayansatish.netlify.app",
      desc:
        "A Stopwatch application using react-js"
    },
    {
      role: "https://github.com/narayansatish/compound_interest_calculator",
      company: "Compound Interest Calculator",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "https://compoundinterestcalculator.netlify.app",
      desc:
        "A simple compound interest calculator using Vanilla JavaScript. "
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "narayansatish", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://satish-narayan.medium.com/how-the-keep-the-things-in-the-center-in-css-7535c4e90cf0",
      title: "Centering In Css",
      description:
        "Do you also search every time while writing code how to keep things in the center? then it is for you!"
    },
    {
      url: "https://satish-narayan.medium.com/my-first-reactjs-project-a37b5ce75e99",
      title: "My first reactjs project experience",
      description:
        "I took my first baby steps in reactjs using this project."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8910043481",
  email_address: "yssatishnarayan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "NarayanSatish10", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
