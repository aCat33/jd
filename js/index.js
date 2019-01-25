
// 轮播图设置
window.onload = function () {
   
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }

    })
}

//计时器
var time = 7200;
var spans = document.querySelectorAll('.seckill_downtime span:not(:nth-child(3n))');
// setDownTime();
function setDownTime(){
    if(time <= 0){
        time = 7200;
    }
    var hour = time / 3600;
    var min = time % 3600 / 60;
    var sec = time % 3600 % 60;
    spans[0].innerHTML = Math.floor(hour / 10);
    spans[1].innerHTML = Math.floor(hour % 10);
    spans[2].innerHTML = Math.floor(min / 10);
    spans[3].innerHTML = Math.floor(min % 10);
    spans[4].innerHTML = Math.floor(sec / 10);
    spans[5].innerHTML = Math.floor(sec % 10);
}

setInterval(function(){
    time --;
    setDownTime();    
},1000);


//顶部透明

function headerEffect(){
    // 获取轮播图的高度
    var sH = document.querySelector('.swiper-container').offsetHeight;

    // 获取头部块
    var header = document.querySelector('#header');

    // 解决用户随意刷新的问题,需要在触发屏幕滚动事件前获取到正确的透明度
    var scrollOut = document.documentElement.scrollTop + document.body.scrollTop;

    // 计算透明度
    var opacity = scrollOut / sH;

    header.style.backgroundColor = `rgba(233,35,34,${opacity})`;

    // 添加屏幕滚动事件
    window.onscroll = function(){

        // 解决兼容性问题 document.body.scrollTop 有兼容性,有些浏览器不支持,若不支持则返回0
        scrollOut = document.documentElement.scrollTop + document.body.scrollTop;

        // 计算透明度
        opacity = scrollOut / sH;

        if(opacity >= 1){
            opacity = 1
        };

        header.style.backgroundColor = `rgba(233,35,34,${opacity})`;
    }

}

headerEffect();

