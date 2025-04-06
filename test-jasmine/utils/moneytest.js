import  {formatCurrency} from "../../script/utils/money.js";
describe('Test Suit: formatCurrency',()=>{
   it('Convert cents in to Dollar',()=>{
     expect(formatCurrency(2095)).toEqual('20.95');
   });

   it('Works with Zero',()=>{
    expect(formatCurrency(0)).toEqual('0.00');
   });

   it('Rounds up to the Nearest Cents',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
   });
   
   
});