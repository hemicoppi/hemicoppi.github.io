function doLoop1(){
  let answerElement = document.querySelector("#answer");
  let summary = 0;
  let counter = 0;
  while(counter <= 10000){
    summary = summary + counter;
    counter++;
  }
  answerElement.innerHTML = summary;
}

function doLoop2(){
  let answerElement = document.querySelector("#answer")
  let summary = 0;
  let counter = 0;
  while(true){
    summary = summary + counter;
    if(summary > 50000){
      break;
    }
    counter++;
  }
  answerElement.innerHTML = summary;
}

function doFizzBuzz(){
  let answerElement = document.querySelector("#answer")
  let counter = 1;
  while(counter <= 100){
    let message = "";
    if(counter % 3 == 0 && counter % 5 == 0){
      message = "FizzBuzz";
    }else if(counter % 3 == 0) {
      message = "Fizz";
    }else if(counter % 5 ==0) {
      message = "Buzz";
    }else {
      message = counter;
    }

    answerElement.innerHTML
        =answerElement.innerHTML + message + "<br>";

    counter++;

    }
}
