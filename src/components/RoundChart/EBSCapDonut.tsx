import { Chart } from 'chart.js'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import {
  ColorDot,
  Donut,
  DonutContainer,
  Header,
  Info,
  InfoItem,
  InfoList,
} from './DonutStyles'

const OverflowSpan = styled.span`
  position: absolute;
  left: 63px;
  top: 65px;
  width: 10px;
  color: white;
`

const data = [70, 30]
const colors = ['rgb(8, 173, 54)', 'rgb(209, 223, 16)']
const texts = [
  'zComputeMainthis03...',
  'zComputeMain03',
  'zCompute',
  'zComputeMain03',
  'Main03',
]
const text = '100 TiB'
const id = 10
const EBSCapDonut = () => {
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
      <Header>EBS capacity by organisation</Header>
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
export default EBSCapDonut
