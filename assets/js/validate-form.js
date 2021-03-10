function validateForm() {
    appendValTextCity();
    var d=new Date();
    var date = (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear();
    console.log(date);
    console.log(document.getElementById('txtdateofbirth').innerText);
}
function valTextUserName() {
    var userName = document.getElementById('txtusername');
    var lblthongbao = document.getElementById('lblusername');
    var reg_spaces_txtusername = /\s/g;
    var reg_text_txtussername_AZ = /^(?=.*[A-Z]).+$/g;//ít nhất 1 chữ hoa 
    var reg_text_txtussername_az = /^(?=.*[a-z]).+$/g;//ít nhất 1 chữ thường
    var reg_text_txtussername_09 = /^(?=.*[0-9]).+$/g;//ít nhất 1 số 
    if (userName.value == '') {
        lblthongbao.textContent = " *Please enter your username";
        return false;
    }
    else if (reg_spaces_txtusername.test(userName.value)) {
        lblthongbao.textContent = ' *Do not enter spaces';
        return false;
    }
    else if (!(reg_text_txtussername_AZ.test(userName.value)) || !(reg_text_txtussername_az.test(userName.value)) || !(reg_text_txtussername_09.test(userName.value))) {
        lblthongbao.textContent = ' *At least 1 uppercase letter, 1 lowercase letter, 1 number';
        return false;
    }
    else {
        lblthongbao.textContent = '';
        return true;
    }


}
function valTextPassWord() {
    var passWord = document.getElementById('txtpassword');
    var lblthongbao = document.getElementById('lblpassword');
    var reg_spaces_txtpassword = /\s/g;
    var reg_text_txtpassword_special = /[-+=_)(\*&\^%\$#@!~”’:;|\}\]{[/?.>,<]+/g;// kí tự đặ biệt
    var reg_text_txtpassword_limit = /[\w\.]{5,}/g;// ít nhất 6 kí tự

    if (passWord.value == '') {
        lblthongbao.textContent = " *Please enter your password";
        return false;
    }
    else if (reg_spaces_txtpassword.test(passWord.value)) {
        lblthongbao.textContent = ' *Do not enter spaces';
        return false;
    }
    else if (reg_text_txtpassword_special.test(passWord.value)) {
        lblthongbao.textContent = ' *Do not enter characters special : -+=_)(\*&\^%\$#@!~”’:;|\}\]{[/?.>,<';
        return false;
    }
    else if (!reg_text_txtpassword_limit.test(passWord.value)) {
        lblthongbao.textContent = ' *At least 6 letter';
        return false;
    }
    else {
        lblthongbao.textContent = '';
        return true;
    }
}
function valTextConfirmPassWord() {
    var passWord = document.getElementById('txtpassword');
    var lblthongbao = document.getElementById('lblconfirmpass');
    var confirmPass = document.getElementById('txtconfirmpass');
    if (confirmPass.value == '') {
        lblthongbao.textContent = " *Please enter your confirm password";
        return false;
    }
    else if (confirmPass.value != passWord.value) {
        lblthongbao.textContent = ' *No match with password';
        return false;
    }
    else {
        lblthongbao.textContent = '';
        return true;
    }
}
function valTextFullName() {
    var fullName = document.getElementById('txtfullname');
    var lblthongbao = document.getElementById('lblfullname');
    var reg_text_txtfullname = /[-+=_)(\*&\^%\$#@!~”’:;|\}\]{[/?.>,<\d]+/g;
    if (fullName.value == '') {
        lblthongbao.textContent = " *Please enter your fullname";
        return false;
    }
    else if (reg_text_txtfullname.test(fullName.value)) {

        lblthongbao.textContent = ' *Do not enter characters special : -+=_)(\*&\^%\$#@!~”’:;|\}\]{[/?.>,<';
        return false;
    }

    else {
        lblthongbao.textContent = '';
        return true;
    }
}
function valTextPhoneNumber() {
    var phoneNumber = document.getElementById('txtphonenumber');
    var lblthongbao = document.getElementById('lblphonenumber');
    var reg_text_phoneNumber = /^0[9832][\d]{8}$/g;
    if (phoneNumber.value == '') {
        lblthongbao.textContent = " *Please enter your phone number";
        return false;
    }
    else if (!reg_text_phoneNumber.test(phoneNumber.value)) {

        lblthongbao.textContent = ' *Incorrect format of phone number start 0[9832]... and 10 number';
        return false;
    }

    else {
        lblthongbao.textContent = '';
        return true;
    }
}
function valTextDate() {
    var dateOfBirth = document.getElementById('txtdateofbirth');
    var lblthongbao = document.getElementById('lbldateofbirth');
    if (dateOfBirth.value == '' || dateOfBirth.value == null) {
        lblthongbao.textContent = " *Please enter your date of birth";
        return false;
    }

    else {
        lblthongbao.textContent = '';
        return true;
    }
}
function valTextEmail() {
    var email = document.getElementById('txtemail');
    var lblthongbao = document.getElementById('lblemail');
    var reg_text_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.value == '') {
        lblthongbao.textContent = " *Please enter your email";
        return false;
    }
    else if (!reg_text_email.test(email.value)) {

        lblthongbao.textContent = ' *Incorrect format of email';
        return false;
    }

    else {
        lblthongbao.textContent = '';
        return true;
    }
}
var linkfb=document.getElementById('txtlinkfb');
 linkfb.onblur=valTextLinkFB;
function valTextLinkFB(){
    var linkfb = document.getElementById('txtlinkfb');
    var lblthongbao= document.getElementById('lbllinkfb');
    var reg_spaces_txtlinkfb=/\s/g;
    var reg_txtlinkfb=/^(https:\/\/www.facebook.com\/\w+\.+\w+\.+\d+)$/g;
    if(linkfb.value==""){
        lblthongbao.textContent=' *Please enter your link facebook';
        return false;
    }
    else if(reg_spaces_txtlinkfb.test(linkfb.value)){
        lblthongbao.textContent=' *Do not enter spaces';
        return false;
    }
    else if(!reg_txtlinkfb.test(linkfb.value)){
        lblthongbao.textContent=' *Incorrect format of link https://www.facebook.com\....';
        return false
    }
    else{
        lblthongbao.textContent='';
        return true;
    }
}
function onSubmit() {
    var userName = valTextUserName();
    var passWord = valTextPassWord();
    var fullName = valTextFullName();
    var dateOfBirth = valTextDate();
    var email = valTextEmail();
    var phoneNumber = valTextPhoneNumber();
    var confirmPass = valTextConfirmPassWord();
    var linkFB= valTextLinkFB()
    if (userName == false || passWord == false || fullName == false || dateOfBirth == false || email == false || phoneNumber == false || confirmPass == false||linkFB==false) {
        alert('Submit fail');
    }

    else {
        alert('Submit Success');
    }
    console.log(appendValTextCity());

}
function appendValTextCity() {
    document.getElementById('txtcity').innerHTML = '';
    const cityarray = ['City','Hà Nội', 'TP Hồ Chí Minh'];
    let i = 0;
    cityarray.forEach(element => {

        var cityselector = document.createElement('option');
        cityselector.value = i;
        var textcity = document.createTextNode(element);
        cityselector.appendChild(textcity);
        document.getElementById('txtcity').appendChild(cityselector);
        
        i++;
    });
}
function changeTextCity(citybtn) {
    
    let value = citybtn.value;
    document.getElementById('txtdistrict').innerHTML='';
    const districtarray_HN = ['Ba Đình', 'Thanh Trì', 'Đống Đa', 'Cầu Giấy', 'Mê Linh', 'Thanh Xuân', 'Hà Đông', 'Hoàng Mai', 'Thường Tín'];
    const districtarray_HCM = ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Tân Bình', 'Bình Chánh', 'Tân Sơn Nhất'];
    var lblthongbao = document.getElementById('lbldistrist');
    if (value === '1') {
        let i = 1;
        
        districtarray_HN.forEach(element => {
            let districtselector = document.createElement('option');
            districtselector.value = i;
            i++;
            let textdistrict = document.createTextNode(element);
            districtselector.appendChild(textdistrict);
            document.getElementById('txtdistrict').appendChild(districtselector);
        });
        return true;
    }
    else if (value === '2') {
        let i = 1;
        
        districtarray_HCM.forEach(element => {
            let districtselector1 = document.createElement('option');
            districtselector1.value = i;
            i++;
            let textdistrict1 = document.createTextNode(element);
            districtselector1.appendChild(textdistrict1);
            document.getElementById('txtdistrict').appendChild(districtselector1);
        });
        return true;
    }
    else if (value === '0'){
        lblthongbao.textContent=' *Please enter your city';
        return false
    }  
}

