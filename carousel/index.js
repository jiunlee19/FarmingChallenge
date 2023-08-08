
const img_slider = document.querySelector('.img_slider');
const img_wrap = img_slider.querySelector('.img_wrap');
    const slider = img_wrap.querySelector('.slider');
        const sliderLi = slider.querySelectorAll('li');
const controller = img_slider.querySelector('.controller');
    const prev_btn = controller.querySelector('.prev');
    const next_btn = controller.querySelector('.next');

        //맨 앞과 맨 뒤에 cloneNode 추가
        const copy1 = sliderLi[0].cloneNode(true);
        const copylast = sliderLi[sliderLi.length - 1].cloneNode(true);
        slider.insertBefore(copylast, sliderLi[0]);
        slider.appendChild(copy1);

        //slider 가로 넓이 구하기
        const sliderLiCopy = slider.querySelectorAll('li');
        const liWidth = sliderLi[0].clientWidth;
        const sliderwidth = liWidth * sliderLiCopy.length;
        slider.style.width = `${sliderwidth}px`;

var currentIdx = 1;
var automove = -(currentIdx*liWidth);
slider.style.transform = `translateX(${automove}px)`;
var timeSpeed = 300;

/*var moveSize = liWidth * -1;*/

//이미지 조정 (공통)
function move(MorP) { // MorP = Minus or Plus
    currentIdx += MorP; // MorP = -1:'prev', 1:'next'
    var moveSize = (-currentIdx * liWidth); //idx
    slider.style.transform = `translateX(${moveSize}px)`;
    slider.style.transition = `all ${timeSpeed}ms ease`;
}

//버튼으로 이미지 조정
prev_btn.addEventListener("click", (event)=> {
    event.preventDefault(); //연산 중 클릭(기본 동작) 방지
    move(-1);

    if(currentIdx < 1 ){
        setTimeout(()=> {
            slider.style.transition = `none`;
            currentIdx = sliderLi.length;
            var moveSize = (-currentIdx * liWidth);
            slider.style.transform = `translateX(${moveSize}px)`;
        }, timeSpeed);
    }
})

next_btn.addEventListener("click", (event)=> {
    event.preventDefault(); //연산 중 클릭(기본 동작) 방지
    move(1);

        if(currentIdx > sliderLi.length) {
            setTimeout(()=> {
                slider.style.transition = `none`;
                currentIdx = 1;
                var moveSize = (-currentIdx * liWidth);
                slider.style.transform = `translateX(${moveSize}px)`;
            }, timeSpeed);
        }
})

//자동으로 이미지 조정
function autochng() {
    setInterval(()=> {
        move(1);

        if(currentIdx > sliderLi.length) {
            setTimeout(()=> {
                slider.style.transition = `none`;
                currentIdx = 1;
                var moveSize = (-currentIdx * liWidth);
                slider.style.transform = `translateX(${moveSize}px)`;
            }, timeSpeed);
        }
    }, 5000);
}

autochng();

