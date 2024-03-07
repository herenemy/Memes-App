import Model from './model.js';
import API from './api.js';
import View from './view.js';

export default class Controller {
  constructor() {
    this.model = new Model({
      onMemeChange: this.handleModelMeme,
      onMemeImg: this.handleModelMemeImg,
    });
    this.view = new View({
      onMemeImgChange: this.handleViewMeme,
    });
    this.api = new API();
  }

  init() {
    this.api.fetchMeme().then(memeData => {
      this.model.setData(memeData);
    });

    this.view.imgNodeContainer.innerHTML = `
    <img src="https://i.imgflip.com/44eggm.png" id="meme-bg-img" class="img-block__bg-img" width: 460 height: 284>
`;
  }

  handleModelMeme = memesData => {
    this.view.renderMemeSelection(memesData);
  };

  handleModelMemeImg = choosenMemeObject => {
    this.view.renderMemeImg(choosenMemeObject);
  };

  handleViewMeme = memeId => {
    this.model.setMemeImg(memeId);
  };
}
