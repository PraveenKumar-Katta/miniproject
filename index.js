//code to find the even and odd numbers in an array
const arr=[1,5,3,4,2,5,12,4,2,55,211,7,9,13];
let evenNums=[];
let OddNums=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evenNums.push(arr[i]);
    }
    else{
        OddNums.push(arr[i]);
    }
}
console.log(evenNums);
console.log(OddNums);