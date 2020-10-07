window.onload = () => {
    autoSlide = setInterval(function(){
        promotionNext();
        recommendNext();
    }, 5000);
}

function stopSlide() {
    clearInterval(autoSlide);
}

let currentPromotionPosition = 0;

function promotionNext() {
    let newPosition = currentPromotionPosition + 1;

    if(newPosition > 2) {
        newPosition = 0;
    }
    movePromotionSlide(newPosition);

    clearInterval(autoSlide);
    autoSlide = setInterval(function(){
        promotionNext();
    }, 5000);
}

function promotionPrev() {
    let newPosition = currentPromotionPosition - 1;

    if(newPosition < 0) {
        newPosition = 2;
    }
    movePromotionSlide(newPosition);


    clearInterval(autoSlide);
    autoSlide = setInterval(function(){
        promotionNext();
    }, 5000);
}

function onPromotionTitleClick(index) {
    movePromotionSlide(index);
}

function movePromotionSlide(index) {
    // 슬라이드 움직이는 함수
    const promotionSlide=document.getElementById('promotion_wrapper');
    promotionSlide.style=`transform: translateX(-${100 * (index)}vw)`;
    selectPromotionTitle(index);
    currentPromotionPosition = index;
}

function selectPromotionTitle(index) {
    // 프로모션 타이틀 select 표시
    const currPromotionTitle = document.getElementById('promotion-title');

    currPromotionTitle.children[currentPromotionPosition].classList.remove('selected');
    currPromotionTitle.children[index].classList.add('selected');
}

let currentRecommendPosition = 1;
function recommendPrev() {
    currentRecommendPosition -=1;

    if(currentRecommendPosition < 1) {
        currentRecommendPosition = 4;
    }
    moveRecommendSlide(currentRecommendPosition);

    clearInterval(autoSlide);
    autoSlide = setInterval(function(){
        recommendNext();
    }, 5000);
}

function recommendNext() {
    currentRecommendPosition += 1;

    if(currentRecommendPosition > 4) {
        currentRecommendPosition = 1;
    }
    moveRecommendSlide(currentRecommendPosition);

    clearInterval(autoSlide);
    autoSlide = setInterval(function(){
        clearInterval();
    }, 5000);
}

function moveRecommendSlide(position) {
    const recommendSlide=document.getElementById('recommend_wrapper');
    recommendSlide.style=`margin-left: -${100 * (position-1)}vw`;
}

let currentTipIndex = 0;
function onTipsTitleClick(index) {
    console.log(index);
    console.log(document.getElementById('tips_desc').children);
    const parent = document.getElementById('tips_desc');
    
    parent.children[currentTipIndex].classList.remove('selected');
    parent.children[index].classList.add('selected');

    const tipTitle = document.getElementById('tips_title');
    tipTitle.children[currentTipIndex].classList.remove('selected');
    tipTitle.children[index].classList.add('selected');

    const tipMore = document.getElementById('tips_more');
    tipMore.children[currentTipIndex].classList.remove('selected');
    tipMore.children[index].classList.add('selected');

    currentTipIndex = index;
}
