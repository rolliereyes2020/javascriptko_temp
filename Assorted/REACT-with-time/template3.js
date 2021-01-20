
  
  //** july 29 REACT with time **//
  let my_element = document.createElement('h2');
  let my_span = document.createElement('span');
  
  my_span.innerText = "your friend is blah left at 2:12";
  
  my_element.appendChild(my_span);
  document.body.appendChild(my_element);
  document.getElementById('demo').innerHTML=Date();