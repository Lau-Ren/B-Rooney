import $ from 'jquery'

export default class View {
  renderModel (model) {
    console.log('The data from the model is: ' + model.data)
  }

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
        $('.close').click(function(){
          $('.popup').fadeOut();
          $('.logo').fadeTo(200,1)
        })
      })
  }

  showPopupAbout() {
    $('#popup-about__content').toggle()

    $('#popup-cv__content').toggle()

  }

  showPopupCV() {
    $('#popup-cv__content').toggle()

    $('#popup-about__content').toggle()
  }

  showVideos(videosArr) {

    $('.home-view').hide()
    $('.popup').fadeOut();
    $('.logo').fadeTo(200,1)

    // $('.thumb-container').empty()

    $('.video-view').show()

      $('.close').click(function(){
        $('.video-view').fadeOut()
        $('.home-view').fadeTo(200,1)
        $('.home-view').show()
        $('.video-view').hide()
    })

    // videosArr.forEach((video) => {

      // var videoContainer = $("<div/>", {
      //   "class": "video-container"
      // })

      // var videoThumb = $("<div/>", {
      //   "class": "thumb"
      // })

      // var img = $("<img/>", {
      //   "class": "thumb-img",
      //   "src": video.stills[0],
      //   "rel": video.vimeo
      // })

      // var playButton = $("<img/>", {
      //   "class": "play-button",
      //   "src":"./images/play.svg",
      //
      // })


      // $(videoContainer).append(videoThumb)
      // $(videoThumb).append(img)
      // $(videoThumb).append(playButton)


      // $('.thumb-container').append(videoContainer)
    // })


  }

  playThumbs () {
    console.log("play thumbs in view");

    $('.thumb').each(function(){
      $(this).click(function(){
        var vimeoID = $(this).attr('rel')
        if($(window).width()<700) {
          window.location = 'http://player.vimeo.com/video/'+vimeoID
        } else {
          $('.vimeo').empty();
          $('.vimeo').html('<div class="close"></div><iframe onload="this.style.visibility = \'visible\'; $(\'.video-view\').fadeTo(200,0); $(\'.logo\').fadeTo(200,0);" src="http://player.vimeo.com/video/'+vimeoID+'?autoplay=1" width="960" height="541" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
              .fadeIn(function(){
                $('.vimeo iframe').show()
                $('.close').click(function(){
                  $('.vimeo').fadeOut().empty();
                  $('.logo').fadeTo(200,1)
                  $('.video-view').fadeTo(200,1)
                  $('.video-view').show()
              })
          })

        }

      })


    })

  }


}


