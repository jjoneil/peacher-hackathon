$('#myModal').modal('show');


$('log').click(function(){
    var isTeacher = $('#isTeacher').is(":checked");
    var isParent = $('#isParent').is(":checked");
    $.post('/login', {
        username: $('#username').val(),
        password: $('#password').val(),
        student: isParent
    }, function(res){
        //change if statements according to res
        if(isTeacher === true){
            document.location = './teacherprof/:id'
        }
        if(isParent === true){
            document.location = './studentprof/:id'
        }
    });
});


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