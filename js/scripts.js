var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


var options = {
    series: [{
    data: [50, 100, 99]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Processed Files', 'Pending Files', 'Rejected Files'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();





  var options = {
    series: [30, 20, 5, 5, 189],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['pdf', 'mp4', 'mp3', 'png', 'docs'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
  chart.render();