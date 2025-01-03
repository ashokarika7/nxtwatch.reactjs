import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const VideoDisplayItemLiContainer = styled.li`
  width: 32%;
  margin-bottom: 50px;
  @media screen and (max-width: 760px) {
    width: 49%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
  }
`

export const VideoDisplayItemImg = styled.img`
  width: 100%;
`

export const VideoDisplayItemProfileImgDetailsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: flex-start;
`

export const VideoDisplayItemProfileImg = styled.img`
  height: 35px;
  width: 39px;
  margin-right: 6px;
`

export const VideoDisplayItemDetailsContainer = styled.div`
  margin-top: 0px;
`

export const VideoDisplayItemTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.lightTheme ? '#f9f9f9' : '#231f20')};
  margin-bottom: 0px;
  margin-top: 0px;
`

export const VideoDisplayItemChannelName = styled.p`
  margin-top: 6px;
  color: ${props => (props.lightTheme ? '#94a3b8' : '#606060')};
  font-size: 13px;
  margin-bottom: 0px;
`

export const VideoDisplayItemViewsTimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  padding: 0px;
`

export const VideoDisplayItemViews = styled.p`
  margin: 0px;
  color: ${props => (props.lightTheme ? '#94a3b8' : '#606060')};
  font-size: 13px;
`
export const VideoDisplayItemTime = styled.p`
  margin: 0px;
  color: ${props => (props.lightTheme ? '#94a3b8' : '#606060')};
  font-size: 13px;
`

export const VideoDisplayItemViewsDot = styled.p`
  font-weight: bold;
  margin: 0px;
  color: ${props => (props.lightTheme ? '#94a3b8' : '#606060')};
  margin-left: 5px;
  margin-right: 5px;
  font-size: 13px;
  line-height: 1;
`
