import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styled'

const FailureView = props => {
  const {isDarkTheme, retry} = props
  const failureImg = !isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
  return (
    <FailureContainer isDarkTheme={isDarkTheme}>
      <FailureImg src={failureImg} alt="failure view" />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton onClick={retry} type="button">
        Retry
      </RetryButton>
    </FailureContainer>
  )
}

export default FailureView
