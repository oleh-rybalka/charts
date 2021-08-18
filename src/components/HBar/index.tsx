import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import styled from 'styled-components'
import { roundRect } from '../../utils'
Chart.register(...registerables)

const HBarContainer = styled.div`
  border: 1px solid black;
  min-width: 360px;
  width: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Header = styled.div`
  padding-left: 10px;
  width: 100%;
  background: rgb(54, 62, 76);
  height: 30px;
  color: white;
  font-size: 20px;
  border-right: 1px solid black;
  border-left: 1px solid black;
`
const ColorDot = styled.div<{ color: string }>`
  width: 10px;
  height: 7px;
  background: ${(props) => props.color};
  border-radius: 50%;
  margin-top: 3px;
  margin-right: 10px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  padding: 5px 0;
  color: white;
  margin: 0 5px;
`
const InfoList = styled.div`
  width: 60%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`
const Bar = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const Info = styled.span`
  width: 150px;
  font-size: 12px;
`
const colors = [
  'rgb(8, 173, 54)',
  'rgb(27, 123, 54)',
  'rgb(222, 120, 0)',
  'rgb(227, 28, 28)',
]
const texts = [
  'Updated',
  'Update available',
  'Update required',
  'Out of support',
]
function createHBar() {
  var ctx = document.getElementById('HBar') as HTMLCanvasElement

  new Chart(ctx, {
    type: 'bar',
    plugins: [
      {
        id: 'beforeDraw',
        beforeDraw: function (chartInstance) {
          const h = 16
          const ctx = chartInstance.ctx,
            width = chartInstance.chartArea.right
          chartInstance.data.datasets.forEach(function (dataset, datasetIndex) {
            const datasetMeta = chartInstance.getDatasetMeta(datasetIndex)
            const elementY = datasetMeta.data[datasetIndex].y
            const YMinus = 8.5

            ctx.save()
            ctx.fillStyle = 'white'
            roundRect(ctx, 73, elementY - YMinus, width - 70, h, 50)
            ctx.restore()
          })
        },
      },
    ],
    data: {
      labels: ['Compute A', 'Compute B', 'Compute C', 'Compute D'],
      datasets: [
        {
          borderRadius: 50,

          data: [4, 0, 2, 4],
          backgroundColor: colors[0],
          borderSkipped: false,
        },
        {
          borderRadius: 50,
          borderSkipped: false,
          data: [0, 0, 3, 5],
          backgroundColor: colors[1],
        },
        {
          borderRadius: 50,
          borderSkipped: false,
          data: [8, 5, 7, 7],
          backgroundColor: colors[2],
        },
        {
          borderRadius: 50,
          borderSkipped: false,
          data: [12, 10, 0, 10],
          backgroundColor: colors[3],
        },
      ],
    },
    options: {
      responsive: true,
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
          ticks: {
            stepSize: 1,
            color: 'white',
          },
          min: 0,
          max: 12,
        },
        y: {
          ticks: {
            color: 'white',
          },
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
      <Header>Object storage</Header>
      <Bar>
        <canvas id='HBar'></canvas>
        <InfoList>
          {colors.map((color, i) => (
            <InfoContainer key={i}>
              <ColorDot color={colors[i]} />
              <Info>{texts[i]}</Info>
            </InfoContainer>
          ))}
        </InfoList>
      </Bar>
    </HBarContainer>
  )
}

export default HBar
