
var fatFactor = 1;
var inner = document.getElementById('inner');
var chick = document.getElementById('chick');
var message = document.getElementById('message');
var video = document.getElementById('video');
var fridge = document.getElementById('fridge');
var bowl = document.getElementById('bowl');
var firework = document.getElementById('firework');

var audio = new Audio();
var drop_count = 0;

var audio_BG = new Audio();
function start() {
  audio_BG.src = "./mp3/mickleness__splash.mp3"
  audio_BG.play();
  audio_BG.loop = true;
}

function load() {
  window.location = "FAC_page4.html"
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
  drop_count++;

  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  inner.appendChild(document.getElementById(data));

  var [item_id, series, fatFactor] = data.split('-');

  var message_box = "";

  var chick_new_src = "";

  // if (item_id == "banana") {
  //   message_box = "Bananas can help my digestion and it can also bring me a good mood.";
  //   audio.src = "./mp3/eat_quick.mp3";
  // } else if (item_id == "cabbage") {
  //   message_box = "Actually, I don't like cabbage. But I have no choice now.<br> Em... It wasn't as bad as I thought.";
  //   audio.src = "./mp3/eat_salad.wav";
  //
  // } else if (item_id == "tomato") {
  //   message_box = "Is a tomato a fruit or a vegetable? I think it is a vegetable.";
  //   audio.src = "./mp3/eat_tomato.wav";
  //
  // } else if (item_id == "salad") {
  //   message_box = "Oh, you bring me a salad! Look at the colorful garden vegetables, they are so tasty. Thank you very much!";
  //   audio.src = "./mp3/eat_salad.wav";
  //
  // } else if (item_id == "Chips") {
  //   message_box = "Chips are typically high in fat and calories. I begin to worry about my weight.";
  //   audio.src = "./mp3/eat_chips.wav";
  //
  // } else if (item_id == "Chocolate") {
  //   message_box = "What is the meaning of life? All evidence to date suggest it's chocolate. I can even take chocolate from strangers.";
  //   audio.src = "./mp3/eat_yummy.mp3";
  //
  // } else if (item_id == "Cake") {
  //   message_box = "How could you know that today is my birthday. I'm so happy, thank you Mr. fox.";
  //   audio.src = "./mp3/eat_mhm.mp3";
  //
  // } else if (item_id == "Hamburger") {
  //   message_box = "Is a hamburger really unhealthy? With just one hamburger, I can get bread, beef and lettuce. Those are all healthy food, right?";
  //   audio.src = "./mp3/eat_yummy.mp3";
  // }

  switch (item_id)
  {
  case "banana":
    message_box = "Bananas can help my digestion and it can also bring me a good mood.";
    audio.src = "./mp3/eat_quick.mp3";
    chick_new_src = "./image/chick_thanks.png";
    break;
  case "cabbage":
    message_box = "Actually, I don't like cabbage. But I have no choice now.<br> Em... It wasn't as bad as I thought.";
    audio.src = "./mp3/eat_salad.wav";
    chick_new_src = "./image/chick_tasty.png";
    break;
  case "tomato":
    message_box = "Is a tomato a fruit or a vegetable? I think it is a vegetable.";
    audio.src = "./mp3/eat_tomato.wav";
    chick_new_src = "./image/chick_tasty.png";
    break;
  case "salad":
    message_box = "Oh, you bring me a salad! Look at the colorful garden vegetables, they are so tasty. Thank you very much!";
    audio.src = "./mp3/eat_salad.wav";
    chick_new_src = "./image/chick_happy.png";
    break;
  case "Chips":
    message_box = "Chips are typically high in fat and calories. I begin to worry about my weight.";
    audio.src = "./mp3/eat_chips.wav";
    chick_new_src = "./image/chick_unhappy.png";
    break;
  case "Chocolate":
    message_box = "What is the meaning of life? All evidence to date suggest it's chocolate. I can even take chocolate from strangers.";
    audio.src = "./mp3/eat_yummy.mp3";
    chick_new_src = "./image/chick_eyeClose.png";
    break;
  case "Cake":
    message_box = "How could you know that today is my birthday. I'm so happy, thank you Mr. fox.";
    audio.src = "./mp3/eat_mhm.mp3";
    chick_new_src = "./image/chick_birthday.png";
    break;
  case "Hamburger":
    message_box = "Is a hamburger really unhealthy? With just one hamburger, I can get bread, beef and lettuce. Those are all healthy food, right?";
    audio.src = "./mp3/eat_yummy.mp3";
    chick_new_src = "./image/chick_yummy.png";
    break;
  }

  // if (item_id == "salad") {
  //   chick_new_src = "./image/chick_happy.png";
  // } else if (item_id == "banana") {
  //   chick_new_src = "./image/chick_thanks.png";
  // } else if (item_id == "tomato" || item_id == "cabbage") {
  //   chick_new_src = "./image/chick_tasty.png";
  // } else if (item_id == "Chips") {
  //   chick_new_src = "./image/chick_unhappy.png";
  // } else if (item_id == "Chocolate") {
  //   chick_new_src = "./image/chick_eyeClose.png";
  // } else if (item_id == "Cake") {
  //   chick_new_src = "./image/chick_birthday.png";
  // } else if (item_id == "Hamburger" || item_id == "Chocolate") {
  //   chick_new_src = "./image/chick_yummy.png";
  // }

  if(series == 'V') {
    setTimeout(function() {
      message.innerHTML = message_box;
      audio.play();
      chick.src = chick_new_src;

      inner.innerHTML = "";
      chick.width *= fatFactor;

    },1000);
  } else if (series == 'F') {
    setTimeout(function() {
      message.innerHTML = message_box;
      inner.innerHTML = "";
      chick.src = chick_new_src;
      chick.width *= fatFactor;
      audio.play();
    },1000);
  }



  if (drop_count == 8 ) {
    setTimeout(function() {
      message.innerHTML = "Congratulations! Now you have more food in your body than in the fridge.<br>Let's watch a video about how funny animals are when they get fat.";
      message.style.color = "white";
      message.style.fontSize = "x-large";
      message.style.fontWeight = "bold";
      message.style.backgroundColor = "rgba(0, 0, 0, .7)";
      document.getElementById("grid-container").style.backgroundImage = "url('./image/chick_firework.jpg')";
      chick.style.display = "none";
      fridge.style.display = "none";
      bowl.style.display = "none";

      audio_BG.pause();
      audio.src = "./mp3/firework.wav";
      audio.play();

    }, 6000);

    setTimeout(function() {
      video.style.display = "block";
    } ,11000);

    setTimeout(function() {
      document.getElementById('button').style.display = 'inline-block';
    }, 15000);
  }
}
