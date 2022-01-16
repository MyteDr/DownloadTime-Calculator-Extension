$(document).ready(function(){
    $('#press').click(function(){
        if(($('#file').val() =='') || ($('#speed').val() =='')){
            alert('Please Do Not Leave The Field Blank!');
        }
        else{
            $('#gb').val()=='GB' ? ($('#mbps').val()=='MB/sec' ? calc($('#file').val(),$('#speed').val(),true,true) : calc($('#file').val(),$('#speed').val(),true,false)):($('#mbps').val()=='MB/sec' ? calc($('#file').val(),$('#speed').val(),false,true):calc($('#file').val(),$('#speed').val(),false,false));
        }
    });
});
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
        $('#result').html(`${Hour == 0 ? '' : (Hour+(Hour == 1 ? ' Hour' :' Hours'))} ${Minute == 0 ? '' : (Minute+(Minute ==1 ? ' Minute' : ' Minutes'))} ${Seconds == 0 ? '':(Seconds+(Seconds == 1 ? ' Second' : ' Seconds'))}`);
    }
}