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
            data = JSON.parse(res);
            if(data.message == "success" && data.type == "teacher"){
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



$('#register').click(function(){

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

function sendEmail(){
   var answerArr = [];
   $(".inputmessage, textarea").each(function(){       
    //    if($(this).attr("type") === "radio"){            
    //        if($(this).is(":checked")){
    //           answerArr.push($(this).val());
    //        }
    //    }else{
          answerArr.push($(this).val());       
       });
//    });

    var body = answerArr.join("\n");
    var mailto = "someone@peacher.com";

    var a = document.createElement('a');
    a.href = "mailto:" + mailto + "?body=" + escape(body);
    console.log(a.href);
    a.click();
}

$(document).on("click",".submit",sendEmail);

