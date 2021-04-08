$(document).ready(function(){
           
    $('#submit1').on("click",function(){
     var a =parseInt($('#text1').val());
    var b = parseInt($('#text2').val())
    if (a>=0 && b>=0)
    {
     var sum = a+b;
       $('#text3').val(sum);
       $("#div1").html(sum).css("color","green").css("font-size","20px");
    }
    else{
     $("#div1").html("Please Enter the Value").css("color","red");
    }
        
    })
 })