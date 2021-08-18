import styled from 'styled-components'
import PanelBar from './components/Panel'

const AppContainer = styled.div`
  width: 100%;

  background: rgb(32, 41, 56);
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <PanelBar />
    </AppContainer>
  )
}
export default App
