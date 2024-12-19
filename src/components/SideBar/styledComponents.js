import styled from 'styled-components'

export const SideBarTotalContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#231f20' : '#f8fafc')};
  width: 20%;
  height: 110vh;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  @media screen and (max-width: 760px) {
    display: none;
  }
`

export const SideBarIconRoutesContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 25px;
`
export const SideBarLiContainer = styled.li`
  display: flex;
  align-items: center;

  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  background-color: ${props => {
    if (props.checkPath) {
      if (props.lightTheme) {
        return '#909090'
      }
      return '#d7dfe9'
    }
    return 'inherit'
  }};
`
export const SideBarIconContainer = styled.div`
  margin: 0px;
  padding: 0px;

  font-size: 20px;
  color: ${props => {
    if (props.checkPath) {
      return '#ff0000'
    }
    if (props.lightTheme) {
      return '#e2e8f0'
    }
    return '#424242'
  }};
`

export const SideBarRouteName = styled.p`
  margin-left: 20px;

  color: ${props => (props.lightTheme ? '#e2e8f0' : '#424242')};
  font-weight: ${props => (props.checkPath ? 'bold' : 'inherit')};
`
export const SideBarContactUsContainer = styled.div`
  padding-left: 20px;
  @media screen and (max-width: 925px) {
    margin-right: 12px;
  }
`

export const SideBarContactUsTitle = styled.p`
  font-weight: bold;
  color: ${props => (props.lightTheme ? '#e2e8f0' : ' #181818')};
`

export const SideBarContactImgContainer = styled.div`
  max-width: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 925px) {
    width: 90%;
  }
`

export const SideBarContactImg = styled.img`
  height: 35px;
  width: 35px;
  @media screen and (max-width: 925px) {
    height: 30px;
    width: 30px;
  }
`
export const SideBarLastPara = styled.p`
  width: 80%;
  color: ${props => (props.lightTheme ? '#e2e8f0' : ' #181818')};
  @media screen and (max-width: 925px) {
    font-size: 15px;
  }
`
