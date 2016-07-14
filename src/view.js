import $ from 'jquery'

export default class View {
  revealDrawer () {
      $('.project-credits').hide()
      $('.project-info').hide()

    $('.drawer-index').toggle()
  }

  playVideo () {
    $('.play-button').each(function(){
      $(this).click(function(){
        var vimeoID = $(this).attr('rel')
        if($(window).width()<700) {
          window.location = 'http://player.vimeo.com/video/'+vimeoID
        } else {
          $('.vimeo').html('<div class="close"></div><iframe style="visibility:hidden;" onload="this.style.visibility = \'visible\'; $(\'.logo\').fadeTo(200,0);" src="http://player.vimeo.com/video/'+vimeoID+'?autoplay=1" width="960" height="541" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
              .fadeIn(function(){
                $('.vimeo iframe').show()
                $('.close').click(function(){
                  $('.vimeo').fadeOut().empty();
                  $('.logo').fadeTo(200,1)
                })
               })
        }

      })
    })

  }

  showDrawerInfo () {
    $('.project-info').toggle()
    $('.project-credits').hide()
  }

  showDrawerCredits () {

    $('.project-credits').toggle()
    $('.project-info').hide()
  }

  showMenu () {
    $('.menu-drawer').toggle()
  }

   showPopup () {

    $('.popup').fadeIn(function(){
      $(this).css({ "display": "flex", "justify-content": "center" })
        $('.popup popup-contents').show()

        $('#popup-videos__content').show()
        $('#popup-videos').css({"border-bottom":"solid"})

        $('#popup-cv__content').hide()
        $('#popup-showreel__content').hide()
        $('#popup-contact__content').hide()

        $('.close').click(function(){
          $('.popup').fadeOut();
          $('.logo').fadeTo(200,1)
          $('#popup-cv__content').hide()
          $('#popup-contact__content').hide()
          $('#popup-showreel__content').hide()
          $('#popup-cv').css({"border-bottom": "none"})
          $('#popup-showreel').css({"border-bottom": "none"})
          $('#popup-contact').css({"border-bottom": "none"})
        })
      })
  }



  showPopupCV() {
    $('#popup-cv__content').show()
    $('#popup-cv').css({"border-bottom":"solid"})

    $('#popup-showreel__content').hide()
    $('#popup-contact__content').hide()
    $('#popup-videos__content').hide()

    $('#popup-contact').css({"border-bottom":"none"})
    $('#popup-showreel').css({"border-bottom":"none"})
    $('#popup-videos').css({"border-bottom":"none"})
  }

  showPopupContact() {
    $('#popup-contact__content').show()
    $('#popup-contact').css({"border-bottom":"solid"})

    $('#popup-cv__content').hide()
    $('#popup-showreel__content').hide()
    $('#popup-videos__content').hide()

    $('#popup-showreel').css({"border-bottom":"none"})
    $('#popup-cv').css({"border-bottom":"none"})
    $('#popup-videos').css({"border-bottom":"none"})
  }

  showPopupShowReel() {
    $('#popup-showreel__content').show()
    $('#popup-showreel').css({"border-bottom":"solid"})

    $('#popup-cv__content').hide()
    $('#popup-contact__content').hide()
    $('#popup-videos__content').hide()

    $('#popup-contact').css({"border-bottom":"none"})
    $('#popup-cv').css({"border-bottom":"none"})
    $('#popup-videos').css({"border-bottom":"none"})
  }

  showPopupVideos(videosArr) {
    $('#popup-videos__content').show()
    $('#popup-videos').css({"border-bottom":"solid"})

    $('#popup-cv__content').hide()
    $('#popup-contact__content').hide()
    $('#popup-showreel__content').hide()

    $('#popup-contact').css({"border-bottom":"none"})
    $('#popup-cv').css({"border-bottom":"none"})
    $('#popup-showreel').css({"border-bottom":"none"})

  }

  playThumbs () {
    $('.thumb').each(function(){
      $(this).click(function(){
        var vimeoID = $(this).attr('rel')
        if($(window).width()<700) {
          window.location = 'http://player.vimeo.com/video/'+vimeoID
        } else {
          $('.vimeo').empty();
          $('.vimeo').html('<div class="close"></div><iframe onload="this.style.visibility = \'visible\'; $(\'.popup\').fadeTo(200,0); $(\'.logo\').fadeTo(200,0);" src="http://player.vimeo.com/video/'+vimeoID+'?autoplay=1" width="960" height="541" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
              .fadeIn(function(){
                $('.vimeo iframe').show()
                $('.close').click(function(){
                  $('.vimeo').fadeOut().empty();
                  $('.logo').fadeTo(200,1)
                  $('.popup').fadeTo(200,1)
                  $('.popup').show()
              })
          })
        }
      })
    })
  }
showThumbDetails(event){
  $(event.target.nextElementSibling).toggle()
}


}


