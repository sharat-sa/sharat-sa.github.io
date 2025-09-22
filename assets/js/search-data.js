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
          description: "A growing collection of your cool projects.",
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
          
            window.location.href = "/blog/2025/iisc/";
          
        },
      },{id: "post-graduated-from-iiser-mohali",
        
          title: "Graduated from IISER Mohali",
        
        description: "Last day at IISER",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/graduation/";
          
        },
      },{id: "news-graduated-from-iiser-mohali",
          title: 'Graduated from IISER-Mohali',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-joined-prof-naga-phani-s-group-at-iisc-again-will-be-pushing-earlier-work-to-publication",
          title: 'Joined Prof Naga Phani’s group at IISc again, will be pushing earlier work...',
          description: "",
          section: "News",},{id: "projects-55-malviya-nagar",
          title: '55, Malviya Nagar',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-student-run-mess",
          title: 'Student Run Mess',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-manthan-magazine",
          title: 'Manthan Magazine',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-impedance-setup",
          title: 'Impedance Setup',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
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
