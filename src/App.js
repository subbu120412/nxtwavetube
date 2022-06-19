import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import ThemeContext from './context/ThemeContext'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  saveOrDeleteVideo = videoDetails => {
    const {savedVideosList} = this.state
    const isAlreadyExisted = savedVideosList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (isAlreadyExisted === undefined) {
      this.setState({
        savedVideosList: [...savedVideosList, videoDetails],
      })
    } else {
      this.setState({
        savedVideosList: savedVideosList.filter(
          eachVideo => eachVideo.id !== videoDetails.id,
        ),
      })
    }
  }

  updateTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          updateTheme: this.updateTheme,
          savedVideosList,
          saveOrDeleteVideo: this.saveOrDeleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
