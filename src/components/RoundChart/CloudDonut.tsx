import { Chart } from 'chart.js'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import {
  DonutContainer,
  Header,
  InfoList,
  InfoItem,
  ColorDot,
  Info,
  Donut,
} from './DonutStyles'

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
const texts = [
  'zComputeMainthis03...',
  'zComputeMain03',
  'zCompute',
  'zComputeMain03',
  'Main03',
]
const text = '500 TiB'
const id = 1
const CloudDonut = () => {
  const createDonut = useCallback(() => {
    const ctx = document.getElementById(`RoundChart-${id}`) as HTMLCanvasElement
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'zComputeMainthis03...',
          'zComputeMain03',
          'zCompute',
          'zComputeMain03',
          'Main03',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: data,
            backgroundColor: colors,
          },
        ],
      },
      options: {
        aspectRatio: 1,
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
    <DonutContainer>
      <Header>Capacity by cloud</Header>
      <InfoList>
        {colors.map((color, i) => (
          <InfoItem key={i}>
            <ColorDot color={colors[i]} />
            <Info>{texts[i]}</Info>
          </InfoItem>
        ))}
      </InfoList>
      <Donut>
        <OverflowSpan>{text}</OverflowSpan>
        <canvas id={`RoundChart-${id}`}></canvas>
      </Donut>
    </DonutContainer>
  )
}
export default CloudDonut
