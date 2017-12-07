$(function(){
    $("#cart_list").find(".count-box").each(function(ind,ele){
        // console.log(ind,ele)
        var $ele = $(ele);
        //商品数量减少
        $(ele).children(".icon-sub").on("click",function(){
            var $input = $ele.children(".icon-number");
            var count = $input.val();
            // console.log($input,count)
            // console.log($input.val())
            if(count){
                count = parseInt(count);
                if(count>1){
                    count--;
                    $input.val(count);
                }else{
                    count = 1;
                    $input.val(count);
                }
            } 
            // console.log($(this).parents("td").prev().text().slice(1)*count+".0")
            var Text =  $(this).parents("td").prev().text().slice(1)*count+".0"
            $(this).parents("td").next().next().text("￥"+Text)

            $(".fb-fr-b").text("￥"+result());
        })
        //商品数量增加
        $(ele).children(".icon-add").on("click",function(){
            var $input = $ele.children(".icon-number");
            var count = $input.val();
            if(count<19){
                count = parseInt(count);
                count++;
                $input.val(count);
            }else{
                count = 1;
                $input.val(count); 
                alert("数量超过库存上限")
            }
            // $(this).parent().prev().text()
            // console.log($(this).parents("td").prev().text().slice(1)*count+".0")
            var Text =  $(this).parents("td").prev().text().slice(1)*count+".0"
            // console.log(Text)
            // console.log($(this).parents("td").next().next().text())
            $(this).parents("td").next().next().text("￥"+Text);
            $(".fb-fr-b").text("￥"+result());
        
        // console.log(result());
        })
        result();




        //商品个数
        $(ele).children(".icon-number").on("change",function(){
            var count = $(this).val();
            if(count<19){
                if(count == 0){
                    count=1
                    count = parseInt(count);
                    $(this).val(count);
                }else{
                    count = 1;
                    // $(this).val(count);
                }
            }else{
                count = 1;
                $(this).val(count);
                alert("数量超过库存上限")
            }
            // console.log($(this).val())
            // console.log($(this).parents("td").prev().text().slice(1)*$(this).val())
            var Text = $(this).parents("td").prev().text().slice(1)*$(this).val()
            $(this).parents("td").next().next().text("￥"+Text)
            $(".fb-fr-b").text("￥"+result());
            
        })
    })
        // 删除商品
        $(document).on("click",'.icon-delete',function(){
            $(this).parent().parent().fadeOut(300,function(){
                $(this).remove();
                $(".fb-fr-b").text("￥"+result());
            });
            alert("删除成功")
            // $(this).parent().parent().hide().remove()
            // alert("删除成功！")
        })

        
        // 总价
        $(".fb-fr-b").text("￥"+result());




        //价格总价封装函数
        function result(){
            var $result=0;
            $("#cart_list").find(".unit").each(function(){
                $result += +$(this).text().slice(1);
                console.log($result)
            });
            // $(".fb-fr-b").text(result());
            return $result;
        }
    















})