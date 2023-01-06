// Typing section
var typed = new Typed('.typing',{
  strings:['','Front-end Developer','React Developer','Freelancer','Youtuber'],
  typeSpeed:120,
  BackSpeed:100,
  loop:true
})
//Aside
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;
for(let i=0; i < totalNavList; i++){
   const a = navList[i].querySelector('a');
   a.addEventListener('click',function(){
    removeBackSection()
    for(let j=0; j < totalNavList; j++){
      if(navList[j].querySelector("a").classList.contains('active')){
        addBackSection(j)
        //allSection[j].classList.toggle('backSection');
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);
    if(window.innerWidth < 1200)
    {
      asideSectionTogglerBtn()
    }
   })
}
function removeBackSection(){
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove('backSection');
  }
}
function addBackSection(num){
  allSection[num].classList.add('backSection');
}
function showSection(element){
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.remove('active')
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#'+target).classList.add('active')
}

function updateNav(element){
   for(let i=0; i< totalNavList; i++){
    navList[i].querySelector('a').classList.remove('active');
    target = element.getAttribute('href').split('#')[1];
    if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
      navList[i].querySelector('a').classList.add('active');
    }
   }
}
document.getElementById('hire-me').addEventListener('click',function(){
  const sectionIndex = this.getAttribute('data-section-index');
  
  showSection(this)
  updateNav(this)
  removeBackSection()
  addBackSection(sectionIndex)

})
const navTogglerBtn = document.querySelector('.navToggler');
const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click',()=>{
  asideSectionTogglerBtn();

})
function asideSectionTogglerBtn(){
  aside.classList.toggle('open')
  navTogglerBtn.classList.toggle('open')
  for(let i=0; i<totalSection; i++){
    allSection[i].classList.toggle('open');
  }
}





// form section or contact form section;

const form = document.getElementById('myform');
const uname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
function setError(id, error){
  let elementId = document.getElementById(id);
 
  elementId.getElementsByClassName('errormsg')[0].innerHTML = error;
}

function clearError(){
   let errorMassage = document.getElementsByClassName('errormsg');
   for(let item of errorMassage){
    item.innerHTML = ''
   }
}

function formValidation(){
  clearError()
 
  if (uname.value === ''){
    setError('username', '*this is a required field.') 
    return false;
  }
  if(email.value === ''){
    setError('useremail', '*this is a required field.')
    return false;
  }
  if(subject.value === ''){
    setError("usersubject", '*this is a required field.')
    return false;
  }
  if(message.value === ''){
    setError('usermessage','*this is a required field.')
    return false;
  }
  return true;
 }