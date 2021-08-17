import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import styled from 'styled-components'
import { roundRect } from '../../utils'
Chart.register(...registerables)

const HBarContainer = styled.div`
  width: 500px;
`

function createHBar() {
  var ctx = document.getElementById('HBar') as HTMLCanvasElement

  new Chart(ctx, {
    type: 'bar',
    plugins: [
      {
        id: 'beforeDraw',
        beforeDraw: function (chartInstance) {
          const h = 25.052000000000001
          const ctx = chartInstance.ctx,
            width = chartInstance.chartArea.right
          //   chartInstance.data.datasets.forEach(function (dataset, datasetIndex) {
          //     var datasetMeta = chartInstance.getDatasetMeta(datasetIndex)
          //     console.log(datasetMeta.data)
          const heightMinus = 13
          ctx.save()
          ctx.fillStyle = 'white'
          roundRect(ctx, 73, 26.5 - heightMinus, width - 70, h, 50)
          roundRect(
            ctx,
            73,
            58.674999999999994 - heightMinus,
            width - 70,
            h,
            50
          )
          roundRect(ctx, 73, 89.825 - heightMinus, width - 70, h, 50)
          roundRect(ctx, 73, 122.5 - heightMinus, width - 70, h, 50)

          ctx.restore()
        },
        afterDatasetsDraw: function (chartInstance) {},
      },
    ],
    data: {
      labels: ['Compute A', 'Compute B', 'Compute C', 'Compute D'],
      datasets: [
        {
          borderRadius: 50,

          data: [4, 0, 2, 4],
          backgroundColor: 'lightgreen',
          borderSkipped: false,
        },
        {
          borderRadius: 50,
          borderSkipped: false,
          data: [0, 0, 3, 5],
          backgroundColor: 'green',
        },
        {
          borderRadius: 50,
          borderSkipped: false,
          data: [8, 5, 7, 7],
          backgroundColor: 'orange',
        },
        {
          borderRadius: 50,
          borderSkipped: false,
          data: [12, 10, 0, 10],
          backgroundColor: 'red',
        },
      ],
    },
    options: {
      aspectRatio: 3,
      plugins: {
        legend: {
          display: false,
          labels: {
            color: 'white',
          },
        },
      },
      indexAxis: 'y',

      scales: {
        xAxis: {
          min: 0,
          max: 12,
        },
        y: {
          stacked: true,
          grid: {
            display: false,
          },
        },
        x: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
      },
    },
  })
  ctx.style.backgroundColor = 'rgb(32, 41, 56)'
}
const HBar = () => {
  useEffect(() => {
    createHBar()
  }, [])
  return (
    <HBarContainer>
      <canvas id='HBar'></canvas>
    </HBarContainer>
  )
}

export default HBar
