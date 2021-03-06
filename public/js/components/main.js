  // NAV COLLAPSE
  function navToggle() {
    const navs = document.querySelectorAll('.nav-item')
    const collapsed = document.querySelectorAll('.nav-collapse')
  
        //Targets the nav-item css class and replaces it with nav-collapse;
    navs.forEach(nav => nav.classList.replace('nav-item', 'nav-collapse'));
        //targets the nav-collapse css class and replaces it with nav-item;
    collapsed.forEach(nav => nav.classList.replace('nav-collapse', 'nav-item'));
  }

  //NAV ONLOAD DETERMINATION
  window.onload =_=>{
  const butt = document.querySelector('.logo');
      //checks the window size on load  
  if(window.innerWidth <= 1000) {
      //adds the "Click" event listener to collapse menu if the page is less to or equal to 1000 px wide and initiates the navToggle function.
    butt.addEventListener('click', navToggle)
    }
     //if the window is not 1000 px wide, it adds an event listener to the window resize.
  window.addEventListener("resize", () =>{
    const butt = document.querySelector('.logo');
      //checks the window width on resize.
  if(window.innerWidth <= 1000) {
      //adds "click" event listener to collapse menu at 1000px
    butt.addEventListener('click', navToggle)
    return false;
      } else {
    butt.removeEventListener('click', navToggle)
      }
    })
  }




  // SMOOTH SCROLL
  function smoothScroll(target, duration) {
    //target arguement variable
    let userTarget = document.querySelector(target);
    //gets the top coordinates for the users target section
    let targetPosition = userTarget.getBoundingClientRect().top;
    //takes into account the users starting page position.
    let startPosition = window.pageYOffset;
    //will keep track of the time for requestAnimationFrame
    let startTime = null;

    function animation(currentTime){
      if(startTime === null)startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      //runs the animation and subtracts 72px for the navbar
      const run =  ease(timeElapsed, startPosition, targetPosition, duration) -72;
      //scrolls to the Y position for the Run function (first (0) is X)
      window.scrollTo(0, run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
      
    }
    // Im not going to lie, the math below doesn't make sense to me, I found it online
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t <1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t -2) -1) + b;
    }
    // loops through through the animation function at 60fps
    requestAnimationFrame(animation);
  }

  //YOU ONLY NEED TO CHANGE / ADD TO THESE TO ENABLE IT IN THE PAGE
  const landing = document.querySelector('.scrollHome');
  landing.addEventListener('click', function(){
    smoothScroll('#landing',1000);
  })

  const about = document.querySelector('.aboutTarget');
  about.addEventListener('click', function(){
    smoothScroll('#about',1000);
  })

  //FOR LOOP TO TARGET ALL PROJECT LINKS
  const projects = document.querySelectorAll('.projectsTarget');
  for (let i = 0; i < projects.length; i++) {
    let myProjects = projects[i]
    myProjects.addEventListener('click', function(){
        smoothScroll('#projects',1000);
      })
    }
  
  const contact = document.querySelector('.contactTarget');
  contact.addEventListener('click', function(){
    smoothScroll('#contact', 1000);
  })



// NAV LOGO SLIDE-INS and ARROW ON SCROLL
  const navColor = document.querySelector('.nav');
  const hidden = document.querySelector('.scrollHome');

  window.onscroll =_=>{ 
      "use strict";
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop > 200 ) {
          navColor.classList.add("changeColor");
          navColor.classList.remove("navBack");
          navColor.style.backgroundColor = "#ebebe9";
          navColor.style.boxShadow = "0 0 10px #cf653c";
          hidden.classList.add('arrowDisplay');
          hidden.classList.remove('arrowHidden');
      } 
      else {
          navColor.classList.remove("changeColor");
          navColor.classList.add("navBack");
          navColor.style.backgroundColor = "unset";
          navColor.style.boxShadow = "none";
          hidden.classList.remove('arrowDisplay');
          hidden.classList.add('arrowHidden');
      }
  };

//CRABBY CAT FOOTER CLICK ---- THE MOST IMPORTANT PART OF THE PORTFOLIO!
  const footerClick = document.getElementById('what');
  function alertFunc(){
  const footerBG = document.getElementById('bg');
    if(footerBG.classList.contains('.crabby-cat')){
      footerBG.classList.replace('.crabby-cat', 'hidecc')
    } else {
      footerBG.classList.replace('hidecc', 'crabby-cat');
    }
  }
  footerClick.addEventListener('click', alertFunc)