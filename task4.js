var arr = [0,-1,2,-3,4,5];
function f(arr,p){
    arr.sort(function(a,b){
        return a - b;
    });
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        if(arr[i]===p){
            console.log(i);
            break;
        }
        if(i>=arr.length-1){
            console.log(null);
        }
    }
}
f(arr,2);