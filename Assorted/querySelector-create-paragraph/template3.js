//** aug 5 querySelector create paragraph; html should have: <section class="blah"></section>**//
  let myName ="Rolando";
  let myAge = "53";
  
  const section = document.querySelector('section');
  let para1 = document.createElement('p');
  para1.textContent = myName;
  let para2 = document.createElement('p');
  para2.textContent = myAge;
  section.appendChild(para1);
  section.appendChild(para2);