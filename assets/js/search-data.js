// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "At the moment, my research interests broadly lie in the fields of robot learning and deep reinforcement learning. *Equal Contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-github",
          title: "GitHub",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/github/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-3-3-quaternion-rotation-operator",
      
        title: "[3/3] Quaternion Rotation Operator",
      
      description: "Exploring the geometric effects of the quaternion rotation operator",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/quat-rot-op2/";
        
      },
    },{id: "post-2-3-towards-a-3d-rotation-operator-with-a-quaternion-sandwich",
      
        title: "[2/3] Towards a 3D Rotation Operator with a Quaternion Sandwich",
      
      description: "All the nuts and bolts needed to go from quaternions to a quaternion rotation operator",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/quat-rot-op1/";
        
      },
    },{id: "post-1-3-quaternions-basic-algebra",
      
        title: "[1/3] Quaternions: Basic Algebra",
      
      description: "A brief introduction to quaternions and their basic algebra",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/quaternion-basics/";
        
      },
    },{id: "post-learning-parameters-part-5-adagrad-rmsprop-and-adam",
      
        title: 'Learning Parameters Part 5: AdaGrad, RMSProp, and Adam <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/learning-parameters-part-5-65a2f3583f7d?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-learning-parameters-part-4-tips-for-adjusting-learning-rate-line-search",
      
        title: 'Learning Parameters Part 4: Tips For Adjusting Learning Rate, Line Search <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/learning-parameters-part-4-6a18d1d3000b?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-learning-parameters-part-3-stochastic-amp-mini-batch-gradient-descent",
      
        title: 'Learning Parameters, Part 3: Stochastic &amp; Mini-Batch Gradient Descent <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/learning-parameters-part-3-ee8558f65dd7?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-learning-parameters-part-2-momentum-based-and-nesterov-accelerated-gradient-descent",
      
        title: 'Learning Parameters, Part 2: Momentum-Based And Nesterov Accelerated Gradient Descent <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/learning-parameters-part-2-a190bef2d12?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-learning-parameters-part-1-gradient-descent",
      
        title: 'Learning Parameters, Part 1: Gradient Descent <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/learning-parameters-part-1-eb3e8bb9ffbb?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-learning-parameters-part-0-basic-stuff",
      
        title: 'Learning Parameters, Part 0: Basic Stuff <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/learning-parameters-part-0-5cfffd647bdc?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-mouse-cursor-control-using-facial-movements-an-hci-application",
      
        title: 'Mouse Cursor Control Using Facial Movements — An HCI Application <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/mouse-control-facial-movements-hci-app-c16b0494a971?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-perceptron-learning-algorithm-a-graphical-explanation-of-why-it-works",
      
        title: 'Perceptron Learning Algorithm: A Graphical Explanation Of Why It Works <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/perceptron-learning-algorithm-d5db0deab975?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-perceptron-the-artificial-neuron-an-essential-upgrade-to-the-mcculloch-pitts-neuron",
      
        title: 'Perceptron: The Artificial Neuron (An Essential Upgrade To The McCulloch-Pitts Neuron) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/perceptron-the-artificial-neuron-4d8c70d5cc8d?source=rss-202534492f47------2", "_blank");
        
      },
    },{id: "post-mcculloch-pitts-neuron-mankind-s-first-mathematical-model-of-a-biological-neuron",
      
        title: 'McCulloch-Pitts Neuron — Mankind’s First Mathematical Model Of A Biological Neuron <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/towards-data-science/mcculloch-pitts-model-5fdf65ac5dd1?source=rss-202534492f47------2", "_blank");
        
      },
    },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UC9Q3KEAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/acl21", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/acl21", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@acl21", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/acl21.bsky.social", "_blank");
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
