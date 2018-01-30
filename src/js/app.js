$(function() {
    $('html, body').on('click', ($el) => {
      if ( $el.target == document.documentElement ){
        $('html').removeClass('open-sidebar')
        $('.search').removeClass('active')
      }
    })
  
    $('.js-open-sidebar').on('click', () => {
      $('html').addClass('open-sidebar')
    })

    $('.header-profile-item-search').on('click', () => {
      $('.search').addClass('active')
    })

    $('.menu-item').on('click', function(){
      $('.menu-item').removeClass('active')
      $(this).addClass('active')
    })
})

const randomScalingFactor = () => Math.round(Math.random() * 100)

const options = {
  legend: { display: false },
  responsive: true,
  tooltips: { enabled: false },
  scales: {
      xAxes: [{ display: false }],
      yAxes: [{ display: false }]
  }
}

const data = {
  labels: [ "", "", "", "", "", "", "", "", "", "", "" ],
  datasets: [{
      backgroundColor: "white",
      borderColor: "white",
      data: [
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor(), 
          randomScalingFactor()
      ],
      fill: false
  }]
}

const infoGraphGreen = new Chart(document.getElementById("info-chart-green").getContext('2d'), {
  type: 'line',
  data,
  options
})

const infoGraphRed = new Chart(document.getElementById("info-chart-red").getContext('2d'), {
  type: 'line',
  data,
  options
})

const infoGraphYellow = new Chart(document.getElementById("info-chart-yellow").getContext('2d'), {
  type: 'line',
  data,
  options
})