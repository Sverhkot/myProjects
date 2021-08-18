let globalData = [];
function addHtml(data) {
  let i = 0;
  let n = data.length;
  $(".posts").html("");
  while (i < n) {
    let a = "<li><h3 class='title'><a href='comments.html" + "?post=" + data[i].id + "\'" + "class='link-to-comments'>" + data[i].title   + "</a></h3><p class=\"post\">" + data[i].body + "</p></li>";

    $(".posts").append(a);
    i = i + 1;
  }
};

function btnClick(btn) {
  let userId = +btn.innerText;
  let userPosts = globalData.filter(d => d.userId === userId);
  console.log(userPosts)
  addHtml(userPosts)
}
  
$(document).ready(function () {
  function addBtn(userIds) {
    let j = 0;
    let m = userIds.length;
    let u;
    while (j < m) {
      u = '<button type="button" class="btn btn-secondary" onclick="btnClick(this)">' + userIds[j] + '</button>'
      $(".btn-group").append(u);
      j = j + 1;
    }
  }
  
  $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
    console.log("Inside get");
    globalData = data;
    // делаем массив состоящий из userId
    let user = [...new Set(data.map(x => x.userId))];
    // let objK = data.filter(d => d.userId === 5);
    addHtml(data);
    addBtn(user)
  });
  console.log("После get")
  // $(".btn").click(function () {
  //   $(".list-of-posts").slideToggle();
  // })

  $("#add").click(function () {
    let input_text = $("input").val();
    $(".new-post").html(input_text);
  })
});


