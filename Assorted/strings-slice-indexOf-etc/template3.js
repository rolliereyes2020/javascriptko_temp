 //** aug 6 strings as objects; substrings etc. **//
  let stringKo = 'Mozilla.org';
  console.log(stringKo[stringKo.length-1]);
  
  stringKo.indexOf('zilla');
  stringKo.indexOf('vanilla');
  
  if(stringKo.indexOf('Mozilla') !== -1) {
      console.log("Yay all is mozilla!");
    } else {
		console.log ("Oh not correct");
	}
  
    
	console.log(stringKo.slice(0,3));
    
	console.log(stringKo.slice(2));