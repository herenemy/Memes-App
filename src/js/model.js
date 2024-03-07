export default class Model {
  constructor({ onMemeChange, onMemeImg }) {
    this.onMemeChange = onMemeChange;
    this.onMemeImg = onMemeImg;
    this.memes = [];
    this.memeID = 0;
    this.choosenMemeObject = null;
  }

  setData(memesData) {
    this.memes.push(memesData);

    this.onMemeChange(this.memes);
  }

  setMemeImg(id) {
    this.memeID = id;

    for (const meme of this.memes[0].data.memes) {
      if (this.memeID == meme.id) {
        this.choosenMemeObject = meme;
        break;
      }
    }

    this.onMemeImg(this.choosenMemeObject);
  }
}
