import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  padding: 16px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : null)};
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 20px 4px #07070714;
  width: 100%;
  max-width: 425px;

  padding: 18px;
  border-radius: 8px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : null)};
  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding: 3%;
  }
`

export const LoginImage = styled.img`
  height: 40px;
  align-self: center;
  margin-bottom: 24px;
  margin-top: 16px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`
export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 12px;
  border: solid 1px #94a3b8;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#64748b')};
  background-color: transparent;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  margin-top: 8px;
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  align-items: center;
`

export const CheckBoxInput = styled.input`
  height: 18px;
  width: 18px;
  border: solid 1px #94a3b8;
  color: #64748b;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  margin-right: 12px;
`
export const CheckBoxLabel = styled(Label)`
  color: #1e293b;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 16px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-weight: 500;
`
