

function All(){
  let answerElement = document.querySelector("#answer");
  let output = "<ul>"
  tweets.forEach(function (tweet) {
    output = output + `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i> <i>${tweet.avatar}</i></li>`
  })


  output = output + "</ul>";
  answerElement.innerHTML = output;
}

//console.log(tweets[0].name);

//三郎BOTを押すと
//{ name: "三郎BOT", message: "21時でござる", tweetedAt: "2019-11-01 21:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png" },
//{ name: "三郎BOT", message: "20時でござる", tweetedAt: "2019-11-01 20:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"  },
//{ name: "三郎BOT", message: "19時でござる", tweetedAt: "2019-11-01 19:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"  }
//が表示される

function 三郎BOT() {
  let answerElement = document.querySelector("#answer");
  let output = "<ul>"

  for (let i = 0; i < tweets.length; i++) {
    let tweet = tweets[i];
    let img = document.getElementById(tweet.avatar);

    if (tweet.name === "三郎BOT") {
      console.log(i, tweet.name, img);
      output = output + `<li><b>${tweet.name}</b>:${tweet.message}<i>${tweet.tweetedAt}</i>${tweet.avatar}</li>`

    }
    output = output + "</ul>"
    answerElement.innerHTML = output;
    //img.style.display = "block";
  }
}

function 次郎() {
  let answerElement = document.querySelector("#answer");
  let output = "<ul>"

  for (let i = 0; i < tweets.length; i++) {
    let tweet = tweets[i];
    if (tweet.name === "次郎") {
      console.log(i, tweet.name, tweet.message)
      output = output + `<li><b>${tweet.name}</b>:${tweet.message}<i>${tweet.tweetedAt}</i>${tweet.avatar}</li>`

    }
    output = output + "</ul>"
    answerElement.innerHTML = output;
  }
}

function 太郎() {
  let answerElement = document.querySelector("#answer");
  let output = "<ul>"

  for (let i = 0; i < tweets.length; i++) {
    let tweet = tweets[i];
    if (tweet.name === "太郎") {
      console.log(i, tweet.name, tweet.message)
      output = output + `<li><b>${tweet.name}</b>:${tweet.message}<i>${tweet.tweetedAt}</i>${tweet.avatar}</li>`

    }
    output = output + "</ul>"
    answerElement.innerHTML = output;
  }
}



