const contacts = ['Anwar:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const classKo = document.querySelector('.one');


  for (i = 0; i < contacts.length; i++) {
    list1 = contacts[i];
    
    const listItem = document.createElement('p')
    listItem.textContent = list1;
    classKo.appendChild(listItem);

    document.getElementById('total').innerHTML = contacts.length;

  }




