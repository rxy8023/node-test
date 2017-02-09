function createXhr(){
	//判断浏览器
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return new ActiveXObject("Microsoft.XMLHttp");
	}
}
$(function(){
	$("#username").blur(function(){
		var xhr = createXhr();
		var username = $("#username").val();
		var url = "checkName.php"
		xhr.open("post",url,true);
		xhr.onreadystatechange=function(){
			if (xhr.readyState == 4 && xhr.status == 200) {
				var resText = xhr.responseText;
				$("#text").html(resText)
			}
			
		}
		//不要写在onreadystatechange里面
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
		xhr.send("username="+username);
	});
	// $("#signUP").click(function(){
		
	// 		$.post("regist.php" ,{
	// 		username:$("#username").val(),
	// 		password:$("#register_password").val(),
	// 		email:$("#email").val()
	// 	},function(){
	// 		alert("上传成功")
	// 	})
	// 	var username =$("username").val();
	// 	var password = $("#register_password").val();
	// 	var email = $("#email").val();
	// 	var xhr = createXhr();
	// 	var url= "regist.php";
	// 	xhr.open("post",url,true);
	// 	xhr.onreadystatechange=function(){
	// 		if (xhr.readyState == 4 && xhr.status ==200) {
	// 			alert("成功")
	// 		}
	// 	};
	// 	xhr.setRequestHeader("Content-Type","x-www-form-urlencoded");
	// 	xhr.send("username="+username+"&password="+password+"&email="+email);
// 	})
})