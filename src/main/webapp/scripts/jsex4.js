/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    callEveryHour();

    $("#btn").click(function () {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (a) {
            $("#quoteOfTheHour").html((a[0].content + "<p>— " + a[0].title + "</p>"));
        });

        /* Doesn't work. Don't know how to use .load(). I tried:
         $("#QuoteOfTheHour").load("http://api.icndb.com/jokes/random", function (responseTxt, statusTxt, xhr) {
         if (statusTxt === "success") {
         alert("External content loaded successfully!");
         }
         if (statusTxt === "error") {
         alert("Error: " + xhr.status + ": " + xhr.statusText);
         }
         });
         */

    });
    
    (function updateTime() {
            $.ajax({
                url: 'http://localhost:8080/module2js/time',
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    $('#time').html(res.hour + ":" + res.minute + ":" + res.second);
                },
                error: function (res) {
                    console.log("Error");
                },
                complete: function () {
                    setTimeout(updateTime, 1000);
                }
            })
            ;
        })();
        
    $('#get-person').on('click', function () {

            $.ajax({
                url: 'http://localhost:8080/module2js/person',
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    $('#person-tbody').append(
                        "<tr>" +
                        "<td>" + res.firstName + "</td>" +
                        "<td>" + res.lastName + "</td>" +
                        "<td>" + res.age + "</td>" +
                        "</tr>"
                    );
                },
                error: function (res) {
                    console.log("Error");
                }
            });

        });

        $('#add-person').on('click', function () {

            var person = {
                firstName: $('#firstname').val(),
                lastName: $('#lastname').val(),
                age: $('#age').val()
            };

            $.ajax({
                url: 'http://localhost:8080/module2js/person',
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(person),
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log(res);
                }
            });

        });    
    
    $("#north").click(function() {
        alert("You clicked north");
    });
    
    $("#south").click(function() {
        alert("You clicked south");
    });
    
    $("#west").click(function() {
        alert("You clicked west");
    });
    
    $("#east").click(function() {
        alert("You clicked east");
    });
    
});

function callEveryHour() {
    setInterval(loadQuote, 1000 * 60 * 60);
}

function testCall() {
    setInterval(loadQuote, 1 * 1 * 1);
}

function loadQuote() {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (a) {
        $("#quoteOfTheHour").html((a[0].content + "<p>— " + a[0].title + "</p>"));
    });
}



