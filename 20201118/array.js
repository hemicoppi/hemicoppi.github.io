function doCheckAnswers(){
  let inputElement = document.querySelector("#input_string");
  let answerElement= document.querySelector("#answer");
  let answerListElements = document.querySelectorAll("ul.answer-list li");
  let answerArray = Array.from(answerListElements);

  let answerText = "不正解";
  answerArray.forEach(function(answer){
    if(answer.innerHTML == inputElement.value){
      answerText = "正解";
    }
  })
  answerElement.innerHTML = answerText;
}