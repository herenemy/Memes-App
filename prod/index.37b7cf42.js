class e{constructor({onMemeChange:e,onMemeImg:t}){this.onMemeChange=e,this.onMemeImg=t,this.memes=[],this.memeID=0,this.choosenMemeObject=null}setData(e){this.memes.push(e),this.onMemeChange(this.memes)}setMemeImg(e){for(let t of(this.memeID=e,this.memes[0].data.memes))if(this.memeID==t.id){this.choosenMemeObject=t;break}this.onMemeImg(this.choosenMemeObject)}}class t{constructor(){this.baseUrl="https://api.imgflip.com"}fetchMeme(){return fetch(`${this.baseUrl}/get_memes`).then(e=>e.json())}}class o{constructor({onMemeImgChange:e}){this.onMemeImgChange=e,this.selectMemeNameNode=document.getElementById("js-select-meme-name__block"),this.selectMemeListNode=document.getElementById("js-meme-options"),this.inputTopTextNode=document.getElementById("js-select-meme__text-top"),this.inputBottomTextNode=document.getElementById("js-select-meme__text-bottom"),this.memeImageBlockNode=document.getElementById("meme-bg-img"),this.imgNodeContainer=document.getElementById("js-img-block"),this.memeImageTopTextNode=document.getElementById("img-block__text-top"),this.memeImageBottomTextNode=document.getElementById("img-block__text-bottom"),this.btnMemeTest=document.getElementById("memesFromInput"),this.memeTopTextColorNode=document.getElementById("js-text-color__top"),this.memeBottomTextColorNode=document.getElementById("js-text-color__bottom"),this.inputTopLengthValidationNode=document.querySelector(".length-validation__top"),this.inputBottomLengthValidationNode=document.querySelector(".length-validation__bottom"),this.selectMemeListNode.addEventListener("change",e=>{this.handleSelectClick(e)}),this.inputTopTextNode.addEventListener("input",this.handleInputTextTop),this.inputBottomTextNode.addEventListener("input",this.handleInputTextBottom),this.memeTopTextColorNode.addEventListener("change",e=>{this.handleChangeColorTop(e)}),this.memeBottomTextColorNode.addEventListener("change",e=>{this.handleChangeColorBottom(e)})}renderMemeSelection(e){e[0]?.data?.memes.forEach(e=>{let t=document.createElement("option");t.innerText=e.name,t.value=e.id,t.classList.add("meme-option"),this.selectMemeListNode.appendChild(t)})}renderMemeImg(e){this.imgNodeContainer.innerHTML=`
        <img src="${e.url}" id="meme-bg-img" class="img-block__bg-img" width: ${e.width} height: ${e.height}>
    `}handleSelectClick(e){let t=e.target.value;this.onMemeImgChange(t)}handleInputTextTop=()=>{this.memeImageTopTextNode.innerText=this.inputTopTextNode.value,this.inputTopTextNode.value.length>49?(this.inputTopLengthValidationNode.classList.add("length-validation_active"),this.inputTopLengthValidationNode.innerText="Максимальная длина текста 50 символов"):(this.inputTopLengthValidationNode.classList.remove("length-validation_active"),this.inputTopLengthValidationNode.innerText="")};handleInputTextBottom=()=>{this.memeImageBottomTextNode.innerText=this.inputBottomTextNode.value,this.inputBottomTextNode.value.length>49?(this.inputBottomLengthValidationNode.classList.add("length-validation_active"),this.inputBottomLengthValidationNode.innerText="Максимальная длина текста 50 символов"):(this.inputBottomLengthValidationNode.classList.remove("length-validation_active"),this.inputBottomLengthValidationNode.innerText="")};handleChangeColorTop(e){let t=e.target.value;this.memeImageTopTextNode.style.color=`${t}`}handleChangeColorBottom(e){let t=e.target.value;this.memeImageBottomTextNode.style.color=`${t}`}}new class{constructor(){this.model=new e({onMemeChange:this.handleModelMeme,onMemeImg:this.handleModelMemeImg}),this.view=new o({onMemeImgChange:this.handleViewMeme}),this.api=new t}init(){this.api.fetchMeme().then(e=>{this.model.setData(e)}),this.view.imgNodeContainer.innerHTML=`
    <img src="https://i.imgflip.com/44eggm.png" id="meme-bg-img" class="img-block__bg-img" width: 460 height: 284>
`}handleModelMeme=e=>{this.view.renderMemeSelection(e)};handleModelMemeImg=e=>{this.view.renderMemeImg(e)};handleViewMeme=e=>{this.model.setMemeImg(e)}}().init();