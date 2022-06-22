function testStr(str){
    strArray = str.split('');
    for(let i=0;i<strArray.length;i++){
        if(isNaN(strArray[i])==false){
           //console.log("Number "+strArray[i]+" is at index "+i);
           strArray[i] = '1'.repeat(strArray[i]);
        }
    }
    console.log(strArray.join(''));
}
testStr("abc5bc3");