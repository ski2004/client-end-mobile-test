onmessage = function(e) {
  console.log('Worker: Message received from main script');
 
  if(typeof e.data.act === 'string') {
    eval(`${e.data.act}()`)

  }
  // let result = e.data[0] * e.data[1];
  // if (isNaN(result)) {
  //   postMessage('Please write two numbers');
  // } else {
  //   let workerResult = 'Result: ' + result;
  //   task1()
  //   console.log('Worker: Posting message back to main script');
  //   postMessage(workerResult);
  // }

  function task1(){
   console.log('aa')
  }
}
