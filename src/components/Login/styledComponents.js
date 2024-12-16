import styled from 'styled-components'

export const LoginFullContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#212121' : '#f8fafc')};
  height: 100vh;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`
export const LoginCardContainer = styled.form`
  padding: 10px;
  width: 500px;
  background-color: ${props => (props.lightTheme ? '#0f0f0f' : '#f9f9f9')};
  box-shadow: 0px 4px 16px 0px ${props => (props.lightTheme ? '' : 'grey')};
  border-radius: 7px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginImg = styled.img`
  width: 30%;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    width: 50%;
  }
`
export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#7e858e')};
`

export const Input = styled.input`
  height: 35px;
  border: solid 1px #d7dfe9;
  border-radius: 3px;
  padding-left: 11px;
  outline: none;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#7e858e')};
  background-color: ${props => (props.lightTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const CheckBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 8px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const CheckInput = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
`

export const CheckLabel = styled.label`
  font-size: 14px;
  margin-left: 5px;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#7e858e')};
`
export const LoginButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  color: white;
  height: 35px;
  width: 80%;
  border-radius: 4px;
  border-width: 0px;
  margin-top: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const ErrorPara = styled.p`
  color: red;
  width: 80%;
  font-size: 13px;
  margin-top: 4px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
