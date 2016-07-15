import $ from 'jquery'
import Controller from './controller'

export default class Router {

  constructor () {
    this.controller = new Controller()
  }

  listen () {
    $(() => {
      $(document).on('keydown', (event) => {
        this.controller.dance()
      })

      $('.project-title').on('click', (event) => {
        this.controller.getMoreInfo()
      })

      $('.play-button').on('click', (event) => {
        let vimeoID = event.target.attributes.rel.value
        this.controller.playButton(vimeoID)
      })

      $('#drawer-info').on('click', (event) => {
        this.controller.drawerInfoButton()
      })

      $('#drawer-credits').on('click', (event) => {
        this.controller.drawerCreditsButton()
      })

      $('.logo').hover(() => {
        this.controller.logoMenu()
      })

      $('.logo').on('click', (event) => {
        this.controller.menuPopup()
      })

      $('#popup-cv').on('click', (event) => {
        this.controller.popupCVButton()
      })

      $('#popup-contact').on('click', (event) => {


        this.controller.popupContactButton()
      })

      $('#popup-videos').on('click', (event) => {
        this.controller.popupVideosButton()
      })

      $('#popup-showreel').on('click', (event) => {
        this.controller.popupShowReelButton()
      })

      $('.thumb-title').on('mousedown', (event) => {
  
        this.controller.videoDetails(event)

      })


      $('.thumb').on('click', (event) => {
        let vimeoID = event.target.parentElement.attributes.rel.value

        this.controller.videoPlay(vimeoID)

      })




    })
  }
}

