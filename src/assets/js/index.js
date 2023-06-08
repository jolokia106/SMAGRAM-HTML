$(function() {
    // sp メニュー開閉
    $(document).on('click','#openMenu',function(){
        $('.sidebar-area').toggleClass('menu-active');
    });

    // ページ上部へ戻るボタン
    // 押下時の処理
    $(document).on('click','.move-top',function(){
        window.scroll({top: 0, behavior: 'smooth'});
    });
    // 画面スクロール時の処理
    const move_top = document.querySelector('.move-top');
    window.addEventListener( 'scroll' , function(){
        if(window.pageYOffset > 1){
            move_top.style.opacity = '1';
        }else	if(window.pageYOffset < 100){
            move_top.style.opacity = '0';
        }
    });
	
  });