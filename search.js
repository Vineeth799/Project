$(document).ready(function(){
    $("#par").find("span").hover(function(){
    $(this).css("background-color", "bisque");
    }, function(){
    $(this).css("background-color", "white");});
    $("span").each
        (
            function()
            {
                $("span:contains(th)").css({"font-style":"italic","text-shadow":"2px 2px pink","font-weight":"bold"});
    
            }
        );
  
  /*  $("#par").find("span").each(function(){
  if($(this)=="th$"){
  $(this).css({"font-style":"italic","text-shadow":"2px 2px pink","font-weight":"bold"});
  
  }
  $("i").css({"font-style":"italic","text-shadow":"2px 2px pink","font-weight":"bold"})
  
  });*/
  
  });
  
  