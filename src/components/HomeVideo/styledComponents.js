import styled from 'styled-components'

export const HomeVideoTotalContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  overflow: auto;
  background-color: ${props => (props.lightTheme ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`
export const SearchBarContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  display: flex;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 760px) {
    width: 98%;
    margin: 10px;
  }
`

export const SearchInpEl = styled.input`
  outline: none;
  width: 85%;
  height: 35px;
  padding: 0px;
  padding-left: 10px;
  border: solid 1px;
  border-color: ${props => (props.lightTheme ? '#424242' : '#cccccc')};
  border-right: none;
  color: #606060;
  background-color: transparent;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`

export const SearchBtn = styled.button`
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.lightTheme ? ' #383838' : '#cccccc')};
  border: solid 1px;
  border-color: ${props => (props.lightTheme ? '#424242' : '#cccccc')};
  border-left: none;
  height: 35px;
  width: 15%;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`

export const NoSearchResultsImg = styled.img`
  width: 50%;
`

export const NoSearchResultsHeader = styled.h1`
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#212121')};
`
export const NoSearchResultsPara = styled.p`
  color: ${props => (props.lightTheme ? '#cccccc' : '#475569')};
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
`
export const NoSearchResultsBtn = styled.button`
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

export const HomeVideoSuccessContainer = styled.div``
// export const SearchBarContainer = styled.div``
