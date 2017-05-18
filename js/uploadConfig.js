
var uploadConfig = {
    removeImg: function (r) {//描述：上传图片附带删除 再次地方可以加上一个ajax进行提交到后台进行删除
        var url = $(r).attr("imgsrc");
        if (url.length > 0) {
            $.ajax({
                url: '../Controller/deleteImg.ashx',
                type: 'post',
                cache: false,
                dataType: 'text',
                data: {
                    imgUrl: $(r).attr("imgsrc")

                },
                success: function (data) {
                    alert(data);

                }
            });

        }
        
        $(r).parent().remove();
    },
    hotelInfo: function () {
        var html = ue.getContent();
        
        
        html = html.replace(/[\r\n]/g, "");
        //html = html.replace(/\%/g, "%25");
        //html = html.replace(/\+/g, "%2B");
        //html = html.replace(/\&/g, "%26");
        if (html.length > 0) {
            $.ajax({
                url: '../Controller/updateHotelInfo.ashx',
                type: 'post',
                cache: false,
                async: false,
                dataType: 'text',
                data: {
                    //conten: html
                    conten: encodeURIComponent(html)
                    
                    //data : { "parametersStr":encodeURIComponent(queryxml),"lotime":encodeURIComponent(new Date())}, 

                },
                success: function (data) {
                    alert(data);

                }
            });

        }
    }


};
