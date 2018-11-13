var mass1=[], mass2=[], mass3=[];
$('document').ready(function() {
  $('#clickButton5').click(function() {
      loadStar(44,31,50);
      loadData5();
      mass1 = [200, 300, 400, 370, 100, 200, 200, 500, 200];
      mass2 = [100, 400, 200, 150, 300, 150, 100, 200, 400];
      mass3 = [];
      for (var i=0; i<=8; i++){
        mass3[i] = mass1[i]+mass2[i];
      }
      drawChart();
      return;
    });
  $('#clickButton4').click(function() {
      loadStar(30,60,10);
      loadData4();
      mass1 = [500, 600, 400, 470, 200, 400, 200, 500, 700];
      mass2 = [100, 400, 500, 150, 300, 300, 300, 200, 400];
      mass3 = [];
      for (var i=0; i<=8; i++){
        mass3[i] = mass1[i]+mass2[i];
      }
      drawChart();
      return;
    });
    $('#clickButton3').click(function() {
      loadStar(17,37,63);
      loadData3();
      mass1 = [300, 300, 400, 470, 200, 200, 200, 500, 300];
      mass2 = [100, 430, 500, 150, 300, 300, 300, 300, 400];
      mass3 = [];
      for (var i=0; i<=8; i++){
        mass3[i] = mass1[i]+mass2[i];
      }
      drawChart();
      return;
    });
    $('#clickButton2').click(function() {
      loadStar(33,27,25);
      loadData2();
      mass1 = [300, 500, 400, 470, 200, 400, 200, 500, 700];
      mass2 = [100, 400, 500, 150, 300, 300, 300, 700, 400];
      mass3 = [];
      for (var i=0; i<=8; i++){
        mass3[i] = mass1[i]+mass2[i];
      }
      drawChart();
      return;
    });
    $('#clickButton').click(function() {
    loadStar(43,51,68);
    loadData();
    return;
    });
    loadData();
    loadStar(43,52,68);
      mass1 = [200, 300, 400, 470, 200, 400, 200, 500, 700];
      mass2 = [100, 400, 500, 150, 300, 300, 300, 700, 400];
      mass3 = [];
      for (var i=0; i<=8; i++){
        mass3[i] = mass1[i]+mass2[i];
      }
    drawChart();
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
        out += '<div class="static-column">'
        out += '<div class="static-num">'+data[key]['pr']+'</div>';
        out += '<div class="static-text">'+data[key]['title']+'</div>';
        if((key%2)==0){
          out += '<div class="static-pro"><div class="myProgress5"><div class="myBar5" style=width:'+data[key]['pr']+'></div></div></div>';
        }else{
          out += '<div class="static-pro"><div class="myProgress4"><div class="myBar4" style=width:'+data[key]['pr']+'></div></div></div>';
        }
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData2() {
  $.getJSON('http://portier/json/data2.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column">'
        out += '<div class="static-num">'+data[key]['pr']+'</div>';
        out += '<div class="static-text">'+data[key]['title']+'</div>';
        if((key%2)==0){
          out += '<div class="static-pro"><div class="myProgress5"><div class="myBar5" style=width:'+data[key]['pr']+'></div></div></div>';
        }else{
          out += '<div class="static-pro"><div class="myProgress4"><div class="myBar4" style=width:'+data[key]['pr']+'></div></div></div>';
        }
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData3() {
  $.getJSON('http://portier/json/data3.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column">'
        out += '<div class="static-num">'+data[key]['pr']+'</div>';
        out += '<div class="static-text">'+data[key]['title']+'</div>';
        if((key%2)==0){
          out += '<div class="static-pro"><div class="myProgress5"><div class="myBar5" style=width:'+data[key]['pr']+'></div></div></div>';
        }else{
          out += '<div class="static-pro"><div class="myProgress4"><div class="myBar4" style=width:'+data[key]['pr']+'></div></div></div>';
        }
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData4() {
  $.getJSON('http://portier/json/data4.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column">'
        out += '<div class="static-num">'+data[key]['pr']+'</div>';
        out += '<div class="static-text">'+data[key]['title']+'</div>';
        if((key%2)==0){
          out += '<div class="static-pro"><div class="myProgress5"><div class="myBar5" style=width:'+data[key]['pr']+'></div></div></div>';
        }else{
          out += '<div class="static-pro"><div class="myProgress4"><div class="myBar4" style=width:'+data[key]['pr']+'></div></div></div>';
        }
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}
function loadData5() {
  $.getJSON('http://portier/json/data5.json', function(data) {
      var out = '';
      for(var key in data) {
        out += '<div class="static-column">'
        out += '<div class="static-num">'+data[key]['pr']+'</div>';
        out += '<div class="static-text">'+data[key]['title']+'</div>';
        if((key%2)==0){
          out += '<div class="static-pro"><div class="myProgress5"><div class="myBar5" style=width:'+data[key]['pr']+'></div></div></div>';
        }else{
          out += '<div class="static-pro"><div class="myProgress4"><div class="myBar4" style=width:'+data[key]['pr']+'></div></div></div>';
        }
        out += '</div>';

      }

      $('#static-body').html(out);

    })
}

// google charts
  google.charts.load('current', {'packages':['line', 'corechart']});
  google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var chartDiv = document.getElementById('chart_div');

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Month');
      data.addColumn('number', "Новые клиенты");
      data.addColumn('number', "Старые клиенты");
      data.addColumn('number', "Общее");
      
      
      for(var i=0; i <= 8; i++){
        data.addRows([
          [new Date(2018, i), mass1[i], mass2[i], mass3[i]]
        ]);

      }
      /*data.addRows([
        [new Date(2018, 0),  200, 100, 300],
        [new Date(2018, 1),  300, 400, 700],
        [new Date(2018, 2),  400, 500, 900],
        [new Date(2018, 3),  470, 150, 620],
        [new Date(2018, 4),  200, 300, 700],
        [new Date(2018, 5),  400, 300, 700],
        [new Date(2018, 6),  200, 300, 500],
        [new Date(2018, 7),  500, 700, 1200],
        [new Date(2018, 8),  700, 300, 1000]
      ]);*/

      var classicOptions = {
        width: '100%',
        height: 450,
        // Gives each series an axis that matches the vAxes number below.
        series: {
          0: {targetAxisIndex: 0},
          1: {targetAxisIndex: 1},
          2: {targetAxisIndex: 2}
        },
        /*vAxes: {
          // Adds titles to each axis.
          0: {title: 'Temps (Celsius)'},
          1: {title: 'Daylight'}
        },*/
        hAxis: {
          ticks: [new Date(2018, 0), new Date(2018, 1), new Date(2018, 2), new Date(2018, 3),
                  new Date(2018, 4),  new Date(2018, 5), new Date(2018, 6), new Date(2018, 7),
                  new Date(2018, 8)
                 ]
        },
        vAxis: {
          viewWindow: {
            max: 1200
          }
        },
        explorer: {
          maxZoomOut:2,
          keepInBounds: true
        }
      };


      function drawClassicChart() {
        var classicChart = new google.visualization.LineChart(chartDiv);
        classicChart.draw(data, classicOptions);
        
      }

      drawClassicChart();

    }
    

