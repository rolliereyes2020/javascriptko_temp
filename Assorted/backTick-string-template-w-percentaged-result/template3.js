//** aug 6 String template or string literal is way better that traditional way. Backtick is used. **//
  let song = 'Fight the Youth';
  song = `Fight the Youth`;
  
  let score = 9;
  let highestScore = 10;
  let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';
  console.log(output);
  
  output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;
  console.log(output);
  
  //** aug 6 String template or string literal exam score, percentage result **//
  //** note: output is: You scored 80/100 (80%). Well done, you passed! */
  let examScore = 80;
  let examHighestScore = 100;
  examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
  console.log(examReport);