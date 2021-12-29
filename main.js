const speed = document.getElementById('speed');
const file = document.getElementById('file');
const gp =document.getElementById('gb');
const mbps =document.getElementById('mbps');
const result =document.getElementById('result');
const button = document.getElementById('press');

button.addEventListener('click',Onclick);
function Onclick(){
    if(file.value=='' || speed.value=='')
    {
        alert('Please Do Not Leave The Field Blank!');
    }
    else{
        if(gb.value == 'GB'){
            if(mbps.value =='MB/sec')
            {
                calc(file.value,speed.value,true,true);
            }
            else
            {
                calc(file.value,speed.value,true,false);
            }
        }
        else
        {
            if(mbps.value =='MB/sec')
            {
                calc(file.value,speed.value,false,true);
            }
            else
            {
                calc(file.value,speed.value,false,false);
            }
        }
    }

}
function calc(file,speed,gb,mbps){
    if(file =="0" || speed=="0")
    {
        alert('Please Do Not Enter Zero!');
    }
    else{
        let size= gb ? parseFloat(file)*1000 : parseFloat(file);
        let speed2 = mbps ? parseFloat(speed) : parseFloat(speed)/8;
        let Hour =parseInt(size/speed2/3600);
        let Minute = parseInt(size/speed2/60 % 60);
        let Seconds = parseInt(size/speed2 %3600) %60;
        result.textContent=`${Hour == 0 ? '' : (Hour+(Hour == 1 ? ' Hour' :' Hours'))} ${Minute == 0 ? '' : (Minute+(Minute ==1 ? ' Minute' : ' Minutes'))} ${Seconds == 0 ? '':(Seconds+(Seconds == 1 ? ' Second' : ' Seconds'))}`;
    }
}