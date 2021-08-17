import { Chart } from 'chart.js'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'

const RoundChartContainer = styled.div`
  padding: 10 10px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
`
const OverflowSpan = styled.span`
  position: absolute;
  left: 64px;
  top: 60px;
  width: 10px;
  color: white;
`

const data = [60, 10, 8, 6, 16]
const colors = [
  'rgb(209, 223, 16)',
  'rgb(8, 173, 54)',
  'rgb(173, 97, 8)',
  'rgb(150, 8, 173)',
  'rgb(142, 204, 42)',
]
const text = '500 TiB'
const id = 1
const CloudDonut = () => {
  const createDonut = useCallback(() => {
    const ctx = document.getElementById(`RoundChart-${id}`) as HTMLCanvasElement
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: data,
            backgroundColor: colors,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    })
  }, [])
  useEffect(() => {
    createDonut()
  }, [createDonut])

  return (
    <RoundChartContainer>
      <OverflowSpan>{text}</OverflowSpan>
      <canvas id={`RoundChart-${id}`}></canvas>
    </RoundChartContainer>
  )
}
export default CloudDonut
