$('#myModal').modal('show');

$(document).ready(function(){
    $('#log').click(function(){
        console.log("clicked")
        var isTeacher = $('#isTeacher').is(":checked");
        var isParent = $('#isParent').is(":checked");
        $.post('/login', {
            username: $('#username').val(),
            password: $('#password').val(),
            student: isParent
        }, function(res){
            //change if statements according to res
            console.log(res)
            data = JSON.parse(res);
            if(data.message == "success" && data.type == "teacher"){
                document.location = './teacherprof/' + data.data._id;
            }
            if(data.message == "success" && data.type == "student"){
                document.location = './studentprof/' + data.data._id;
            }
        });
    });
})

$('#register').click(function(){
    var teachorparent = $('#teachorparent').is(":checked");
    $.post('/signup',{
        username: $('usernamesignup').val(), 
        password: $('passwordsignup').val()
    }, function(res){
        if(teachorparent === true){
            document.location = './teacherprof'
        }
        else if(teachorparent === false){
            document.location = './parentprof'
        }
    });
});