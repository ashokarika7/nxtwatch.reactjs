import Loader from 'react-loader-spinner'

import {LoaderContainerEl} from './styledComponents'

const LoaderComponent = () => (
  <LoaderContainerEl className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" width="50" height="50" color="grey" />
  </LoaderContainerEl>
)

export default LoaderComponent
