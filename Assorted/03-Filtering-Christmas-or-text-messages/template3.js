 //** aug 6 Filtering greeting messages **//
  /* html: <div class="output" style="min-height: 125px;">
        <h2>Live output</h2>
        <ul>
          <li>Happy Birthday!</li>
          <li>Merry Christmas my love</li>
          <li>A happy Christmas to all the family</li>
          <li>You're all I want for Christmas</li>
          <li>Get well soon</li></ul>
        </div>
   */
  const list = document.querySelector('.output ul');
  list.innerHTML = '';
  let greetings = ['Happy Birthday!',
                   'Merry Christmas my love',
                   'A happy Christmas to all the family',
                   'You\'re all I want for Christmas',
                   'Get well soon'];
  
  for (let i = 0; i < greetings.length; i++) {
    let input = greetings[i];
    if (greetings[i].indexOf('Christmas') !== -1) {
      let result = input;
      let listItem = document.createElement('li');
      listItem.textContent = result;
      list.appendChild(listItem);
    }
  }
  
