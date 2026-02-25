function calculateTip(){
    const amount=document.getElementById("bill").value;
    const tipPercentage=document.getElementById("tip").value;
    const tip=(amount*tipPercentage)/100;
    const total=document.getElementById("result");
    total.innerHTML=parseInt(amount)+parseInt(tip);
}