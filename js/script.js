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

    function quickSort(){
        let varNum = document.getElementById('inputNumber').value;
        let varResult = document.getElementById('Result');

        let text ='';
        varNum = varNum.split(',');
            let arr = varNum;
            let low = arr[0];
            let high = arr[arr.length];

        let quickSort = (arr, low, high) => {
            let partition = (arr, low, high) => {
              pivot = arr[high];
              let i = low - 1;
              for (j = low; j <= high - 1; j++) {
                if (arr[j] < pivot) {
                  i++;
                  let tmp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = tmp;
                }
              }
              let tmp = arr[i + 1];
              arr[i + 1] = arr[high];
              arr[high] = tmp;
              return i + 1;
            };
            if (low < high) {
              pi = partition(arr, low, high);
          
              quickSort(arr, low, pi - 1);
              quickSort(arr, pi + 1, high);
            }
          };

          for (i = 0; i < quickSort.length; i++) {
            text +=arr[i] +"\t";
          }
          varResult.value = text;

    }

