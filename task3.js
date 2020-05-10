var arr = [1,1,2,-3,-4,5];
function f(){
    for(var i=0;i<arr.length-1;i++){
    	if(arr[i]<0){
    		var b=arr[i];
    		arr[i]=arr[arr.length-1];
    		arr[arr.length-1]=b;
    		console.log(i);
    		break;
    	}
    	if(i>=arr.length-2){
    		console.log(null);
    	}
    }
}
f();