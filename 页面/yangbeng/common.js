function setMedia(e,t){for(var i=$(e).find(".row"),a=i.children("div"),r=a.length,o=t;r>o;o++)$(a[o]).addClass("hideme");if(r>t){var s='<div class="col-xs-4 col-md-3"><a class="moremedia"><div class="moremedia-txt">更多</div></a></div>';$(i).append(s),$(".moremedia").height($(".moremedia").width()),$(e).on("click",".moremedia",function(){if($(a).hasClass("hideme"))$(a).removeClass("hideme"),$(a).removeClass("hideme"),$(".moremedia").children(".moremedia-txt").text("收起");else{for(var e=t;r>e;e++)$(a[e]).addClass("hideme");$(".moremedia").children(".moremedia-txt").text("更多")}})}}function resizeCommonWindow(){resizeGlobalFooter(),$("img.lazy").lazyload(),$(".moremedia").height($(".moremedia").width()),w>mobile2Width?($(".wx-icon").on("mouseenter",function(){$(this).find(".qr-code").stop(!0,!0).slideDown("fast")}),$(".wx-icon").on("mouseleave",function(){$(this).find(".qr-code").slideUp("fast")})):($(".wx-icon").unbind("mouseenter"),$(".wx-icon").unbind("mouseleave"),$(".wx-icon").find(".qr-code").css("display","none"))}var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,cdnURL="//cdn.hommk.com/pcgame/ubi2015/";mobileWidth=991,mobile2Width=767,$(window).resize(function(){w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,resizeCommonWindow()}),$(document).ready(function(){$(".login").on("click",function(){}),$(".video_btn").on("click",function(e){e.preventDefault();var t=$(this).attr("data-video");var t1=t.split("&");var t2=t1[0].split("?");var t3=t2[0].split(".");if(t3[t3.length-1]=="swf"){$("#videoModal").find(".modal-content").removeClass("mp4_video");$("#videoModal").find(".modal-content").html(' <embed src="'+t+'" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" allowFullScreen="true" mode="transparent" type="application/x-shockwave-flash"></embed>')}else{ $("#videoModal").find(".modal-content").addClass("mp4_video");$("#videoModal").find(".modal-content").html(' <video   webkit-playsinline="true" poster="'+t1[1]+'" controls="" src="' + t1[0] + '" preload="none"></video')}}),$(".picture_btn").on("click",function(e){e.preventDefault();var t=$(this).attr("data-img");$("#picModal").find(".modal-content").html(' <img src="'+t+'" width="100%" />')})}),function(e){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],e):"object"==typeof exports?e(require("jquery"),require("hammerjs")):e(jQuery,Hammer)}(function(e,t){function i(i,a){var r=e(i);r.data("hammer")||r.data("hammer",new t(r[0],a))}e.fn.hammer=function(e){return this.each(function(){i(this,e)})},t.Manager.prototype.emit=function(t){return function(i,a){t.call(this,i,a),e(this.element).trigger({type:i,gesture:a})}}(t.Manager.prototype.emit)});

 function resizeGlobalFooter (){
            if ($("#langSelectRegions").hasClass('closed') === false) {
                 if(w<=mobile2Width){
                   // Globals.Helpers.cache.body.css('overflow', 'hidden');
                    $("body").css('overflow', 'hidden');
                    $("#langSelectRegions").attr('style', '');

                } else {
                    langSelectorHeight = $("#langSelectRegions").outerHeight();
                    $("#langSelectRegions").css('margin-top', '-' + langSelectorHeight+ 'px');
                    $("body").attr('style', '');
                }
            }
        };

//var search_result_count = 1;
//var search_keyword_length = 0;
var search_last_value = ""
     $(document).ready(function(){
        $('#videoModal').on('hidden.bs.modal',function(event){
           var modal = $(this);
          modal.find(".modal-content").html("");
        });
        $("#langSelectToggle").on("click",function(e) {
            e.preventDefault();
            if ($("#langSelectRegions").hasClass('closed')) {
               $("#langSelectToggle").removeClass('arrow-up').addClass('arrow-down');
                $("#langSelectRegions").removeClass('closed');
               langSelectorHeight = $("#langSelectRegions").outerHeight();
              //  Globals.Helpers.toggleGlobalHeader();


               if(w<=mobile2Width){
                    $(".navbar-ubi2015").toggleClass('hidden')
                   // Globals.Helpers.cache.body.css('overflow', 'hidden');
                   $("body").css('overflow', 'hidden');
                    $("#langSelectRegions").attr('style', '');

                } else {

                    $("#langSelectRegions").css('margin-top', '-' +langSelectorHeight + 'px');

                }
            } else {

               $("#langSelectToggle").removeClass('arrow-down').addClass('arrow-up');
                $("#langSelectRegions").addClass('closed').attr('style', '');
              $("body").attr('style', '');
              if(w<=mobile2Width){
                    $(".navbar-ubi2015").toggleClass('hidden')
              }
               // Globals.Helpers.toggleGlobalHeader();

            }
        });

       $("#langSelectRegions h3").on("click",function(e) {
            e.preventDefault();
            if (w<=mobile2Width) {
                $(this).parent().toggleClass('closed');
            }
        });

      $("#langSelectBack").on('click', function (e) {
                e.preventDefault();
                $("#langSelectToggle").trigger('click');
                $("body").attr('style', '');

      });
      function closeSearchTray(){
          $('#nav-search').removeClass('open');
          $("#keyword-filter").val('');
          $(".nav-search-results").hide();
           $("body").off("click",closeSearchTray)
      }

   $("#nav-search .action").on('click',function (e) {
                e.preventDefault();
                 e.stopPropagation();
                $('#nav-search').toggleClass('open');
                if($('#nav-search').hasClass('open')) {
                    $("#keyword-filter").focus();
                    $("body").on("click",closeSearchTray)
                 } else {
                    $("#keyword-filter").val('');
                }
            });
    $("#keyword-filter").on("click",function(e){e.stopPropagation();})

     filter_time =function(){
      search_last_value = ""
       var time = setInterval(filter_staff_from_exist, 500);
        $(this).bind('blur',function(){
              clearInterval(time);
        });
     }
     filter_staff_from_exist = function(){
        var filter_str = $("#keyword-filter").val();
        if(filter_str != search_last_value ){
          if(filter_str!=""){
          var url = "/news2/search_name?game_keyword="+filter_str;
          $.get(url, function(data){
            gamelist = data.games
            search_result_count = gamelist.length
            searchresult = ""
            for(i=0;i<gamelist.length;i++){
              searchresult = searchresult + '<li class="go-to-page"><a href="/games?game='+  gamelist[i].id +':'+ gamelist[i].gameabb+'" style="display:block">' + gamelist[i].title + '</a></li>'
            }
            $(".nav-search-results").html(searchresult)
            if(search_result_count>0){
              $(".nav-search-results").show();
            }else{
              $(".nav-search-results").hide();
            }
         })
        }else{
            $(".nav-search-results").hide();
        }
        search_last_value = filter_str
      }
   }
   $("#keyword-filter").bind('focus',filter_time);
    /*  $("#keyword-filter").on('keyup input', function(e) {
        var keyword = $(e.currentTarget).val();
        if(keyword.length > 1 && (search_result_count > 0 || keyword.length <= search_keyword_length)){
          search_keyword_length = keyword.length;
          var url = "/news2/search_name?game_keyword="+keyword;
          $.get(url, function(data){
           //console.log(data);
           gamelist = data.games
            search_result_count = gamelist.length
           searchresult = ""
           for(i=0;i<gamelist.length;i++){
              searchresult = searchresult + '<li class="go-to-page"><a href="/games?game='+  gamelist[i].id +':'+ gamelist[i].gameabb+'" style="display:block">' + gamelist[i].title + '</a></li>'
           }
           $(".nav-search-results").html(searchresult)
           if(search_result_count>0){
           $(".nav-search-results").show();
           }else{
            $(".nav-search-results").hide();
           }
          })
        }
      });*/

});
