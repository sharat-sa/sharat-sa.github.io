// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sharat-sa",
    title: "Sharat SA",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-interests",
          title: "Research Interests",
          description: "Topics currently under investigation, or planned to be studied later",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Interests/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Blog/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Resources and other fun things",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "nav-recommendations",
          title: "Recommendations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Recos/";
          },
        },{id: "post-we-39-re-back-at-iisc",
        
          title: "We&#39;re back at IISc",
        
        description: "Back to QLabs for a third time lol",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Blog/2025/iisc/";
          
        },
      },{id: "post-gyaan-amp-goodbyes-sharat-sa-manthan",
        
          title: 'Gyaan &amp; Goodbyes: Sharat SA – Manthan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "On your role as SRMC President: When and why did you decide to contest for President of SRMC? Was the experience fulfilling? What was your most memorable feat/ something that you are proud of? How much did it take a toll on your academics, or personal life? I decided to step up as President following…",
        section: "Posts",
        handler: () => {
          
            window.open("https://manthanmagazine.wordpress.com/2025/07/26/gyaan-goodbyes-sharat-sa/", "_blank");
          
        },
      },{id: "post-graduated-from-iiser-mohali",
        
          title: "Graduated from IISER Mohali",
        
        description: "Last day at IISER",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Blog/2025/graduation/";
          
        },
      },{id: "post-the-question-of-gendered-segregation-at-iiser-mohali-manthan",
        
          title: 'The Question of Gendered Segregation at IISER Mohali – Manthan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Times are changing at IISER Mohali. As the issue of gender segregation in student spaces reaches a boiling point, the student community is forced to battle an increasingly authoritarian administration that silences their voices.",
        section: "Posts",
        handler: () => {
          
            window.open("https://manthanmagazine.wordpress.com/2022/07/03/the-question-of-gendered-segregation-at-iiser-mohali/", "_blank");
          
        },
      },{id: "post-manthan-times-volume-1-manthan",
        
          title: 'Manthan Times Volume 1 – Manthan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Click on the image to view the newspaper! Edition 3 Edition 2 Edition 1",
        section: "Posts",
        handler: () => {
          
            window.open("https://manthanmagazine.wordpress.com/volume-1-edition-1/", "_blank");
          
        },
      },{id: "projects-getting-started-with-battery-research",
          title: 'Getting started with battery research',
          description: "Papers, books and other links for undergraduates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Batteries/";
            },},{id: "projects-battery-graphics",
          title: 'Battery Graphics',
          description: "Batteries media",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Graphics/";
            },},{id: "projects-sitakunj",
          title: 'Sitakunj',
          description: "Designing 55, Malviya Nagar, Jagadhri",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Home/";
            },},{id: "projects-impedance-setup",
          title: 'Impedance Setup',
          description: "How to take good quality EIS measurements?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Impedance/";
            },},{id: "projects-manthan-magazine",
          title: 'Manthan Magazine',
          description: "How to start a newspaper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Manthan/";
            },},{id: "projects-student-run-mess",
          title: 'Student Run Mess',
          description: "Making of the co-operative mess of IISER-Mohali",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SRM/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/notsosharat.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67.%73%68%61%72%61%74%31%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sharat-sa", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/notsosharat", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sharat-sa-298b3020b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XZt-lLcAAAAJ", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/mdgmef8jp8rywh853nn8nxbv7?si=49cd4a3e0f4c4a8e", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
