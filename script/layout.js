
$(function(){
  // 저작권 팝업창
  $('#notice a').click(function(){
    $('#notice').fadeOut();
    return false;
  }); 

  $('.title > h1').css({
    'opacity':'0',
    'left':'-1000px'
  }).animate({'opacity':'1','left':'0px'},500, 'easeOutQuint');

  $('.title p').css({
    'right':'-100%',
    'opacity':'0'
  }).delay(100).animate({'opacity':'1','right':'0px'},500, 'easeOutQuint');

  $('.title .photo').css('opacity','0').delay(300).animate(
  {'opacity':'1','right':'0px'},500,);


  //1. 내비게이션이 상단으로 떨어진 값을 변수에 저장한다.
  const nav_Offset = $('.gnb').offset().top;
  console.log(nav_Offset); //880

  $(window).scroll(function(){ //화면을 스크롤동작하면 아래내용을 실행

    let sPos = $(this).scrollTop(); //현재 세로스크롤값을 변수에 담는다.

    console.log(sPos);

    //스크롤값이 880이상일때 프로필 페이지 4개 박스가 서서히 올라오면서 나타난다.
    if(sPos>=880){
      $('.photo01').animate({'top':'220px',
      'opacity':'1'},500);

      $('.info01').animate({'top':'220px'
      ,'opacity':'1'},500);

      $('.info02').delay(300).animate(
      {'top':'550px','opacity':'1'},500);

      $('.info03').delay(300).animate(
      {'top':'550px','opacity':'1'},500);

        
    }

    if(nav_Offset<=sPos){//만약에 내비높이가 스크롤값보다 작거나 같으면
      $('.gnb').addClass('act'); //서식을 적용하여 고정하고
    }else{ //그렇지 않으면
      $('.gnb').removeClass('act'); //다시 서식을 제거하여 아래로 내려가게 한다.
    }

    //스크롤 동작시 각각 해당 아티클이 보일때 메뉴에 on서식 적용하기

    //1. if문을 사용하여 해당 스크롤 높이를 체크하여 서식적용하기
    // if(sPos>=300&&sPos<=1150){
    //   $('.gnb li').eq(0).find('a').addClass('on');
    // }else if(sPos>=1300&&sPos<=1900){
    //   $('.gnb li').eq(1).find('a').addClass('on');
    // }else if(sPos>=2100&&sPos<=3000){
    //   $('.gnb li').eq(2).find('a').addClass('on');
    // }else if(sPos>=3100&&sPos<=3900){
    //   $('.gnb li').eq(3).find('a').addClass('on');
    // }else if(sPos>=4000&&sPos<=4800){
    //   $('.gnb li').eq(4).find('a').addClass('on');
    // }else{
    //   $('.gnb li').find('a').removeClass('on');
    // }

    $('.gnb li a').removeClass('on'); //기존에 메뉴에 적용된 서식이 있다면 on 제거하라.

    //2번째 방법. 만약에 아티클의 높이값이 세로스크롤 값 영역과 비교하여 해당 메뉴에 서식 on적용하기
    $('section article').each(function(i){   //each 각각의 기능을 넣는다.
      let top = $(this).offset().top-400;// 내가 선택한 article의 위치를 각각 변수에 대입한다.
      
      if(sPos>=top){
        $('.gnb li a').removeClass('on');  //모든 메뉴에 on클래스 서식을 제거하고
        $('.gnb li').eq(i).find('a').addClass('on'); //해당하는 메뉴에 on클래스 서식을 적용한다.
      }
    });
  });

  //내비게이션 클릭시 해당 콘텐츠 위로 올라오게 하기
  const gnb = $('.gnb  ul > li');
  gnb.click(function(){
    let n = $(this).index();
    console.log(n);

    $('html, body').stop().animate({scrollTop:$('section article').eq(n).offset().top},500,'easeOutQuint');
    return false;
  });

});