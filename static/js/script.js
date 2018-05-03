
$(document).ready(function() {

    $("form").on("submit", function(event){

        console.log("hello")
        $.ajax({
            data: {url: $("#url").val()},
            type: "POST", 
            url: "/process"
            
        })
        .done(function(data){
            
            if(data.return){
                $("#form1").text(data.return)
            }

        })
        event.preventDefault();

    });
});
