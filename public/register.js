function createUser(){
    console.log({
        email: $('#email').val(),
        password: $('#password').val(),
        phone: $('#phone').val(),
        name: $('#name').val()

    })
    $.ajax({
        url: "/users/register",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            email: $('#email').val(),
            password: $('#password').val(),
            phone: $('#phone').val(),
            name: $('#name').val()

        }),
        success: function(response){
            console.log(response);
            alert(response.data);
        },
        error: function(xhr, status, error){
            console.log(xhr.responseText);
        }
    });
    
}