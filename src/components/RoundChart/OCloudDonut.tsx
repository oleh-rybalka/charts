import { Chart } from 'chart.js'
import { useCallback, useEffect } from 'react'
import styled from 'styled-components'

import {
  DonutContainer,
  InfoList,
  InfoItem,
  ColorDot,
  Info,
  Donut,
  Header,
} from './DonutStyles'

const OverflowSpan = styled.span`
  position: absolute;
  left: 53px;
  top: 55px;
  width: 10px;
  color: white;
`

const data = [20, 80]
const colors = ['rgb(209, 223, 16)', 'rgb(8, 173, 54)']
const text = '1,000 Billion'
const id = 4
const texts = ['zComputeMainthis03...', 'zComputeMain03']
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
      <Header>Objects by cloud</Header>
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
