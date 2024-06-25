let crossBtn = document.querySelector('.cross-btn');
let searchBtn = document.querySelector('.search_btn');
let searchBox = document.querySelector('.search-box');
let inputTest = document.querySelector('.input-test');

searchBox.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('active_search')){
        searchBox.classList.remove('active_search');
    }
});

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchBox.classList.add('active_search');
    if(searchBox.classList.contains('active_search')){
        inputTest.classList.add('active_input');
        }else{
        inputTest.classList.remove('active_input');
        }
        });
        
        crossBtn.addEventListener('click', function(e){
            e.preventDefault();
            searchBox.classList.remove('active_search');
            inputTest.classList.remove('active_input');
    
});

$(function(){
    // $('.bannerSlider').slick({
    //     arrows:false,
    //     dots:true,
    //     dotsClass:'bannerDots container',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // })
    // $('.smallBannerSlider').slick({
    //     arrows:false,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // })

    $('.main_slider').slick({
        arrows:false,
        dots:true,
        dotsClass:'bannerDots container',
        autoplay: true,
        autoplaySpeed: 1800,
    });
})


