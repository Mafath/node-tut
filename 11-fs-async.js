const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8', (err,result) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(result);
});
//uda eken first file eka read wenwa. but if we want to read second one also and then to creata new file, check below code.

readFile('./content/first.txt','utf8', (err,result) => {
  if(err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    const second = result;

    writeFile('./content/result-async.txt',"yey!!", (err,result) => {
      if(err){
        console.log;
        return;
      }
      console.log(result);
    });
  });

});