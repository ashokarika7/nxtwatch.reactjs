import {formatDistanceToNow} from 'date-fns'
import LightThemeContext from '../../context/LightThemeContext'

import {
  VideoDisplayItemLiContainer,
  VideoDisplayItemImg,
  VideoDisplayItemProfileImgDetailsContainer,
  VideoDisplayItemProfileImg,
  VideoDisplayItemDetailsContainer,
  VideoDisplayItemTitle,
  VideoDisplayItemChannelName,
  VideoDisplayItemViewsTimeContainer,
  VideoDisplayItemViews,
  VideoDisplayItemViewsDot,
  VideoDisplayItemTime,
  StyledLink,
} from './styledComponents'

const VideoDisplayItem = props => (
  <LightThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      const {videoDetails} = props
      const {
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        channel,
      } = videoDetails
      const {name, profileImageUrl} = channel
      const publishingTime = formatDistanceToNow(new Date(publishedAt), {
        addSuffix: true,
      })

      return (
        <VideoDisplayItemLiContainer>
          <StyledLink to={`/videos/${id}`}>
            <VideoDisplayItemImg alt=" video thumbnail" src={thumbnailUrl} />
            <VideoDisplayItemProfileImgDetailsContainer>
              <VideoDisplayItemProfileImg
                alt="channel logo"
                src={profileImageUrl}
              />
              <VideoDisplayItemDetailsContainer>
                <VideoDisplayItemTitle lightTheme={lightTheme}>
                  {title}
                </VideoDisplayItemTitle>
                <VideoDisplayItemChannelName lightTheme={lightTheme}>
                  {name}
                </VideoDisplayItemChannelName>
                <VideoDisplayItemViewsTimeContainer>
                  <VideoDisplayItemViews lightTheme={lightTheme}>
                    {viewCount} views
                  </VideoDisplayItemViews>
                  <VideoDisplayItemViewsDot lightTheme={lightTheme}>
                    .
                  </VideoDisplayItemViewsDot>
                  <VideoDisplayItemTime lightTheme={lightTheme}>
                    {publishingTime}
                  </VideoDisplayItemTime>
                </VideoDisplayItemViewsTimeContainer>
              </VideoDisplayItemDetailsContainer>
            </VideoDisplayItemProfileImgDetailsContainer>
          </StyledLink>
        </VideoDisplayItemLiContainer>
      )
    }}
  </LightThemeContext.Consumer>
)

export default VideoDisplayItem
