function sayHello(){
  console.log("Hello");
}

function say(a,b,c){
  console.log(`say: ${a}`);
  console.log(`say: ${b}`);
  console.log(`say: ${c}`);
}

function  saytest(d,e = "default"){
  console.log(`d: ${d}`,`e: ${e}`);
}
//「2020*1010」を計算し、その結果を返り値として返す関数を書く
function math(){
  return 2020*1010;
}
//引数を2つ持ち、その二つの引数のかけ算の結果を返す関数を書く
function multiply(a,b){
  return a*b;
}
//引数を2つ持ち、その二つの引数をかけ算の結果の1の位の値
// を返す関数を書く
function first(a,b){
  return a * b % 10;
}
//引数を2つ持ち、その二つの引数をかけ算の結果の10の位の値
// を返す関数を書く
function two(a,b){
  return Math.floor(a * b % 100 /10);
}