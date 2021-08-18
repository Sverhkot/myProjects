
function addHtmlComment(data) {
  let i = 0;
  let n = data.length;
  
  while (i < n) {
    let comments = `
      <ul class="comments">
        
        <li class="comments-li">
            <p class="email">
              ${data[i].email}
            </p>
            <p class="name">
              ${data[i].name}
            </p>
            <p class="comment-body">${data[i].body}</p>
        </li>
      </ul>`

    $(".posts > li").append(comments);
    i = i + 1;
  }
};

$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("post")
  console.log(id);

  $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, function (post) {
    console.log(post.title)
    $(".title").html(post.title)
    $(".post").html(post.body)
      
    });
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, function (data) {
      addHtmlComment(data)
    });

});