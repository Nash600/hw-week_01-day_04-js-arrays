const summation = function (number) {

    let sum = 0;
    arr ="";
    for (let i = 1; i <= number; i++) {
        arr = arr + i +" + " ;
        
        sum = sum+ i;
        
    }console.log( arr +" = " +sum );
}
summation(10);
/************************ */
const summationEven = function (num) {

    let arr = [1,2,3,4,5];
    let sum = 0;

    for (let i= 0; i < num; i++) {
        if (arr[i] % 2 === 0){
              sum = sum + arr[i];
        }
    }console.log(sum);
}
summationEven(5);
/************************* */
const avarg = function (array){

    let sum =0
    let avg;
    
    for (let i= 0; i < array.length; i++ ) {
        sum = sum + array[i];
    }
    avg = sum / array.length;
    console.log(avg);
}
avarg ([8,2,2,4]);

caterpillar["c","a","t","e","r","p", "i", "l","l","a","r"];
/***************************** */
const wordRev = function () {

    let myArray = ["c","a","t","e","r","p", "i", "l","l","a","r"];
    
    console.log(myArray.reverse());
}
wordRev();

const comb = function (words) {

    for ( let i = 0; i < words.length; i++) {

         words[i];
        console.log(words.join("-"));
    }
}
comb(['test1', 'test2', 'test3']);
 /********************************************** */