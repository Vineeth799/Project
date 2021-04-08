$("input").keyup(function (){
    math1Mark = parseFloat($("#math1Mark").val());
    math2Mark = parseFloat($("#math2Mark").val());
    scienceMark = parseFloat($("#scienceMark").val());
    englishMark = parseFloat($("#englishMark").val());
    sanskritMark = parseFloat($("#sanskritMark").val());
    socialMark = parseFloat($("#socialMark").val());

    if(isNaN(math1Mark)) math1Mark = 0;
    if(isNaN(math2Mark)) math2Mark = 0;
    if(isNaN(scienceMark)) scienceMark = 0;
    if(isNaN(englishMark)) englishMark = 0;
    if(isNaN(sanskritMark)) sanskritMark = 0;
    if(isNaN(socialMark)) socialMark = 0;
    sum = Number((math1Mark + math2Mark + scienceMark + englishMark + sanskritMark + socialMark).toFixed(2));
    $("#sumValue").text(sum);
});