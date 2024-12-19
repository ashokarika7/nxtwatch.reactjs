import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 10px;
  background-color: ${props => (props.lightTheme ? '#231f20' : '#f8fafc')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  height: 80px;
  @media screen and (max-width: 760px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const NavImg = styled.img`
  width: 150px;
  height: 34px;
  @media screen and (max-width: 760px) {
    width: 100px;
    height: 30px;
  }
`
export const NavOptionsContainer = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    display: none;
  }
`
export const NavIconsBtn = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0px;
  background-color: transparent;
  padding: 0px;
  font-size: 40px;
  display: flex;
  align-items: center;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '')};
  @media screen and (max-width: 760px) {
    font-size: 30px;
  }
`

export const NavProfileImg = styled.img`
  height: 40px;
  width: 40px;
`

export const LogoutBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: solid 1.5px ${props => (props.lightTheme ? '#f9f9f9' : '#3b82f6')};
  border-radius: 3px;
  background-color: transparent;
  height: 35px;
  width: 80px;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#3b82f6')};
  font-weight: bold;
`
export const NavMobileOptionsContainer = styled.div`
  display: flex;
  min-width: 100px;
  width: 110px;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 760px) {
    display: none;
  }
`
