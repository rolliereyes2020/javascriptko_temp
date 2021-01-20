 //** aug 6 capitalize city names  **//
  /* html: <div class="output" style="min-height: 125px;">
  <ul><li>lonDon</li><li>ManCHESTer</li><li>BiRmiNGHAM</li><li>liVERpoOL</li></ul></div> */
  const list = document.querySelector('.output ul');
  list.innerHTML = '';
  let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
  
  for (let i = 0; i < cities.length; i++) {
    let input = cities[i];
    let lower = input.toLowerCase();
    let firstLetter = lower.slice(0,1);
    let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    let result = capitalized;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  
  }