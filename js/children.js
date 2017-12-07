   ;
   (function ($) {
       //第四列没有margin值
       $(".cat-list li").each(function (i, n) {
           if ((i + 1) % 4 == 0) {
               $(this).css({
                   marginRight: 0
               })
           } else {
               $(this).css({
                   marginRight: "20px"
               })
           }
       })

       // 可定制商品
       $(".cat-list li").each(function (ind, ele) {
           var $diybtn = $(ele).find(".can-diy"),
               $img = $(ele).find('.cont'),
               $dn = $(ele).find('.dn');
           $diybtn.unbind('click').click(function () {
               $diybtn.toggleClass('isdiy');
               $img.removeClass('cont-focus').toggleClass('c-focus')
               $dn.removeClass('diypic').toggleClass('c-diypic');
           })
           $diybtn.unbind('mouseenter').mouseenter(function () {
               $img.addClass('cont-focus');
               $dn.addClass('diypic');
           })
           $diybtn.unbind('mouseleaver').mouseleave(function () {
               $img.removeClass('cont-focus');
               $dn.removeClass('diypic');
           })
       });
       //查看更多
       $('#more').on('click', function () {
           $('#more').hide();
           $('.article').css({
               height: "808px",
           }).children('.cont').css({
               display: "block",
           });
       })
       //收起更多
       $('#up').on('click', function () {
           $('#more').show();
           $('.article').css({
               height: "302px",
           }).children('.cont').css({
               display: "none",
           })
       })
   }(jQuery))