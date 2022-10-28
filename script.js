function createRow(tagname,attrname,attrvalue){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    return element;
}

function createCol(tagname,attrname,attrvalue){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    return element;
}

function createInput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.setAttribute(attrname1,attrvalue1);
    return element;
}

function createLabel(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.setAttribute(attrname1,attrvalue1);
    element.innerHTML=content;
    return element;
}

function table(tagname,attrname,attrvalue){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    return element;
}

function thead(tagname,attrname,attrvalue){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    return element;
}

function th(tagname,content){
    var element=document.createElement(tagname);
    element.innerHTML=content;
    return element;
}
function createBreak(tagname){
    var element=document.createElement(tagname);
    return element;
}

function createRadio(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.setAttribute(attrname1,attrvalue1);
    element.setAttribute(attrname2,attrvalue2);
    element.setAttribute(attrname3,attrvalue3);
    return element
}

var heading=document.createElement("h1")
heading.setAttribute("id","title")
heading.innerHTML="Survey-form"

var des=document.createElement("p")
des.setAttribute("id","description")
des.innerHTML="creating survey-form using DOM"

document.body.append(heading,des)

var element=document.createElement("div");
element.setAttribute("class","container");

var row1=createRow("div","class","row")

var col1=createCol("div","class","col-4")

var form1=document.createElement("form")
form1.setAttribute("id","survey-form")

var label1=createLabel("label","for","firstname","id","fn","Firstname")
var br1=createBreak("br")
var int1=createInput("input","type","text","id","firstname")
var br2=createBreak("br")

var label2=createLabel("label","for","lname","id","ln","Lastname")
var br3=createBreak("br")
var int2=createInput("input","type","text","id","lname")
var br4=createBreak("br")

var label3=createLabel("label","for","address","id","add","Address")
var br5=createBreak("br")
var int3=createInput("input","type","text","id","address")
var br6=createBreak("br")

var label4=createLabel("label","for","pincode","id","pin","Pincode")
var br7=createBreak("br")
var int4=createInput("input","type","number","id","pincode")
var br8=createBreak("br")

var label5=createLabel("label","for","gender","id","gen","Gender")
var br9=createBreak("br")

var radio1=createRadio("input","type","radio","id","male","value","male","name","gender")
var lab1=createLabel("label","for","male","id","gen-male","Male")
var break1=createBreak("br")

var radio2=createRadio("input","type","radio","id","female","value","female","name","gender")
var lab2=createLabel("label","for","female","id","gen-female","Female")
var break2=createBreak("br")

var label6=createLabel("label","for","food","id","choice","Choice of food")
var br10=createBreak("br")

var chk1=createRadio("input","type","checkbox","id","southindian","value","South-indian","name","food")
var chklab1=createLabel("label","for","south-indian","id","chk1","south-indian")


var chk2=createRadio("input","type","checkbox","id","northindian","value","North-indian","name","food")
var chklab2=createLabel("label","for","north-indian","id","chk1","north-indian")
var chkbr2=createBreak("br")

var chk3=createRadio("input","type","checkbox","id","chinese","value","Chinese","name","food")
var chklab3=createLabel("label","for","chinese","id","china","chinese")

var chk4=createRadio("input","type","checkbox","id","italian","value","Italian","name","food")
var chklab4=createLabel("label","for","italian","id","italy","italian")
var chkbr4=createBreak("br")

var chk5=createRadio("input","type","checkbox","id","continental","value","Continental","name","food")
var chklab5=createLabel("label","for","continental","id","conti","continental")



var label11=createLabel("label","for","state","id","count","State")
var br11=createBreak("br")
var int11=createInput("input","type","text","id","state")
var br12=createBreak("br")

var label12=createLabel("label","for","country","id","count","Country")
var br13=createBreak("br")
var int12=createInput("input","type","text","id","country")
var br14=createBreak("br")

var but=document.createElement("button")
but.addEventListener("click",fun)
but.innerHTML="Submit"

form1.append(label1,br1,int1,br2,label2,br3,int2,br4,label3,br5,int3,br6,label4,br7,int4,br8,label5,br9,radio1,lab1,break1,radio2,lab2,break2,label6,br10)
form1.append(chk1,chklab1,chk2,chklab2,chkbr2,chk3,chklab3,chk4,chklab4,chk5,chklab5,chkbr4,label11,br11,int11,br12,label12,br13,int12,br14)
col1.append(form1,but)

function createTh(tagname,content){
    var element=document.createElement(tagname);
    element.innerHTML=content
    return element
}

var colum=createCol("div","class","col-8");

var tab=document.createElement("table")
tab.setAttribute("class","table")

var thead1=document.createElement("thead")







var th1=createTh("th","Firstname")
var th2=createTh("th","Lastname")
var th3=createTh("th","Address")
var th4=createTh("th","Pincode")
var th5=createTh("th","Gender")
var th6=createTh("th","Choice of food")
var th7=createTh("th","State")
var th8=createTh("th","Country")

var tbody1=document.createElement("tbody")
tbody1.setAttribute("id","tody")


thead1.append(th1,th2,th3,th4,th5,th6,th7,th8)
tab.append(thead1,tbody1)
colum.append(tab)


function fun(){
  var fn=document.getElementById("firstname").value
  var ln=document.getElementById("lname").value
  var add=document.getElementById("address").value
  var pin=document.getElementById("pincode").value
  var st=document.getElementById("state").value
  var count=document.getElementById("country").value

  var tr1=document.createElement("tr")

  var td1=document.createElement("td")
  td1.innerHTML=fn
  var td2=document.createElement("td")
  td2.innerHTML=ln
  var td3=document.createElement("td")
  td3.innerHTML=add
  var td4=document.createElement("td")
  td4.innerHTML=pin
  var td7=document.createElement("td")
  td7.innerHTML=st

  var td8=document.createElement("td")
  td8.innerHTML=count

  if(male.checked){
    var gen=document.getElementById("male").value
    var td5=document.createElement("td")
    td5.innerHTML=gen
  }else{
    var gen=document.getElementById("female").value
    var td5=document.createElement("td")
    td5.innerHTML=gen
  }

  var temp=[]
  var td6=document.createElement("td")
  td6.innerHTML=temp

  if(southindian.checked){
    var a=document.getElementById("southindian").value
    temp.push(a)
  }
  if(northindian.checked){
    var b=document.getElementById("northindian").value
    temp.push(b)
  }
  if(chinese.checked){
    var c=document.getElementById("chinese").value
    temp.push(c)
  }
  if(italian.checked){
    var d=document.getElementById("italian").value
    temp.push(d)
  }
  if(continental.checked){
    var e=document.getElementById("continental").value
    temp.push(e)
  }
  td6.append(temp)

  if(temp.length<2){
    alert("Select choice of food minimun is 2")
  }else{
    tr1.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.getElementById("tody").append(tr1)
  }
  document.getElementById("firstname").value=''
  document.getElementById("lname").value=''
  document.getElementById("address").value=''
  document.getElementById("pincode").value=''
  document.getElementById("state").value=''
  document.getElementById("country").value=''
}





row1.append(col1,colum)
element.append(row1)
document.body.append(element)



