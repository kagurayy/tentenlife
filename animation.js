// function start() {
//   var canvas = document.getElementById('canvas');
//   var context = canvas.getContext('2d');
//   var image = new Image();
//   image.onload = function() {
//     context.drawImage(image, 0, 0);
//   };
//   image.src = "./image/cabbage.png";
// }
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

  if (item_id == "banana") {
    message_box = "Bananas are rich in potassium and fiber. They can help prevent asthma, cancer, high blood pressure, diabetes, cardiovascular disease, and digestive problems. I like bananas!";
    audio.src = "./mp3/eat_quick.mp3";
  } else if (item_id == "cabbage") {
    message_box = "Cabbage is rich in antioxidants, including vitamin C, anthocyanins, and sulfur, since it is a cruciferous vegetable. Do I look prettier?";
    audio.src = "./mp3/eat_salad.wav";

  } else if (item_id == "tomato") {
    message_box = "Is a tomato a fruit or a vegetable? True fruits are developed from the ovary in the base of the flower, and contain the seeds of the plant. So...";
    audio.src = "./mp3/eat_tomato.wav";

  } else if (item_id == "salad") {
    message_box = "Oh, you bring me a salad! Look at the colorful garden vegatables, they are so tasty. Thank you very much!";
    audio.src = "./mp3/eat_salad.wav";

  } else if (item_id == "Chips") {
    message_box = "Chips are typically high in fat and calories. I begin to worry about my weight.";
    audio.src = "./mp3/eat_chips.wav";

  } else if (item_id == "Chocolate") {
    message_box = "What is the meaning of life? All evidence to date suggest it's chocolate. I can even take chocolate from strangers.";
    audio.src = "./mp3/eat_yummy.mp3";

  } else if (item_id == "Cake") {
    message_box = "Vegetables are a must on a diet. I suggest carrot cake, healthy and tasty.";
    audio.src = "./mp3/eat_mhm.mp3";

  } else if (item_id == "Hamburger") {
    message_box = "In the states, you can buy Chinese food. In Beijing you can buy hamburger. It's very close. Now I feel the world become a big family. Not like before, two countries are far away.";
    audio.src = "./mp3/eat_yummy.mp3";
  }

  if (item_id == "salad") {
    chick_new_src = "./image/chick_happy.png";
  } else if (item_id == "banana") {
    chick_new_src = "./image/chick_thanks.png";
  } else if (item_id == "tomato" || item_id == "cabbage") {
    chick_new_src = "./image/chick_tasty.png";
  } else if (item_id == "Chips") {
    chick_new_src = "./image/chick_unhappy.png";
  } else if (item_id == "Cake") {
    chick_new_src = "./image/chick_eyeClose.png";
  } else if (item_id == "Hamburger" || item_id == "Chocolate") {
    chick_new_src = "./image/chick_yummy.png";
  }

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
      message.innerHTML = "Congratulations! Now you have more food in your body than in the fridge.<br>Let's watch the video about how funny the animals are when they get fat.";
      message.style.color = "white";
      document.getElementById("grid-container").style.backgroundImage = "url('./image/chick_firework.jpg')";
      chick.style.display = "none";
      fridge.style.display = "none";
      bowl.style.display = "none";

      audio.src = "./mp3/firework.wav";
      audio.play();

    }, 3000);

    setTimeout(function() {
      video.style.display = "block";
    } ,6000);
  }
}
