const input =document.querySelector('input[type="file"]');
let panel= $('#sortedFile');

console.log(panel);

input.addEventListener('change',function(e){
console.log(input.files)
const reader =new FileReader();


function Arraysort(array1,array2){

    for(let i=0;i<array1.length;i++){
        for(let j=i+1;j<array1.length;j++){
            
            if(array1[i][0]===array1[j][0]){
           
            if(array1[i][1]!=array1[j][1]){
            array2[i][1]=array1[i][1]+"/"+array1[j][1];
         }
            array2.splice(j,1);
        }
        }
        
    }
    return array2;
}
function printArray(array,field){
    field.html(function(){
        let str='';
        for(let i=0;i<array.length;i++){
            str=str+array[i][0]+":"+array[i][1]+"<br>";
        }
        return str;
    });
}

reader.onload =function(){
    let lines= reader.result.split('\n').map(function(line){
        return line.split(':');
    })
    let lineSecond= reader.result.split('\n').map(function(line){
        return line.split(':');
    })
    Arraysort(lines,lineSecond);
    console.log(lineSecond);
    printArray(lineSecond,panel);
}
reader.readAsText(input.files[0]);
},false);


//EX funzione non implementata
/*  for(let i=0;i<lines.length;i++){
        for(let j=i+1;j<lines.length;j++){
            
            if(lines[i][0]===lines[j][0]){
           
            if(lines[i][1]!=lines[j][1]){
            lineSecond[i][1]=lines[i][1]+"/"+lines[j][1];
         }
            lineSecond.splice(j,1);
        }else{
         
        }
        }
        
    }*/