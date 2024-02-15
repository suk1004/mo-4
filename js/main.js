$(document).ready(function(){

  /* 헤더 메뉴 */
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".mo-header").slideToggle();
  });

  /* 푸터 아코디언 */
  $(".fTitle").click(function(){

    $(this).siblings(".fTitle").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".fContent").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  /* Like Button */
  $('.hitItem img:last-child').click(function(){
    let src = ($(this).attr('src') === 'image/heart.svg')
      ? 'image/heart-fill.png'
      : 'image/heart.svg';
    $(this).attr('src', src);
  });

  /* gallery scroll */
  $(window).scroll(function(){
    let pos = $(window).scrollTop();
    // console.log(pos);

    if(pos>290){
      $(".ctitle2").addClass('scroll');
    }else{
      $(".ctitle2").removeClass('scroll');
    };
    if(pos>690){
      $(".ctitle3").addClass('scroll');
    }else{
      $(".ctitle3").removeClass('scroll');
    };
    if(pos>1090){
      $(".ctitle4").addClass('scroll');
    }else{
      $(".ctitle4").removeClass('scroll');
    };
    if(pos>1490){
      $(".ctitle5").addClass('scroll');
    }else{
      $(".ctitle5").removeClass('scroll');
    };
    if(pos>1790){
      $(".ctitle6").addClass('scroll');
    }else{
      $(".ctitle6").removeClass('scroll');
    };
  });


  /* 상품페이지 모달 */
  $(".modal-product img:nth-child(odd), .modal-product>p").click(function(){
    $(".modal").fadeIn();
  });
  $(".modal").click(function(){
    $(".modal").fadeOut();
  })
});

/* 인기 검색어 클릭 이벤트 */
const changeColor = document.querySelector('.keyword');

  function select(ulEl, liEl) {
  Array.from(ulEl.children).forEach((v) => v.classList.remove('selected'));
  if (liEl) {
    const liParent = liEl.tagName === 'A' ? liEl.parentElement : liEl;
    liParent.classList.add('selected');
  }
}
  changeColor.addEventListener('click', (e) => {
  console.log(e.target);
  const selected = e.target;
  select(changeColor, selected);
});

