
$('document').ready(function() {
  $('#clickButton5').click(function() {
      loadStar(44,31,50);
      loadData5();
      return;
    });
  $('#clickButton4').click(function() {
      loadStar(30,60,10);
      loadData4();
      return;
    });
    $('#clickButton3').click(function() {
      loadStar(17,37,63);
      loadData3();
      return;
    });
    $('#clickButton2').click(function() {
      loadStar(33,27,25);
      loadData2();
      return;
    });
    $('#clickButton').click(function() {
    loadStar(43,51,68);
    loadData();
    return;
    });
    loadData();
    loadStar(43,52,68);
});

function loadStar(pro, pro2, pro3) {
  var star = '';
  
  var takeStar = ((70 + 90 + 80)*5)/(3*100);
  if(takeStar < 1.5){
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/starlast.png" alt=""> <img src="img/starlast.png" alt=""> <img src="img/starlast.png" alt=""> <img src="img/starlast.png" alt="">';

  }else if(takeStar < 2.5){
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/starlast.png" alt=""> <img src="img/starlast.png" alt=""> <img src="img/starlast.png" alt="">';
  }else if(takeStar < 3.5){
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/starlast.png" alt=""> <img src="img/starlast.png" alt="">';
  }else if(takeStar < 4.5){
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/starlast.png" alt="">';
  }else{
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
   star += '<img src="img/star(1).png"> ';
  }
  $('#conv').html(star);
  pro += '%';
  $('#num1').html(pro);
  $('#myBar1').css('width', pro);

  pro2 += '%';
  $('#num2').html(pro2);
  $('#myBar2').css('width', pro2);

  pro3 += '%';
  $('#num3').html(pro3);
  $('#myBar3').css('width', pro3);
}
function loadData() {
  $.getJSON('http://portier/json/data.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column1">'
        out += '<div class="static-text1">'+data[key]['title']+'</div>';
        out += '<div class="static-num1">'+data[key]['pr']+'</div>';
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData2() {
  $.getJSON('http://portier/json/data2.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column1">'
        out += '<div class="static-text1">'+data[key]['title']+'</div>';
        out += '<div class="static-num1">'+data[key]['pr']+'</div>';
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData3() {
  $.getJSON('http://portier/json/data3.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column1">'
        out += '<div class="static-text1">'+data[key]['title']+'</div>';
        out += '<div class="static-num1">'+data[key]['pr']+'</div>';
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData4() {
  $.getJSON('http://portier/json/data4.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column1">'
        out += '<div class="static-text1">'+data[key]['title']+'</div>';
        out += '<div class="static-num1">'+data[key]['pr']+'</div>';
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData5() {
  $.getJSON('http://portier/json/data5.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column1">'
        out += '<div class="static-text1">'+data[key]['title']+'</div>';
        out += '<div class="static-num1">'+data[key]['pr']+'</div>';
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}


    

