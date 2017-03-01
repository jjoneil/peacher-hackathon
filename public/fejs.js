$('#myModal').modal('show');

$(document).ready(function () {
    $('#log').click(function () {
        console.log("clicked")
        var isTeacher = $('#isTeacher').is(":checked");
        var isParent = $('#isParent').is(":checked");
        $.post('/login', {
            username: $('#username').val(),
            password: $('#password').val(),
            student: isParent
        }, function (res) {
            //change if statements according to res
            console.log(res)
<<<<<<< Updated upstream
            data = JSON.parse(res);
            if (data.message == "success" && data.type == "teacher") {
=======
            data = JSON.parse(res);4
            if(data.message == "success" && data.type == "teacher"){
>>>>>>> Stashed changes
                document.location = './teacherprof/' + data.data._id;
            }
            if (data.message == "success" && data.type == "student") {
                document.location = './studentprof/' + data.data._id;
            }
            else {
                $("#errorlogin").text(data.message);
            }
        });
    });
})

<<<<<<< Updated upstream
$('#register').click(function () {
=======

$('#register').click(function(){
>>>>>>> Stashed changes
    var teachorparent = $('#teachorparent').is(":checked");
    $.post('/signup', {
        firstname: $('firstsignup').val(),
        lastname: $('lastsignup').val(),
        username: $('usernamesignup').val(),
        password: $('passwordsignup').val(),
        email: $('emailsignup').val()
    }, function (res) {
        console.log(res)
        data = JSON.parse(res);
        if (data.message == "success" && data.type == "teacher") {
            document.location = './teacherprof/' + data.data._id;
        }
        if (data.message == "success" && data.type == "student") {
            document.location = './studentprof/' + data.data._id;
        }
    });
});



