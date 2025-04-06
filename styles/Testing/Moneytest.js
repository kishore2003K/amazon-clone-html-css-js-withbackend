import  {formatCurrency} from "../script/utils/money.js";

console.log("Test Suit: formatCurrency")

console.log('Convert cents in to Dollar');
if(formatCurrency(2095)==='20.95'){
    console.log('passed');
}
else{
    console.log('failed');
}
console.log("Works with Zero");
if(formatCurrency(0)==='0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}

console.log('Rounds up to the Nearest Cents')

if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}
else{
    console.log('failed');
}