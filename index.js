function validate () {
    let name1 = document.getElementById('Name1').value;
    let Email1 = document.getElementById('Email1').value;
    let Password1 = document.getElementById('Password1').value;
    
 if ((name1==null) || (name1=="")){
    document.getElementById('name').innerHTML = "username empty";
     return false;
 }
 // else{}

 if((name1.length<=2) || (name1.length>=10)){
    document.getElementById('name').innerHTML = "username too short";
    return false;
 }
// else{}

if ((Email1==null) || (Email1=="")){
    document.getElementById('mail').innerHTML = "enter your email";
    return false;
}
// else{}

if((Email1.charAt(Email1.length-4)!=".") && (Email1.charAt(Email1.length-3)!=".")){
    
    document.getElementById('mail').innerHTML =" . invalid position";
    return false;
}
// else{}

if(Email1.indexOf('@') <= 0){
    document.getElementById('mail').innerHTML = "@ invalidate position";
    return false;
}
// else{}
 

if ((Password1.length<=2) || (Password1.length>=10)){
    document.getElementById('password').innerHTML = "password too short";
    return false;
}
// else{}

return true;
}
