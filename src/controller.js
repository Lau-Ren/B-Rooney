import Model from './model'
import View from './view'

export default class Controller {

  constructor () {
    this.model = new Model()
    this.view = new View()
  }

  dance () {
    console.log('Dancing in the controller! ~~~')

    this.model.getData()
    this.view.renderModel(this.model)
  }

  getMoreInfo () {
    this.view.revealDrawer()
  }

  playButton () {
    this.view.playVideo()

  }
  drawerInfoButton () {
    this.view.showDrawerInfo()

  }
  drawerCreditsButton () {
    this.view.showDrawerCredits()

  }

  logoMenu () {
    this.view.showMenu()

  }
  menuPopup () {
    this.view.showPopup()

  }

  popupAboutButton() {
    this.view.showPopupAbout()
  }


  popupCVButton() {
    this.view.showPopupCV()

  }
  popupVideosButton() {
    var videos = this.model.getVideos()
    
    this.view.showVideos(videos)

  }

  videoPlay() {
    console.log("video play in controller");
    this.view.playThumbs()
  }

 

}
