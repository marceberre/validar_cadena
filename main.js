window.onload = function(){
    document.getElementById('error').style.display = 'none';
    document.getElementById('okis').style.display = 'none';
 };

function chequear(){
    var largo = document.getElementById('nom').value;
    var ok = document.getElementById('okis');
    var error = document.getElementById('error');
    
    
    if(largo.length <=6){
        ok.style.display = '';
        error.style.display = 'none';
    }else{
        ok.style.display = 'none';
        error.style.display = '';
    }
}