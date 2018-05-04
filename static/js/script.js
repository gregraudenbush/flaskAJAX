$(document).ready(function() {
    
    $("#loader").hide();
    $("#loader2").hide();
    $("#loader3").hide();

    $("#form1").on("submit", function(event){
        $("#loader").show();
        
       $.ajax({
           data: {url: $("#url").val()},
           type: "POST", 
           url: "/process"
           
           
        })
              
        
        .done(function(data){
            
            if(data.return){
                $("#loader").hide();
                $("#return1").text(data.return)
            }
            

        })
        console.log("after done")
        event.preventDefault();

    });

    $("#form2").on("submit", function(event){

        $("#loader2").show();
        console.log("hello")
        $.ajax({
            data: {url: $("#url2").val()},
            type: "POST", 
            url: "/process"
            
        })
        
        .done(function(data){
            
            if(data.return){
                $("#loader2").hide();
                $("#return2").text(data.return)
            }
            

        })
        console.log("after done")
        event.preventDefault();

    });

    $("#form3").on("submit", function(event){
        $("#loader3").show();
        console.log("hello")
        $.ajax({
            data: {url: $("#url3").val()},
            type: "POST", 
            url: "/process"
            
        })
        
        .done(function(data){
            
            if(data.return){
                $("#loader3").hide();
                $("#return3").text(data.return)
            }
            

        })
        console.log("after done")
        event.preventDefault();

    });
});
