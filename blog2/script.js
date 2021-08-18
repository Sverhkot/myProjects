
$(document).ready(function () {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  let rows = urlParams.get('rows');
  let columns = urlParams.get('columns');
  $(".rows").val(rows);
  $(".columns").val(columns);

  function addHTML(data, size) { 
    $(".content").html("");
    let newHTML = '<ul>'
    for (let j = 0; j < size; j++) {
      newHTML += `<li><img src=${data[j].thumbnailUrl}</li>`; 
    }
    newHTML += '</ul>';
    $(".content").append(newHTML);
  }

  $.get('https://jsonplaceholder.typicode.com/photos', function (data) {
    // console.log(data);
    function fillGrid() {
      let rows = $(".rows").val();
      let columns = $(".columns").val();
      let size = rows * columns;
      console.log(size);

      $(".content").html(addHTML(data, size));
      $("ul").css("grid-template-rows", `repeat(${rows},1fr)`);
      $("ul").css("grid-template-columns", `repeat(${columns}, 1fr)`);
    };
    $(".btn").click(fillGrid);
    fillGrid();
  });

})

