/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('#1stdiv').click(function () {
        $('#1stdiv').hide();
    });
    $('#2nddiv').hover(function () {
        $('#2nddiv').css("border","4px solid blue");
    });
    $('#2nddiv').click(function () {
        $('#3rddiv').css("fontSize","x-large");
    });
    $(".cell").click(function() {
        this.innerHTML = this.innerHTML * this.innerHTML;
    });
        $("li").filter(":even").css("background","lightgrey");
        
        var value = 16;
        $("li").each(function() {
           $(this).css("fontSize",value);
           value += 3;
        });
    
    $("#imgcontainer > .image").each(function() {
        $(this).click(function() {
         $("#imgcontainer").append($(this));
        });
    });
    
    $("#swagsubmit").click(function() {
        var color = "red";
       $(".swagform > .content").each(function() {
           if ($(this).val() === "" || $(this).val() === "Fill this") {
               $("#username").val("Fill this").css("color",color);
               $(".swagsubmit").prop("disabled",true);
           } else {
               console.log("Success");
               $(".swagsubmit").prop("disabled",false);
           }
       });
    });
    $("#username").keypress(function() {
            $("#username").css("color","black");
    });
    
});


