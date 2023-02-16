const inputVal=document.getElementById('unit');
let getValue;
const convertBtn=document.getElementById('convert-btn');
const OutputlenEl=document.getElementById('output-len');
const OutputvolEl=document.getElementById('output-vol');
const OutputmassEl=document.getElementById('output-mass');

function meter(){
    let meterval;
    meterval=getValue*3.281;
    return meterval.toFixed(3);

}
function feet(){
    let feetval;
    feetval=getValue/3.281;
    return feetval.toFixed(3);

}
function liters(){
    let literval;
    literval=getValue*0.264;
    return literval.toFixed(3);

}
function gallon(){
    let gallonval;
    gallonval=getValue/0.264;
    return gallonval.toFixed(3);

}
function Kilogram(){
    let Kilogramval;
    Kilogramval=getValue*2.204;
    return Kilogramval.toFixed(3);

}
function pound(){
    let poundval;
    poundval=getValue/2.204;
    return poundval.toFixed(3);

}

convertBtn.addEventListener('click',function(){
    getValue=Number(inputVal.value);
    console.log(getValue);
    OutputlenEl.textContent=`${getValue} meters = ${meter()} feet | 
    ${getValue} feet = ${feet()} meter  `;

    OutputvolEl.textContent=`${getValue} liters = ${liters()} gallons | 
    ${getValue} gallons = ${gallon()} liters  `;
    
    OutputmassEl.textContent=`${getValue} kilos = ${Kilogram()} pounds | 
    ${getValue} pounds = ${pound()} kilos  `;

});
