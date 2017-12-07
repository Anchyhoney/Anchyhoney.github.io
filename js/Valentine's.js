(function($) {
  // 点击之后变送给他
  $(".give-him").on("click", function() {
    $(this)
      .parents(".currentloc")
      .css({
        background: "url(./img/Valentine2.png) center center no-repeat"
      })
      .end()
      .hide();
    $(".give-her").show();
  });
  // 点击之后变送给她
  $(".give-her").on("click", function() {
    $(this)
      .parents(".currentloc")
      .css({
        background: "url(./img/Valentine.png) center center no-repeat"
      })
      .end()
      .hide();
    $(".give-him").show();
  });
  //第三列没有margin值
  $(".cat-list li").each(function(i, n) {
    if ((i + 1) % 3 == 0) {
      $(this).css({
        marginRight: 0
      });
    } else {
      $(this).css({
        marginRight: "21px"
      });
    }
  });
  // 可定制商品
  $(".cat-list li").each(function(ind, ele) {
    var $diybtn = $(ele).find(".can-diy"),
      $img = $(ele).find(".cont"),
      $dn = $(ele).find(".dn");
    $diybtn.unbind("click").click(function() {
      $diybtn.toggleClass("isdiy");
      $img.removeClass("cont-focus").toggleClass("c-focus");
      $dn.removeClass("diypic").toggleClass("c-diypic");
    });
    $diybtn.unbind("mouseenter").mouseenter(function() {
      $img.addClass("cont-focus");
      $dn.addClass("diypic");
    });
    $diybtn.unbind("mouseleaver").mouseleave(function() {
      $img.removeClass("cont-focus");
      $dn.removeClass("diypic");
    });
  });
  //查看更多
  $("#more").on("click", function() {
    $(this).hide();
    $(this)
      .parents(".cat-article")
      .css({
        height: "424px"
      });
    $(".festival").css({
      display: "block"
    });
  });
  //收起更多
  $("#up").on("click", function() {
    $(this)
      .parents(".cat-article")
      .css({
        height: "260px"
      });
    $(".festival").css({
      display: "none"
    });
    $("#more").show();
  });
})(jQuery);
