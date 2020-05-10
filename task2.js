var arr = [1,-1,2,3,4,5];
var arr2 = [];
function f(){
    for(var i=0;i<arr.length-1;i++){
    	if(arr[i]<0){
    		for(var j=0;j<arr.length;j++){
    			arr2[j]=arr[j];
    		}
    		var b=arr2[i];
    		arr2[i]=arr2[arr.length-1];
    		arr2[arr.length-1]=b;
    		break;
    	}
    }
    if(arr2.length===0){
    	for(var j=0;j<arr.length;j++){
    		arr2[j]=arr[j];
    	}
    }
}
f();
console.log(arr2);