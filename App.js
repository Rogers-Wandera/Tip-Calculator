var Billamount =document.getElementById('billamount');
var Percentagetip= document.getElementById('perc');
var Tipamount = document.getElementById('tip');
var Total= document.getElementById('total');
var button = document.getElementById('calculate');
var error = document.getElementById('error');
var btn=document.getElementById('reset ')
button.addEventListener('click', function(){
    var bill = Number(Billamount.value);
    var percentage= Number(Percentagetip.value);
    if(isNaN(bill) || bill<=0 || bill===null){
        error.value='Enter bill amount';
    }
    else if(isNaN(percentage) || percentage <= 0 || percentage === null){
        error.value="Enter percentage tip";
    }
    else{
        var calculatedtipamount =  bill * percentage/100;
        Tipamount.value = calculatedtipamount;

        var calculatedtotal = bill + calculatedtipamount;
        Total.value =  calculatedtotal;
    }
});
btn.addEventListener('click', function(){
    Billamount.value = null;
    Percentagetip.value = null; 
    Tipamount.value = null;
    Total.value = null
    error.value = null;
     
});


