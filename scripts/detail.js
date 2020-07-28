
cal();


function cal(){
    var adults = document.getElementById('adults').value;
var name = document.getElementById('name').value;
var fromDate = document.getElementById('from_date').value;
var toDate = document.getElementById('to_date').value;

  
var Difference_In_Time = toDate.getTime() - fromDate.getTime(); 
  

var Days = Difference_In_Time / (1000 * 3600 * 24);

    var total = (adults*1000)*Days;
    document.getElementById('total').innerHTML = +total;
}


