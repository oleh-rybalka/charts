import styled from 'styled-components'
import HBar from '../HBar'
import CloudDonut from '../RoundChart/CloudDonut'
import ComputeCloudsDonut from '../RoundChart/ComputeCloudsDonut'
import ComputeOrganisationDonut from '../RoundChart/ComputeOrganisationDonut'
import EBSCapDonut from '../RoundChart/EBSCapDonut'
import EBSVolDonut from '../RoundChart/EBSVolDonut'
import OCloudDonut from '../RoundChart/OCloudDonut'
import OOrganisationDonut from '../RoundChart/OOrganisationDonut'
import OrganisationDonut from '../RoundChart/OrganisationDonut'
import VMsDonut from '../RoundChart/VMsDonut'

const PanelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background: rgb(32, 41, 56);
  justify-content: center;

  flex-wrap: wrap;
  @media screen and (max-width: 1780px) {
    justify-content: flex-start;
    height: 100%;
  }
`
const PanelBar = () => {
  return (
    <PanelContainer>
      <CloudDonut />
      <OrganisationDonut />
      <OCloudDonut />
      <OOrganisationDonut />
      <HBar />
      <ComputeCloudsDonut />
      <ComputeOrganisationDonut />
      <VMsDonut />
      <EBSVolDonut />
      <EBSCapDonut />
    </PanelContainer>
  )
}

export default PanelBar
