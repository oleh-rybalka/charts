import styled from "styled-components"

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 170px;
  height: 170px;
  padding: 5px 0;
  color: white;
`

export const ColorDot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  background: ${(props) => props.color};
  border-radius: 50%;
  margin-top: 3px;
  margin-right: 10px;
`
export const InfoList = styled.div`
border-right:2px solid rgb(56, 66, 83);
margin-right:2px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  padding: 10px 20px;
`
export const Header = styled.div`
  padding-left: 10px;
  width: 100%;
  background: rgb(54, 62, 76);
  height: 30px;
  color: white;
  font-size: 20px;
  border-right: 1px solid black;
  border-left: 1px solid black;
`
export const DonutContainer = styled.div`
  min-width: 360px;
  width: 30px;
  
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: wrap;
`
export const Donut = styled.div`
margin:0 4px;
  width: 150px;
  overflow: hidden;
  position: relative;
`
export const Info = styled.span``