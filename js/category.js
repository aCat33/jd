window.onload = function(){

    var mySwiper = new Swiper('.left .swiper-container',{
    direction:'vertical',
    slidesPerView : 'auto',
    freeMode: true
    })

    var mySwiper = new Swiper('.right .swiper-container',{
        direction:'vertical',
        slidesPerView : 'auto',
        freeMode: true
        })

    var liList = document.querySelectorAll('.left .swiper-slide li');
    var swiperWrapper = document.querySelector('.swiper-wrapper'); 
    var swiperContainer = document.querySelector('.swiper-container');   

    for(var i = 0;i < liList.length; i++){
        liList[i].setAttribute('index',i);
    }

    for(var i = 0;i < liList.length; i++){
        liList[i].onclick = function(){
            
            for(var j = 0;j < liList.length;j++){
                liList[j].classList.remove('active');
            }

            this.classList.add('active');

            var liH = this.offsetHeight * this.getAttribute('index');

            var allLiH = this.offsetHeight * liList.length;

            var maxScroll = allLiH -swiperContainer.offsetHeight;

            liH = liH >= maxScroll ? maxScroll : liH;

            swiperWrapper.style.transition = ".3s linear";

            swiperWrapper.style.transform = 'translateY(-' + liH +'px)';

            return false;
        
        }
    }



}