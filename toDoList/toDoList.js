'use strict';

function updateDate() {
  let time = document.getElementsByClassName("time")[0];
  let date = document.getElementsByClassName("date")[0];
  let currentdate = new Date();
  let minutes = currentdate.getMinutes();
  let seconds = currentdate.getSeconds();
  let day = currentdate.getDate();
  let month = currentdate.getMonth();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 13) {
    month = 1 + month;
  }

  if (month < 10) {
    month = "0" + month;
  }

  time.innerHTML = currentdate.getHours() + ":" + minutes + ":" + seconds;
  date.innerHTML = day + "/" + month;
};

updateDate();
setInterval(updateDate, 110);

function addNewElement() {
  let newList = document.getElementsByClassName("listAndChekbox")[0];
  let newElement = document.getElementsByClassName("enter")[0];
  let lists = document.getElementsByClassName("list");
  let number = lists.length + 1;
  newList.innerHTML +=  '<p class="list new-list list'+ number + '" onclick="itemCompleted(\'list' + number + '\')"><input type="checkbox" class="checkmark">' + newElement.value + '</p>';
  newElement.value = '';
};
 
function itemCompleted(e) {
  console.log(e)
  let elem = document.getElementsByClassName(e)[0];
  elem.classList.toggle("completed"); 

}

