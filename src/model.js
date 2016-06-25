import { videos }  from './videos.js'

export default class Model {

  getData () {
    console.log('Loading data in the model!')

    this.data = 'Yay!!'
  }

  getVideos () {

    return videos

  }
}
