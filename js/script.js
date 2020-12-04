function conver(){

    let varNum = document.getElementById('inputNumber').value;
    let varResult = document.getElementById('Result');

    let i = 0;
    let lenghtNum = varNum.length;
    let NumWord= '';
    
    
    for (; i < lenghtNum; i++) {

        if(varNum.charAt(i) == '0'){
            NumWord += 'zero';
        }else if(varNum.charAt(i) == '1'){
            NumWord += 'one';
        }else if(varNum.charAt(i) == '2'){
            NumWord += 'two';
        }else if(varNum.charAt(i) == '3'){
            NumWord +=  'three';
        }else if(varNum.charAt(i) == '4'){
            NumWord += 'four';
        }else if(varNum.charAt(i) == '5'){
            NumWord += 'five';
        }else if(varNum.charAt(i) == '6'){
            NumWord += 'six';
        }else if(varNum.charAt(i) == '7'){
            NumWord += 'seven';
        }else if(varNum.charAt(i) == '8'){
            NumWord += 'eight';
        }else if(varNum.charAt(i) == '9'){
            NumWord += 'nine';
        }
       
        

    } 
    let errorVal1 = document.getElementById('errorval1');

    let isError = false;

    if(varNum === ''){
        errorVal1.className = 'error';
        isError = true;
    }else{
        errorVal1.className = 'error d-none';
    }

    if(!isError){
        varResult.value = NumWord;
    }
    
   
}

function Palindrome()
	{
        let varResult = document.getElementById('Result');

		var rem, temp, final = 0;
		var number = Number(document.getElementById('inputNumber').value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
        }
       

		if(final==temp)
		{
            
            varResult.value = "The inputed number is Palindrome";
		}
		else
		{
            
            varResult.value = "The inputted number is not palindrome";
        }
  
    }

    
    function bubbleSort(){

        let varNum = document.getElementById('inputNumber').value;
        let varResult = document.getElementById('Result');
        let text ='';

        function swap(items, firstIndex, secondIndex){
            var temp = items[firstIndex];
            items[firstIndex] = items[secondIndex];
            items[secondIndex] = temp;
        }
          
            varNum = varNum.split(',');
            var items = varNum;
            console.log(items);
        for (i in items)
        {
           items.push(parseFloat(items.shift()));
        }
        console.log(items);

        var len = items.length,
            i, j, stop;
    
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (items[j] > items[j+1]){
                    swap(items, j, j+1);
                }
            }
        }
    
        
        for (i = 0; i < items.length; i++) {
            text +=items[i] +"\t";
          }
          varResult.value = text;
    }


function sum(){
    let varNum = document.getElementById('inputNumber').value;
    let varResult = document.getElementById('Result');
    var i = 0;
    var result = 0;

    varNum = varNum.split('+');
    console.log(varNum);
    var arr = varNum;
    

    for (i in arr)
        {
           arr.push(parseFloat(arr.shift()));
        }
        console.log(arr);

    for (i of arr){
        result += i; 
    }


    varResult.value = result;
}



 

