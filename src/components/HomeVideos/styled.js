import styled from 'styled-components'

export const HomeVideosContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9 ')};
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    padding: 3%;
  }
`
export const SearchInputContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding-left: 12px;
  font-size: 18px;
  flex-grow: 1;
  height: 100%;
  background-color: transparent;
  border: 1px solid #7e858e;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#212121')};
`
export const SearchButton = styled.button`
  width: 90px;
  background-color: transparent;
  border: 1px solid #909090;
  height: 100%;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#212121')};
  font-size: 20px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
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
export const VideosList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
