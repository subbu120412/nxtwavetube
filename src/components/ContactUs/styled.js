import styled from 'styled-components'

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ContactUsTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 12px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
`
export const ContactUsDescription = styled.p`
  font-weight: 500;
`
