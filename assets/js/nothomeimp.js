---
#thing
---
//Load jQuery library using plain JavaScript
(function(){
    var newscript = document.createElement('script');
       newscript.type = 'text/javascript';
       newscript.async = true;
       newscript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
  })();
{% include_relative actualjs/nav.js %}