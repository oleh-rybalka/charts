import styled from 'styled-components'
import HBar from '../HBar'
import CloudDonut from '../RoundChart/CloudDonut'
import OCloudDonut from '../RoundChart/OCloudDonut'
import OOrganisationDonut from '../RoundChart/OOrganisationDonut'
import OrganisationDonut from '../RoundChart/OrganisationDonut'

const PanelContainer = styled.div`
  display: flex;
  width: 100%;
  background: rgb(32, 41, 56);
  height: 200px;
  align-items: center;
  justify-content: space-around;
`
const PanelBar = () => {
  return (
    <PanelContainer>
      <CloudDonut />
      <OrganisationDonut />
      <OCloudDonut />
      <OOrganisationDonut />
      <HBar />
    </PanelContainer>
  )
}

export default PanelBar
