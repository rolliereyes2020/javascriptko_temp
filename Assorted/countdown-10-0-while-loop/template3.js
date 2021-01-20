//** ============================================ countdown from 10 to 0 (High to low) using loop **//
//** html is: <div class="output"></div>
const outputVarKo = document.querySelector('.output');
outputVarKo.innerHTML = '';

let i = 10;

while(i >= 0) {
 let para = document.createElement('p');
 if(i === 10) {
 para.textContent = 'Countdown ' + i;
 } else if(i === 0) {
  para.textContent = 'Blast off!';
 } else {
 para.textContent = i;
 }

 outputVarKo.appendChild(para);

 i--;
}

/** other way, my own, using FOR LOOP for the above
const outputVarKo = document.querySelector('.output');
outputVarKo.innerHTML = '';

for (i = 10; i >= 0; i--) {
  let para = document.createElement('p');
  console.log(i);
  if (i === 10) {
    para.textContent = "Countdown na " + i;
  } else if (i === 0) {
    para.textContent = "Blast of yay!" + i;
  } else {
  para.textContent = i;
  }

  outputVarKo.appendChild(para);
}

**/