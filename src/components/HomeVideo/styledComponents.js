import styled from 'styled-components'

export const HomeVideoTotalContainer = styled.div`
  min-height: 100vh;
  width: 80%;
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
    width: 100%;
    margin: 10px;
  }
`

export const SearchInpEl = styled.input`
  outline: none;
  width: 85%;
  height: 35px;
  padding: 0px;
  padding-left: 10px;
  border: solid 1px #909090;
  border-right: none;
  color: #606060;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`

export const SearchBtn = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #cccccc;
  border: solid 1px #909090;
  border-left: none;
  height: 35px;
  width: 15%;
`

// export const SearchBarContainer = styled.div``
// export const SearchBarContainer = styled.div``
