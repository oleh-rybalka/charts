import { Chart } from 'chart.js'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'

const RoundChartContainer = styled.div`
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

const text = '500 TiB'
const id = 2
const data = [60, 10, 20]
const colors = ['rgb(8, 173, 54)', 'rgb(209, 223, 16)', 'rgb(30, 150, 252)']

const OrganisationDonut = () => {
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
export default OrganisationDonut
