//whileバージョン

let answerElement = document.querySelector("#answer");
let output = "<ul>"

//whileバージョン
let i = 0;
while(i < fruitNames.length){
  output = output+`<li>${fruitNames[i]}</li>`
  i++;
}

output = output + "</ul>";
answerElement.innerHTML = output;

