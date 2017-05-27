$(document).ready(function() {
    setPwdLine.Init();

});


var setPwdLine = {
    //第一次设置的手势密码
    firstPwd: "",
    //手势密码开启状态
    openCloseStates: false,
    //初始化手势解锁
    linePwdLoad: function() {
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

            if (setPwdLine.openCloseStates) {
                if (setPwdLine.firstPwd == "") {
                    setPwdLine.firstPwd = passwd;
                    $("#gesturepwd").trigger("passwdRight");
                    $.toast("完成第一次，再设置一次");
                } else if (setPwdLine.firstPwd == passwd) {
                    $("#gesturepwd").trigger("passwdRight");
                    //写入数据库
                    $.toast("设置成功");
                } else {
                    $("#gesturepwd").trigger("passwdWrong");
                    $.toast("和第一次不同，请重试");
                }
            } else {
                $("#gesturepwd").trigger("passwdWrong");
                $.toast("手势解锁未开启，开启后重试");
            }




        });
    },
    //查询并更新启用/关闭的状态
    getOpenCloseLinePwdStates: function() {
        $("#rmbUser").attr('checked', true);　
        setPwdLine.openCloseStates = true;
    },
    //更新数据库中的手势密码
    updateLinePwd: function() {

    },
    //返回到主页
    iconLeftClick: function() {
        $(".icon-left").click(function() {
            alert("1212");
        });
    },
    Init: function() {
        setPwdLine.getOpenCloseLinePwdStates();
        setPwdLine.linePwdLoad();
        setPwdLine.iconLeftClick();
    }

};
