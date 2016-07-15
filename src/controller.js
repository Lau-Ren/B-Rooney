import Model from './model'
import View from './view'

export default class Controller {

  constructor () {
    this.model = new Model()
    this.view = new View()
  }

  getMoreInfo () {
    this.view.revealDrawer()
  }

  playButton (id) {
    this.view.playVideo(id)

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

  popupCVButton() {
    this.view.showPopupCV()

  }
  popupContactButton() {
    this.view.showPopupContact()

  }
  popupVideosButton() {
    var videos = this.model.getVideos()

    this.view.showPopupVideos(videos)

  }

  popupShowReelButton() {
     this.view.showPopupShowReel()
  }
  videoPlay(id) {
    this.view.playThumbs(id)
  }

  videoDetails(event) {
    this.view.showThumbDetails(event)
  }



}
