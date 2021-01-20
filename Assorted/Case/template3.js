var val = 0;
  function testSwitch(val) {
  
    switch(val) {
    case 1:
      val = 111;
      break;
    case 2:
      val = 222;
      break;
    case 3:
      val = 333;
      break;
  }
    return val;
  }
  console.log(testSwitch(2));