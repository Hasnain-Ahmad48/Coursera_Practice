let grocery_1,grocery_2,grocery_3;

function calculateGrocery(){    
   grocery_1= parseFloat(document.getElementById("Grocery-1").value) ;
   grocery_2= parseFloat(document.getElementById("Grocery-2").value);
   grocery_3= parseFloat(document.getElementById("Grocery-3").value)

   let showResult= (grocery_1) + (grocery_2) + (grocery_3);

   document.getElementById('showresult').innerHTML=`The total amount is: ${showResult}`
}