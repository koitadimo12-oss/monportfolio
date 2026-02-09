function appendValue(value){
    const resultf= document.getElementById('result');
    if(resultf.value=== "0" && value!= '.' ){
        resultf.value= value
    } else{
        resultf.value += value;
    }
}
function clearResult(){
    document.getElementById('result').value='0';
}
function calculresult(){
    const resultf= document.getElementById('result');
    try{
        resultf.value= eval(resultf.value);
    }
    catch (e){
        resultf.value= Error
    }
} 