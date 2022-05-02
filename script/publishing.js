$(function(){

    //1.첫번째 탭메뉴에 서식 추가적용하기
    $('#tab_con ul li:first-child a').addClass('t_on');
    //2.첫번째 탭메뉴에 콘텐츠 내용보이게하기
    $('#tab_con .c01').css('display','block');

    //3.
    const tab_mnu = $('#tab_con ul li a');
    tab_mnu.click(function(){
      //1.
      //$('#tab_con a').removeClass('t_con');
      //$(this).addClass('t_on');
      
      //2.
      $(this).addClass('t_on').parent().siblings().find('a').removeClass('t_on');
      //1.
      //$('#tab_con ul .con').hide();//
      //$(this).next().show();//
      
      //2.
      $(this).next().show().parent().siblings().find('.con').hide();

      return false;//
    });
  });

