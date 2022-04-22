 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/favicon.png");
         document.title = 'w(ﾟДﾟ)w 页面崩溃啦~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.png");
         document.title = '(ฅ>ω<*ฅ) 噫？又好了~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 5000);
     }
 });
