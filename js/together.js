function addClass(obj,className){
		var state=true
		var old=obj.getAttribute('class')
		if(old==null){
			obj.setAttribute('class',className)
		}else{
			var arr1=old.split(" ")
			for(var i=0;i<arr1.length;i++){
			if(arr1[i]==className){
				state=false
				break;
				}
			
			}
			if(state==true){
				var newName=old+' '+className
				obj.setAttribute('class',newName)
			}
		}
	}



	function removeClass(obj,className){
		var old=obj.getAttribute('class')
		//数组的indexOf方法
		// if(old!=null){
		// 	var arr=old.split(" ")
		// 	if(arr.indexOf(className)!=-1){
		// 		var num=arr.indexOf(className)
		// 		arr.splice(num,1)
		// 	}
		// 	if(arr.length==0){
		// 		obj.removeAttribute('class')
		// 	}
		// 	var newName=arr.join(' ')
		// 	obj.setAttribute('class',newName)
			
		// }

		//数组的filter方法
		if(old!=null){
			var arr=old.split(" ")
			var newArr=arr.filter(function(item){
				return item!=className
			})
			var newName=newArr.join(' ')
			obj.setAttribute('class',newName)
		}
	}


