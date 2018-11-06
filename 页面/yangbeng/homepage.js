function goSlide(direction){
           $('#bigbanner').carousel(direction);
          }
          $(document).ready(function(){
          $('#shop_publish').carousel({
             interval: 8000
          })
            var slideImage = $('#bigbanner'),
            newImage = $("<img/>"),
            image = slideImage.find('img'),
            imgLen = image.length;
            imageloaded = 0;
            if(w<mobile2Width){
                bgurl = slideImage.attr("data-topbg")
            }else{
                bgurl = slideImage.attr("data-topmobilebg")
            }
            for(var i =0;i<imgLen;i++){
                var bannerImage = $("<img/>");
                bannerImage.load(function () {
                    imageloaded = imageloaded + 1;
                    if(imageloaded == imgLen+1 ){
                        $("#loadingScreen").animate({'top': '-100%'}, 500,function(){$("#loadingScreen").remove();});
                    };
                }).attr('src',$(image[i]).attr("src"));
            }
            newImage.load(function () {
              slideImage.css('background-image', 'url(' + bgurl + ')');
              imageloaded = imageloaded + 1
              if(imageloaded == imgLen+1 ){
                $("#loadingScreen").animate({'top': '-100%'}, 500,function(){$("#loadingScreen").remove();});
              }
            }).attr('src', bgurl);
          resizeCommonWindow();
          resizeMe();
          $(".player-photo img").load(function(){
                if(w>mobileWidth){
                      if($(".player").height()< $(".hotsales .thumbnail").height()){
                          $(".player .player-photo").height($(".hotsales .thumbnail").height()-20)
                      }else{
                          $(".hotsales .thumbnail").height($(".player").height()+20)
                      }
                 }else{
                      $(".player .player-photo").height("auto")
                       $(".hotsales .thumbnail").height("auto")
                  }
          });
          $(".index-game-wrap .thumbnail").on("mouseenter",function(){
               $(this).find(".overcontent").css("padding-top", ($(this).find(".thumb-pic").height()-80)/2)
              $(this).find(".overcontent").slideDown("slow")

          });
          $(".index-game-wrap .thumbnail").on("mouseleave",function(){
              $(this).find(".overcontent").hide()
          });
          function   resizeMe(){
            $(".hotsales .thumbnail").find("img").each(function(){
              $(this).css("height",$(this).width()*3/5)
              });
              $(".index-news-bg2").find(".col-md-4").height ($(".index-news-bg2").find("img").width()*2/3)
              $(".index-news-bg2").find("img").each(function(){
                  if($(this).width()*2/3 > $(this).height()){
                      $(this).css("height","100%")
                  }
              });
             if(w>mobileWidth){
                      $(".player .player-photo").height("auto")
                       $(".hotsales .thumbnail").height("auto")
                      if($(".player").height()< $(".hotsales .thumbnail").height()){
                          $(".player .player-photo").height($(".hotsales .thumbnail").height()-20)
                      }else{
                          $(".hotsales .thumbnail").height($(".player").height()+20)
                      }
             }else{
                    $(".player .player-photo").height("auto")
                       $(".hotsales .thumbnail").height("auto")
             }
             if(w>mobileWidth){
                $(".index-shop-wrap").css("height",  $(".index-news-bg").height()-40)
             }else{
                $(".index-shop-wrap").css("height",  "auto")
             }
          }
          $(window).resize(function() {
              resizeMe();
          });
          setMedia(".index-media-wrap",7);
          $('#bigbanner').hammer().on('swipeleft', function(){
              $(this).carousel('next');
          });
          $('#bigbanner').hammer().on('swiperight', function(){
              $(this).carousel('prev');
          });
          $('#shop_publish').hammer().on('swipeleft', function(){
             $('#pub_tags a:first').tab('show')
          });
          $('#shop_publish').hammer().on('swiperight', function(){
              $('#pub_tags a:last').tab('show')
          });
         // var platforms_str = '<%= raw @player.platforms  if !@player.nil?%>',
         // platforms = JSON.parse(platforms_str),
         // platforms_html = $("#platforms").html()
        //  $.each(platforms, function(i, p){
         //   platforms_html += "&nbsp;<a href='"+p.url+"' target='_blank'>"+p.name+"</a>&nbsp;&nbsp;"
         // })
         // $("#platforms").html(platforms_html)
      });