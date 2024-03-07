export default class View {
  constructor({ onMemeImgChange }) {
    this.onMemeImgChange = onMemeImgChange;

    // DOM Elements
    this.selectMemeNameNode = document.getElementById(
      'js-select-meme-name__block'
    );
    this.selectMemeListNode = document.getElementById('js-meme-options');
    this.inputTopTextNode = document.getElementById('js-select-meme__text-top');
    this.inputBottomTextNode = document.getElementById(
      'js-select-meme__text-bottom'
    );
    this.memeImageBlockNode = document.getElementById('meme-bg-img');
    this.imgNodeContainer = document.getElementById('js-img-block');
    this.memeImageTopTextNode = document.getElementById('img-block__text-top');
    this.memeImageBottomTextNode = document.getElementById(
      'img-block__text-bottom'
    );
    this.btnMemeTest = document.getElementById('memesFromInput');
    this.memeTopTextColorNode = document.getElementById('js-text-color__top');
    this.memeBottomTextColorNode = document.getElementById(
      'js-text-color__bottom'
    );
    this.inputTopLengthValidationNode = document.querySelector(
      '.length-validation__top'
    );
    this.inputBottomLengthValidationNode = document.querySelector(
      '.length-validation__bottom'
    );

    // Event Listeners
    this.selectMemeListNode.addEventListener('change', e => {
      this.handleSelectClick(e);
    });

    this.inputTopTextNode.addEventListener('input', this.handleInputTextTop);

    this.inputBottomTextNode.addEventListener(
      'input',
      this.handleInputTextBottom
    );

    this.memeTopTextColorNode.addEventListener('change', e => {
      this.handleChangeColorTop(e);
    });

    this.memeBottomTextColorNode.addEventListener('change', e => {
      this.handleChangeColorBottom(e);
    });
  }

  renderMemeSelection(memesData) {
    memesData[0]?.data?.memes.forEach(meme => {
      const option = document.createElement('option');
      option.innerText = meme.name;
      option.value = meme.id;
      option.classList.add('meme-option');
      this.selectMemeListNode.appendChild(option);
    });
  }

  renderMemeImg(choosenMemeObject) {
    this.imgNodeContainer.innerHTML = `
        <img src="${choosenMemeObject.url}" id="meme-bg-img" class="img-block__bg-img" width: ${choosenMemeObject.width} height: ${choosenMemeObject.height}>
    `;
  }

  handleSelectClick(e) {
    const selectedMemeId = e.target.value;
    this.onMemeImgChange(selectedMemeId);
  }

  handleInputTextTop = () => {
    this.memeImageTopTextNode.innerText = this.inputTopTextNode.value;
    if (this.inputTopTextNode.value.length > 49) {
      this.inputTopLengthValidationNode.classList.add(
        'length-validation_active'
      );
      this.inputTopLengthValidationNode.innerText =
        'Максимальная длина текста 50 символов';
    } else {
      this.inputTopLengthValidationNode.classList.remove(
        'length-validation_active'
      );
      this.inputTopLengthValidationNode.innerText = '';
    }
  };

  handleInputTextBottom = () => {
    this.memeImageBottomTextNode.innerText = this.inputBottomTextNode.value;
    if (this.inputBottomTextNode.value.length > 49) {
      this.inputBottomLengthValidationNode.classList.add(
        'length-validation_active'
      );
      this.inputBottomLengthValidationNode.innerText =
        'Максимальная длина текста 50 символов';
    } else {
      this.inputBottomLengthValidationNode.classList.remove(
        'length-validation_active'
      );
      this.inputBottomLengthValidationNode.innerText = '';
    }
  };

  handleChangeColorTop(e) {
    const colorHexCode = e.target.value;
    this.memeImageTopTextNode.style.color = `${colorHexCode}`;
  }

  handleChangeColorBottom(e) {
    const colorHexCode = e.target.value;
    this.memeImageBottomTextNode.style.color = `${colorHexCode}`;
  }
}
