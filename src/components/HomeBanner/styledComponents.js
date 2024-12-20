import styled from 'styled-components'

export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  min-height: 200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const HomeBannerDetailsContainer = styled.div`
  padding: 0px;
  margin: 0px;
`

export const HomeBannerImg = styled.img`
  width: 150px;
  height: 40px;
  @media screen and (max-width: 280px) {
    width: 100%;
  }
`
export const HomeBannerText = styled.p`
  color: #181818;
  font-size: 18px;
  width: 300px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const HomeBannerTextBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: solid 1.5px #231f20;
  height: 35px;
  width: 100px;
  border-radius: 3px;
  background-color: transparent;
  @media screen and (max-width: 280px) {
    width: 100%;
  }
`
export const HomeBannerBtn = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border-width: 0px;
  font-size: 30px;
  color: #383838;
`
