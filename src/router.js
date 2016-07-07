import $ from 'jquery'
import Controller from './controller'

export default class Router {

  constructor () {
    this.controller = new Controller()
  }

  listen () {
    console.log('listening in the router')

    // this is where you put your event listeners
    // which call controller actions
    $(() => {
      $(document).on('keydown', (event) => {
        this.controller.dance()
      })

      $('.project-title').on('click', (event) => {
        this.controller.getMoreInfo()
      })

      $('.play-button').on('click', (event) => {
        this.controller.playButton()
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

      $('#popup-about').on('click', (event) => {
        this.controller.popupAboutButton()
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

      $('.thumb-title').on('mousedown', (event) => {
  
        this.controller.videoDetails(event)

      })


      $('.thumb').on('click', (event) => {
        this.controller.videoPlay()

      })




    })
  }
}

