import {
  ContactUsContainer,
  ContactUsTitle,
  SocialMediaContainer,
  SocialMediaImage,
  ContactUsDescription,
} from './styled'

const ContactUs = props => {
  const {isDarkTheme} = props
  return (
    <ContactUsContainer isDarkTheme={isDarkTheme}>
      <ContactUsTitle>CONTACT US</ContactUsTitle>
      <SocialMediaContainer>
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </SocialMediaContainer>
      <ContactUsDescription>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsDescription>
    </ContactUsContainer>
  )
}

export default ContactUs
