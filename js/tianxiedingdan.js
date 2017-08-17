var state = 1;
var tel = /^1[3|4|5|8][0-9]{4,8}$/;
// var mail = document.getElementById("mail");
// var name = document.getElementById("name");
// console.log(name.innerText)
// var name1 = document.getElementById("name1");
var telInput = document.getElementById("tel");
$("#add").click(function(){
	state++;
	document.getElementById("num").value = state

})
$("#minus").click(function(){
	if(document.getElementById("num").value>1){
		document.getElementById("num").value--
	}
	
})
function show(showSex){
	var name = document.getElementById("name").value;
	document.getElementById("name1").value = name;
	var sex=document.getElementsByName("sex");
	for(var i = 0;i<sex.length;i++){
		if(sex[i].checked){
			showSex = sex[i].value;
			break;
		}
	}
}
telInput.onblur = function(){
	if(telInput.value==tel){
		telInput.getElementById("tel").value = telInput.value
	}
}