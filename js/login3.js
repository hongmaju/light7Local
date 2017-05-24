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
    DrawLine: function() {

        $("#gesturepwd").GesturePasswd({
            backgroundColor: "#252736", //背景色
            color: "#FFFFFF", //主要的控件颜色
            roundRadii: 35, //大圆点的半径
            pointRadii: 6, //大圆点被选中时显示的圆心的半径
            space: 30, //大圆点之间的间隙
            width: 300, //整个组件的宽度
            height: 300, //整个组件的高度
            lineColor: "#00aec7", //用户划出线条的颜色
            zindex: 100 //整个组件的css z-index属性
        });
        $("#gesturepwd").on("hasPasswd", function(e, passwd) {
            var result;
            // alert(passwd);
            if (passwd == "1235789") {

                result = true;
            } else {
                result = false;
            }



            if (result == true) {
                $("#gesturepwd").trigger("passwdRight");
                setTimeout(function() {

                    //密码验证正确后的其他操作，打开新的页面等。。。
                    alert("密码正确！")
                }, 500); //延迟半秒以照顾视觉效果
            } else {
                $("#gesturepwd").trigger("passwdWrong");

                //密码验证错误后的其他操作。。。

            }
        });
    },

    Init: function() {
        login.DrawLine();
    }

};
