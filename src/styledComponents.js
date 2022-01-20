import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #f1f5f9;
  width: 100vw;
  overflow-x: hidden;
`
export const ProjectsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin: auto;
`
export const SelectContainer = styled.div`
  width: 82vw;
  margin: auto;
`
export const CustomSelect = styled.select`
  color: #475569;
  background-color: #ffffff;
  font-family: 'Roboto';
  height: 40px;
  width: 300px;
  border: solid #cbd5e1 1px;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 30px;
  margin-bottom: 20px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding: 12px 14px 12px 14px;
`
export const LoaderContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureCard = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 400px;
  height: 400px;
`
export const FailureHeading = styled.h1`
  font-size: 32px;
`
export const FailureText = styled.p`
  font-size: 18px;
`

export const FailureButton = styled.button`
  width: 200px;
  height: 50px;
  color: #ffffff;
  background-color: #328af2;
  border: solid white 0px;
  border-radius: 6px;
`
