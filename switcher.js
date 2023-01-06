/* Toggle style switcher */
const styleSwitcherToggle = document.querySelector('.styleSwitcherToggler');
styleSwitcherToggle.addEventListener('click',()=>{
  document.querySelector('.styleSwitcher').classList.toggle('open');
})
// hide style switcher on scroll.
window.addEventListener('scroll',()=>{
  if( document.querySelector('.styleSwitcher').classList.contains("open")){
    document.querySelector(".styleSwitcher").classList.remove('open');
  }
})
// theme color
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
  alternateStyles.forEach((style)=>{
    if(color === style.getAttribute('title')){
      style.removeAttribute('disabled');
    }
    else{
      style.setAttribute('disabled','true');
    }
  })
}

// Day and Night Mode
const dayNight = document.querySelector(".dayNight");
dayNight.addEventListener('click',()=>{
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
 
  
})
window.addEventListener('load',()=>{
  if(document.body.classList.contains('dark')){
    dayNight.querySelector('i').classList.add('fa-sun')
    document.querySelector('.logo img').setAttribute('src','images/cheru11.png')
  }
  else{
    dayNight.querySelector('i').classList.add('fa-moon')
    document.querySelector('.logo img').setAttribute('src','images/cheru2.png')
  }
})

dayNight.addEventListener('click',()=>{
  if(document.body.classList.contains('dark')){
   
    document.querySelector('.logo img').setAttribute('src','images/cheru11.png')
  }
  else{
    
    document.querySelector('.logo img').setAttribute('src','images/cheru2.png')
  }
})