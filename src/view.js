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
      
        // $('#popup-about__content').show()
        $('#popup-cv__content').hide()
        $('#popup-contact__content').hide()
        $('.close').click(function(){
          $('.popup').fadeOut();
          $('.logo').fadeTo(200,1)
          // $('#popup-about__content').hide()
          $('#popup-cv__content').hide()
          $('#popup-contact__content').hide()
          $('#popup-cv').css({"border-bottom": "none"})
          // $('#popup-about').css({"border-bottom": "none"})
          $('#popup-contact').css({"border-bottom": "none"})
        })
      })
  }

  // showPopupAbout() {
  //   console.log("trying to show ABOUT info in the view")

  //   $('#popup-about__content').show()
  //   $('#popup-about').css({"border-bottom":"solid"})

  //   $('#popup-cv__content').hide()
  //   $('#popup-contact__content').hide()
  //   $('#popup-cv').css({"border-bottom":"none"})
  //   $('#popup-contact').css({"border-bottom":"none"})

  // }

  showPopupCV() {
        console.log("trying to show CV in the view")

    $('#popup-cv__content').show()
    $('#popup-cv').css({"border-bottom":"solid"})


    // $('#popup-about__content').hide()
    $('#popup-contact__content').hide()
    // $('#popup-about').css({"border-bottom":"none"})
    $('#popup-contact').css({"border-bottom":"none"})
  }

  showPopupContact() {
    console.log("trying to show contact info in the view")
    $('#popup-contact__content').show()
    $('#popup-contact').css({"border-bottom":"solid"})


    // $('#popup-about__content').hide()
    $('#popup-cv__content').hide()
    $('#popup-cv').css({"border-bottom":"none"})
    // $('#popup-about').css({"border-bottom":"none"})
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

    //   var videoContainer = $("<div/>", {
    //     "class": "video-container"
    //   })

    //   var videoThumb = $("<div/>", {
    //     "class": "thumb",
    //     "rel": video.vimeo
    //   })

    //   var img = $("<img/>", {
    //     "class": "thumb-img",
    //     "src": video.stills[0]
        
    //   })

    //   var details = $("<div/>", {
    //     "class": "thumb-details"
      
    //   })

    //   var title = $("<h2/>", {
    //     "class": "thumb-title",
    //     "text": video.title
      
    //   })
    //    var info = $("<p/>", {
    //     "class": "thumb-info",
    //     "text": video.info
      
    //   })
    //    var credits = $("<p/>", {
    //     "class": "thumb-credits",
    //     "text": video.credits
       
    //    })


    //   $(videoContainer).append(videoThumb)
    //   $(videoThumb).append(img)
   
    //   $(videoContainer).append(details)
    //   $(details).append(title)
    //   $(details).append(info)
    //   $(details).append(credits)

    //   $('.thumb-container').append(videoContainer)
    // })


   

  }

  playThumbs () {
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
  showThumbDetails(event){

  $(event.target.nextElementSibling).toggle()

 

  }


}


