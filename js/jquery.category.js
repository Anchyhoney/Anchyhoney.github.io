;(function($){
    //查看更多
    $('#more').on('click',function(){
        $('#more').hide();
        $('.article').css({
            height:892,
        }).children('.cont').css({
            display:"block",
        });
    })
    //收起更多
    $('#up').on('click',function(){
        $('#more').show();
        $('.article').css({
            height:386,
        }).children('.cont').css({
            display:"none",
        })
    })
}(jQuery));




	