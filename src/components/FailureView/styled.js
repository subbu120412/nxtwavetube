import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`
export const FailureImg = styled.img`
  height: 275px;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
export const FailureDescription = styled.p`
  font-size: 16px;
  margin-top: 8px;
`
export const RetryButton = styled.button`
  color: #ffffff;
  border: none;
  background-color: #4f46e5;
  font-weight: 500;
  height: 35px;
  width: 85px;
  border-radius: 5px;
  margin-left: 12px;
  font-size: 16px;
  cursor: pointer;
`
