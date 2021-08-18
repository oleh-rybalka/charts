import { Chart } from 'chart.js'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import {
  DonutContainer,
  Header,
  InfoList,
  InfoItem,
  ColorDot,
  Donut,
} from './DonutStyles'

const OverflowSpan = styled.span`
  position: absolute;
  left: 65px;
  top: 65px;
  width: 10px;
  color: white;
`

const Info = styled.span``
const data = [60, 20, 20]
const colors = ['rgb(209, 223, 16)', 'rgb(8, 173, 54)', 'rgb(30, 150, 252)']
const texts = [
  'zComputeMainthis03...',
  'zComputeMain03',
  'zCompute',
  'zComputeMain03',
  'Main03',
]
const text = '60'
const id = 9
const EBSVolDonut = () => {
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
      <Header>EBS volumes by organisation</Header>
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
export default EBSVolDonut
