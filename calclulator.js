function addToDisplay(val){
    result.value+=val

}
function calculate(){
   result.value=eval(result.value)
}
function clearAll(val){
    if(val=="DL"){
        result.value=result.value.slice(0,-1)
    }
else{

    result.value=""
}
}