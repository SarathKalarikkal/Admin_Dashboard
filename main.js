var sidebarOpen = false
var sidebar = document.getElementById('sidebar')

function openSideBar(){
    if(!sidebarOpen){
        sidebar.classList.add('sidebar-responsive')
        sidebarOpen = true
    }
}
function closeSideBar(){
    if(sidebarOpen){
        sidebar.classList.remove('sidebar-responsive')
        sidebarOpen =false;
    }
}
// -------------------Theme changer--------------------
 const body = document.querySelector('body')
const day = document.querySelector('#day')
const dark = document.querySelector('#dark')
const modeName = document.querySelector('.modeName')
const toggleArea = document.querySelector('.toggle')

toggleArea.addEventListener('click', function() {
    body.classList.toggle('day');
    if(modeName.innerHTML == "Light mode"){
        modeName.innerHTML = "Dark mode"
    }else{
        modeName.innerHTML = "Light mode"
    }
});

// ---------------------Product section----------
const dashboardBtn = document.getElementById('dashboardBtn')
const productBtn = document.getElementById('productBtn')
const productSection = document.querySelector('.product-section')
const mainTitle = document.querySelector(".main-title")
const mainCards = document.querySelector(".main-cards")
const card = document.querySelector(".card")
const charts = document.querySelector(".charts")

productBtn.addEventListener('click',()=>{
  mainTitle.classList.add('productAtive')
  mainCards.classList.add('productAtive')
  card.classList.add('productAtive')
  charts.classList.add('productAtive')
  productSection.classList.add('productAtive')
})
dashboardBtn.addEventListener('click',()=>{
  mainTitle.classList.remove('productAtive')
  mainCards.classList.remove('productAtive')
  card.classList.remove('productAtive')
  charts.classList.remove('productAtive')
  productSection.classList.remove('productAtive')
})



// -------------------CHARTS--------------------


// -------------BAR CHARTS-----------
const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [{
      label: 'Data Series',
      data: [10, 20, 15, 25],
    }],
  };
  const labelColors = ['red', 'blue', 'green', 'orange']; 
  const numberColors = ['purple', 'teal', 'brown', 'pink']; 

  
  function customizeBarColors() {
    const colors = ['#229efd', '#05d8a3', '#229efd', '#05d8a3'];
  
    data.datasets[0].backgroundColor = colors;
  }

  function createBarChart() {
    customizeBarColors(); 
  
    const ctx = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
  
      },
    });
  }
  
  document.addEventListener('DOMContentLoaded', createBarChart);
  
  

  // -------------Line area CHARTS-----------
  var options = {
    chart: {
      type: "area",
      height: 300,
      foreColor: "#999",
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: ['#00E396', '#0090FF'],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Total Views',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Unique Views',
      data: generateDayWiseTimeSeries(1, 18)
    }],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 14,
        offsetY: -5
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);

  chart.render();

  function generateDayWiseTimeSeries(s, count) {
    var values = [[
      4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
    ], [
      2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }