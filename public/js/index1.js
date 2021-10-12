
//to get the number from url and select car according to number 
const {number}=Qs.parse(location.search, {                     //we used qs library and a method called parse
    ignoreQueryPrefix: true,                                                //to ignore symbols and other characters from url
  });

var vehicle=document.getElementById('vehicle');                //<select> has id=vehicle
vehicle.selectedIndex = number;                                //car gets selected according to index(it starts from 0)


//extra part how we can set <select>option value automatically
    // selectElement("vehicle", "city");
    // function selectElement(id,valueToSelect) {    
    //     let element = document.getElementById(id);
    //     element.value = valueToSelect;
    // }
    
    // document.getElementById('vehicle').selectedIndex = 3;
    // document.getElementById('vehicle').value = "scorpio";


//to calculate the price
var vehicle=document.getElementById('vehicle');               //we need name of car so that we can set prices for calculation
var duration=document.getElementById('duration');             //duration gives us number
var timespan=document.getElementById('timespan');             //it tells the duration is in hours/days/months
var btn=document.getElementById("btn");                       //we need to perform calculation on the click of button(calculate price)
var calculatedprice=document.getElementById('calculatedprice'); //we need to show calculated price in span

btn.onclick = function(e){
  e.preventDefault();
  var car=vehicle.selectedIndex;           //it tells index of eg. 0=swift () 
  //(we can also use car=vehicle.value and then change the for loop according to it)
  var number=duration.value;        
  //var time=timespan.options[timespan.selectedIndex].text;                  //it gives output Hour/Hours
  var time=timespan.selectedIndex;
  
  if(car==0){                              //for swift
    if(time==0){                           //for hours
      finalprice=number*259;
      console.log(finalprice);
    }
    else if(time==1){                      //for days
      finalprice=number*1699;
      console.log(finalprice);
    }
    else {                                //for months
      finalprice=number*26999;
      console.log(finalprice);
    }
  }

  else if(car==1){                       //for honda city
    if(time==0){                         //for hours
      finalprice=number*329;
      console.log(finalprice);
    }
    else if(time==1){                   //for days
      finalprice=number*2099;
      console.log(finalprice);
    }
    else {                             //for months
      finalprice=number*32999;
      console.log(finalprice);
    }
  }

  else if(car==2){                    //for nexon
    if(time==0){
      finalprice=number*299;
      console.log(finalprice);
    }
    else if(time==1){
      finalprice=number*1999;
      console.log(finalprice);
    }
    else {
      finalprice=number*31799;
      console.log(finalprice);
    }
  }

  else if(car==3){                        //for scorpio
    if(time==0){
      finalprice=number*339;
      console.log(finalprice);
    }
    else if(time==1){
      finalprice=number*2399;
      console.log(finalprice);
    }
    else {
      finalprice=number*34999;
      console.log(finalprice);
    }
  }

  else if(car==4){                             //for innova
    if(time==0){
      finalprice=number*399;
      console.log(finalprice);
    }
    else if(time==1){
      finalprice=number*2599;
      console.log(finalprice);
    }
    else {
      finalprice=number*38999;
      console.log(finalprice);
    }
  }

  else {                                    //for mercedes c class
    if(time==0){
      finalprice=number*799;
      console.log(finalprice);
    }
    else if(time==1){
      finalprice=number*3499;
      console.log(finalprice);
    }
    else {
      finalprice=number*44999;
      console.log(finalprice);
    }
  }

  calculatedprice.value=`Rs. ${finalprice}`;             //display the calculated value in <span> whose id is calculatedprice

}



//form validation
function formvalidate(){                                               //on click of submit button this function runs
  document.getElementById('nameerror').innerHTML="";                   //if on first click of submit we get three errors, we made corrections in two of them and then when we again click on submit then there should only one error(red text) and the other two should be blank(ie. no red text)
  document.getElementById('mobileerror').innerHTML="";
  document.getElementById('emailerror').innerHTML="";
  document.getElementById('address').innerHTML="";
  document.getElementById('licenseerror').innerHTML="";
  document.getElementById('datetimeerror').innerHTML="";
  document.getElementById('durationerror').innerHTML="";


  var returnval=true;                                               //we return the returnval(ie. true or false) to form. here we have set it true initially and if later it can become false in case of error
  
  //to validate name
  var clientname = document.getElementById("name").value;
  if((clientname.length<7)&&(!checkname(clientname))){             //if length is less than 7 and also user tries to enter number or symbols
    document.getElementById("name").focus();
    document.getElementById('nameerror').innerHTML="*Name is too short and Only characters are allowed";
    returnval= false;                                              //if we directly write return false then the later code will not be executed
  }
  else if(clientname.length<7){                                    //if only length is less than 7
    document.getElementById("name").focus();
    document.getElementById('nameerror').innerHTML="*Name is too short";
    returnval= false;
  }
  else if(!checkname(clientname)){                                //if user tries to enter numbers or symbols. Here checkname() is function that returns true if only a-z is used and if numbers or symbols are present then it returns false 
    document.getElementById("name").focus();
    document.getElementById('nameerror').innerHTML="*Only characters are allowed";
    returnval= false;
  }
  
  //to validate mobile number
  var clientmobile = document.getElementById("mobile").value;
  if(!checkmobile(clientmobile)){                                  //ckeckmobile function is called
    document.getElementById("mobile").focus();
    document.getElementById('mobileerror').innerHTML="*Enter valid mobile number";
    returnval= false;
  }
  
  //to validate email
  var clientemail = document.getElementById("email").value;       //ckeckemail function is called
  if(!checkemail(clientemail)){
    document.getElementById("email").focus();
    document.getElementById('emailerror').innerHTML="*Enter a valid email";
    returnval= false;
  }
  
  //to validate address
  var clientaddress = document.getElementById("address").value;
  if(clientaddress.length<20){                                          //ckeckaddress function is called
    document.getElementById("address").focus();
    document.getElementById('addresserror').innerHTML="*Enter Detailed Address";
    returnval= false;
  }

  //to validate license
  var clientlicense = document.getElementById("license").value;
  if(!checklicense(clientlicense)){                                       //ckecklicense function is called
    document.getElementById("license").focus();
    document.getElementById("licenseerror").innerHTML="*Enter a valid license number";
    returnval=false;
  }

  //to vaidate date
  var today=new Date();                      //it tells us date & time
  var date=today.getDate();                  //gives todays date eg.02
  var month=today.getMonth();                //gives current month.It starts from 0
  var year = today.getFullYear();           //gives current year. eg.2021
  
  var clientdate = document.getElementById("datetime").value;
  var substrdate = clientdate.substring(8,10);                   //gives date eg.15
  var substrmonth = clientdate.substring(5,7);                   //gives month eg.6
  var substryear = clientdate.substring(0,4);                    //gives year eg.2021
  
  if(substryear<year){                                           //if user enters previous year
    document.getElementById("datetime").focus();
    document.getElementById("datetimeerror").innerHTML="*Enter a valid year";
    returnval = false;
  }
  else if((substrdate<date) && (substrmonth==(month+1))){                  //we check if user enters previous date in the same month.  the same date and month can be in the previous year also therefor we first checked for year
    //substrmonth sarts from 1 and month starts from 0 therefore we used (month+1)
    document.getElementById("datetime").focus();
    document.getElementById("datetimeerror").innerHTML="*Enter a valid date";
    returnval = false;
  }
  else if((substrmonth<(month+1)) && (substryear==year)){                 //we check if user enters previous month from same year      
    document.getElementById("datetime").focus();
    document.getElementById("datetimeerror").innerHTML="*Enter a valid month";
    returnval = false;
  }
  
  //to validate duration
  var clientduration = document.getElementById("duration").value;
  if(clientduration<1){
    document.getElementById("duration").focus();
    document.getElementById("durationerror").innerHTML="*Enter valid duration";
    returnval = false;
  }

  return returnval;                                       //<form onsubmit="return formvalidate()"
}


function checkname(name){                               //function to check name ie. only alphabets are allowed
  return /^([a-zA-Z ]+)$/.test(name);                   //returns true or false
}

function checkemail(email){
  return /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]{3})$/.test(email); //it is regular expression
}

function checkmobile(mobile){                     //function to check mobile number ie. it should be compulsorily 10 digit and only numbers
  return /^[0-9]{10}$/.test(mobile);
}

function checklicense(license){
  return /^([a-zA-Z]{2})([0-9]{2})([ -_])?([0-9]{11})$/.test(license);  //first 2 alphabets then 2 digits (then optional blank space or - or_ [? is for zero or one occurence]) and then 11 digits
}








