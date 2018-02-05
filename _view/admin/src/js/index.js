$(function () {
    // 键盘回车事件
    $(document).keyup(function (e) {if (e.keyCode == 13) { $("#load").click();}});

    // 提交
    $("#load").on("click", function () {
        var code = "t13c";
        var admin = $("#admin").val(); 
        var password = $("#password").val();
        var codetext = $("#code").val();
        if (admin == "") {
            $("#info").html("请输入用户名！");
        } else if (password == "") {
            $("#info").html("请输入密码！");
        } else if (codetext!=code){
            $("#info").html("验证码不正确！");
        } else {
            $.ajax({
                url: "../php/sy.php",
                type: "POST",
                dataType: "jsonp",
                data: { "admin": "" + admin + "", "password": "" + password + "" },
                success: function (data) {
                    if (data == 1) {
                        //存储cookie
                        //跳转
                        window.location.href = "./view/frame.html";
                        $("#info").html("");
                    } else {
                        $("#info").html("用户名或密码错误");
                    }
                },
                error: function (err) {
                    window.location.href = "./view/frame.html";                    
                    console.log(err);
                    $("#info").html("内部服务器错误！");
                }
            });
        }
    });
});