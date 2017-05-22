//初始化页面时验证是否记住了密码
$(document).ready(function() {
    //alert($.cookie("rmbUser"));
    var b = $.cookie("rmbUser");
    if ($.cookie("rmbUser") == "true") {
        $("#rmbUser").attr("checked", true);
        $("#wsc-username").val($.cookie("userName"));
        $("#wsc-password").val($.cookie("passWord"));
    } else {
        //alert("没有存储密码");
        var a = "";
    }
});

function saveUserInfo() {
    //alert("保存密码");
    // 	var swith=$("#rmbUser").attr("checked");
    // var tt=$("#wsc-username").val();
    // var bb=$("#wsc-password").val();

    if ($("#rmbUser").attr("checked") == "checked") {
    	var cookqqq=$.cookie("rmbUser") +$.cookie("userName")+$.cookie("passWord");
        var userName = $("#wsc-username").val();
        var passWord = $("#wsc-password").val();
        if ($.cookie("rmbUser") ==undefined) {
            $.cookie('rmbUser', 'true', { expires: 7, path: '/', domain: 'jquery.com', secure: true }); //新建一个cookie 包括有
        } 
        if ($.cookie("userName") == undefined) {
            $.cookie('userName', userName, { expires: 7, path: '/', domain: 'jquery.com', secure: true }); //新建一个cookie 包括有
        } 
        if ($.cookie("passWord") == undefined) {
            $.cookie('passWord', passWord, { expires: 7, path: '/', domain: 'jquery.com', secure: true }); //新建一个cookie 包括有
        }

        // $.cookie("rmbUser", "true", { expires: 7 }); // 存储一个带7天期限的 cookie
        // $.cookie("userName", userName, { expires: 7 }); // 存储一个带7天期限的 cookie
        // $.cookie("passWord", passWord, { expires: 7 }); // 存储一个带7天期限的 cookie
        //alert(userName+"|||||"+passWord);
        //var c=userName+"|||||"+passWord;
        var cookqqqjio=$.cookie("rmbUser") +$.cookie("userName")+$.cookie("passWord");
    } else {
        $.cookie("rmbUser", "false", { expires: -1 }); // 删除 cookie
        $.cookie("userName", '', { expires: -1 });
        $.cookie("passWord", '', { expires: -1 });
    }
    //alert($("#wsc-username").val()+"|||||"+$("#wsc-password").val());
}
