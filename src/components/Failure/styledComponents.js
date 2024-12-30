import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`

export const FailureImg = styled.img`
  width: 50%;
`

export const FailureHeader = styled.h1`
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#212121')};
`
export const Failurepara = styled.p`
  color: ${props => (props.lightTheme ? '#cccccc' : '#475569')};
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
`
export const FailureBtn = styled.button`
  margin-top: 18px;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  background-color: #4f46e5;
  border-width: 0px;
  color: white;
  border-radius: 3px;
  width: 70px;
  height: 30px;
`
