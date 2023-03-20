function login(){
    console.log({
        email: $('#email').val(),
        password: $('#password').val(),

    })
    $.ajax({
        url: "/users/login",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            email: $('#email').val(),
            password: $('#password').val(),
          

        }),
        success: function(response){
            console.log(response.data);
        },
        error: function(xhr, status, error){
            console.log(xhr.responseText);
        }
    });
    
}