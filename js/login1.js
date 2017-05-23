$(document).ready(function() {

    // 弹出底部窗体
    $(document).on('click', '.open-about', function() {
        $.popup('.popup-about');
    });
    // 触发手势密码设置
    $('.open-about').trigger("click");

    login.Init();

});


var login = {
   
    Init:function(){
    	// login.DrawLine();
    }

};
