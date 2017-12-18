//创建键盘方法（必需先创建）
function eKeyboard(Usercolor){
	color = Usercolor;
	document.querySelector("body").innerHTML+="<div id='keyboard'></div>";
	document.querySelector("#keyboard").style.display="none";
	document.querySelector("#keyboard").innerHTML+="<div id='keyboard-head'></div>";
	document.querySelector("#keyboard-head").innerHTML+="<inPut type='text' id='inputBox' class='inputBox-"+color+"'/>";
	document.querySelector("#keyboard").innerHTML+="<div id='keyboard-body' class='keyboard-body-"+color+"'></div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-point' class='button-type1-"+color+"'>`</div>";
	document.querySelector("#keyboard").innerHTML+="<div id='keyboard-close'></div>";
	for(var i = 1;i<10;i++){
		document.querySelector("#keyboard-body").innerHTML+="<div id='button-"+i+"' class='button-type1-"+color+"'>"+i+"</div>";
	}
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-0' class='button-type1-"+color+"'>0</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button--' class='button-type1-"+color+"'>-</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-equal' class='button-type1-"+color+"'>=</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-delete' class='button-type1-"+color+"'>delete</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-tab' class='button-type1-"+color+"'>TAB</div>";
	var zimu1 = new Array();
	zimu1[zimu1.length] = "q";
	zimu1[zimu1.length] = "w";
	zimu1[zimu1.length] = "e";
	zimu1[zimu1.length] = "r";
	zimu1[zimu1.length] = "t";
	zimu1[zimu1.length] = "y";
	zimu1[zimu1.length] = "u";
	zimu1[zimu1.length] = "i";
	zimu1[zimu1.length] = "o";
	zimu1[zimu1.length] = "p";
	for(var i = 0;i<zimu1.length;i++){
		document.querySelector("#keyboard-body").innerHTML+="<div id='button-"+zimu1[i]+"' class='button-type1-"+color+"'>"+zimu1[i]+"</div>";
	}
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-braces-left' class='button-type1-"+color+"'>[</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-braces-right' class='button-type1-"+color+"'>]</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-backslash' class='button-type1-"+color+"'>\\</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-Lock' class='button-type1-"+color+"'>Lock</div>";
	
	
	var zimu2 = new Array();
	zimu2[zimu2.length] = "a";
	zimu2[zimu2.length] = "s";
	zimu2[zimu2.length] = "d";
	zimu2[zimu2.length] = "f";
	zimu2[zimu2.length] = "g";
	zimu2[zimu2.length] = "h";
	zimu2[zimu2.length] = "j";
	zimu2[zimu2.length] = "k";
	zimu2[zimu2.length] = "l";
	for(var i = 0;i<zimu2.length;i++){
		document.querySelector("#keyboard-body").innerHTML+="<div id='button-"+zimu2[i]+"' class='button-type1-"+color+"'>"+zimu2[i]+"</div>";
	}
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-semicolon' class='button-type1-"+color+"'>;</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-quotationMark' class='button-type1-"+color+"'>'</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-enter' class='button-type1-"+color+"'>ENTER</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-shift' class='button-type1-"+color+"'>SHIFT</div>";
	
	
	var zimu3 = new Array();
	zimu3[zimu3.length] = "z";
	zimu3[zimu3.length] = "x";
	zimu3[zimu3.length] = "c";
	zimu3[zimu3.length] = "v";
	zimu3[zimu3.length] = "b";
	zimu3[zimu3.length] = "n";
	zimu3[zimu3.length] = "m";
	for(var i = 0;i<zimu3.length;i++){
		document.querySelector("#keyboard-body").innerHTML+="<div id='button-"+zimu3[i]+"' class='button-type1-"+color+"'>"+zimu3[i]+"</div>";
	}
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-comma' class='button-type1-"+color+"'>,</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-endSign' class='button-type1-"+color+"'>.</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-slash' class='button-type1-"+color+"'>/</div>";
	document.querySelector("#keyboard-body").innerHTML+="<div id='button-space' class='button-type1-"+color+"'></div>";
	
}

//可以移动【系统参数，不能被用户调用】
function moveKeyboard(){
	document.querySelector("#keyboard").style.cursor="move";
	var oDiv=document.getElementById('keyboard');
  oDiv.onmousedown=function(ev){
    var disX=ev.clientX-oDiv.offsetLeft;
    var disY=ev.clientY-oDiv.offsetTop;

    document.onmousemove=function(ev){
      var l=ev.clientX-disX;
      var t=ev.clientY-disY;

      oDiv.style.left=l+'px';
      oDiv.style.top=t+'px';
    };
    document.onmouseup=function(){
      document.onmousemove=null;
      document.onmouseup=null;
    };
  };
}


//检查键盘的显示状态【系统参数，不能被用户调用】
function checkKeyboardDisplay(){
	if(document.querySelector("#keyboard").style.display == "block"){
		document.querySelector("#inputBox").focus();
	}else{
		document.querySelector("#inputBox").blur();
	}
}

//点击关闭按钮关闭【系统参数，不能被用户调用】
function closebtn(){
	var close = document.querySelector("#keyboard-close");
	close.onclick = function(){
	document.querySelector("#keyboard").style.display="none";
};
}


//输入文字【系统参数，不能被用户调用】
function addfont(){
	//其他存储
	var buttonSlash=document.querySelector('#button-slash');
	var buttonShift=document.querySelector('#button-shift');
	var buttonLock=document.querySelector('#button-Lock');
	var buttonSpace=document.querySelector('#button-space');
	var buttonEndSign=document.querySelector('#button-endSign');
	var buttondelete=document.querySelector('#button-delete');
	var buttonpoint=document.querySelector('#button-point');
	var buttonline=document.querySelector('#button--');
	var buttonequal=document.querySelector('#button-equal');
	var buttontab=document.querySelector('#button-tab');
	var buttonBracesLeft=document.querySelector('#button-braces-left');
	var buttonBracesRight=document.querySelector('#button-braces-right');
	var buttonBackslash=document.querySelector('#button-backslash');
	var buttonSemicolon=document.querySelector('#button-semicolon');
	var buttonQuotationMark=document.querySelector('#button-quotationMark');
	var buttonComma=document.querySelector('#button-comma');
	//将数字存储
	for(var i = 0;i<10;i++){
		eval("var button"+i+"=document.querySelector('#button-"+i+"')");
	}
	//将zimu1存储
	var zimu1 = new Array();
	zimu1[zimu1.length] = "q";
	zimu1[zimu1.length] = "w";
	zimu1[zimu1.length] = "e";
	zimu1[zimu1.length] = "r";
	zimu1[zimu1.length] = "t";
	zimu1[zimu1.length] = "y";
	zimu1[zimu1.length] = "u";
	zimu1[zimu1.length] = "i";
	zimu1[zimu1.length] = "o";
	zimu1[zimu1.length] = "p";
	for(var i = 0;i<zimu1.length;i++){
		eval("var button"+zimu1[i]+"=document.querySelector('#button-"+zimu1[i]+"')");
	}
	//将zimu2存储
	var zimu2 = new Array();
	zimu2[zimu2.length] = "a";
	zimu2[zimu2.length] = "s";
	zimu2[zimu2.length] = "d";
	zimu2[zimu2.length] = "f";
	zimu2[zimu2.length] = "g";
	zimu2[zimu2.length] = "h";
	zimu2[zimu2.length] = "j";
	zimu2[zimu2.length] = "k";
	zimu2[zimu2.length] = "l";
	for(var i = 0;i<zimu2.length;i++){
		eval("var button"+zimu2[i]+"=document.querySelector('#button-"+zimu2[i]+"')");
	}
	//将zimu3存储
	var zimu3 = new Array();
	zimu3[zimu3.length] = "z";
	zimu3[zimu3.length] = "x";
	zimu3[zimu3.length] = "c";
	zimu3[zimu3.length] = "v";
	zimu3[zimu3.length] = "b";
	zimu3[zimu3.length] = "n";
	zimu3[zimu3.length] = "m";
	for(var i = 0;i<zimu3.length;i++){
		eval("var button"+zimu3[i]+"=document.querySelector('#button-"+zimu3[i]+"')");
	}
	
	//点击判断
	//其他
	buttonSpace.onclick=function(){document.querySelector('#inputBox').value+=" ";};
	buttonSlash.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="?";}else{document.querySelector('#inputBox').value+="/";}};
	buttonEndSign.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+=">";}else{document.querySelector('#inputBox').value+=".";}};
	buttonComma.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="<";}else{document.querySelector('#inputBox').value+=",";}};
	buttondelete.onclick=function(){if(window.confirm('DELETE按键目前不支持单个字符删除，删除则会全部删除，确认要进行操作吗？(如果想单个删除请使用真实键盘上的DELETE)')){document.querySelector('#inputBox').value="";}};
	buttonpoint.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="~"}else{document.querySelector('#inputBox').value+="`"};};
	buttonline.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="_";}else{document.querySelector('#inputBox').value+="-";}};
	buttonequal.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="+";}else{document.querySelector('#inputBox').value+="=";}};
	buttontab.onclick=function(){document.querySelector('#inputBox').value+="	";};
	buttonBracesLeft.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="{";}else{document.querySelector('#inputBox').value+="[";}};
	buttonBracesRight.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="}";}else{document.querySelector('#inputBox').value+="]";}};
	buttonBackslash.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="|";}else{document.querySelector('#inputBox').value+="\\";}};
	buttonSemicolon.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+=":";}else{document.querySelector('#inputBox').value+=";";}};
	buttonQuotationMark.onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+="\"";}else{document.querySelector('#inputBox').value+="'";}};
	buttonLock.onclick=function(){
		if(isLock == 1){
			isLock = 0;
			document.querySelector('#button-Lock').style.backgroundColor="white";
		}else{
			isLock = 1;
			document.querySelector('#button-Lock').style.backgroundColor="#53FF53";
		}
		};
		buttonLock.onmouseover=function(){
		document.querySelector('#button-Lock').style.backgroundColor="#2894FF";
	};
	buttonLock.onmouseout=function(){
		if(isLock == 1){
			document.querySelector('#button-Lock').style.backgroundColor="#53FF53";
		}else{
			if(color == "black"){
				document.querySelector('#button-Lock').style.backgroundColor="black";
			}else if(color=="white"){
				document.querySelector('#button-Lock').style.backgroundColor="white";
			}
		}
	};
	buttonShift.onmouseout=function(){
		if(isShift == 1){
			document.querySelector('#button-Shift').style.backgroundColor="#53FF53";
		}else{
			if(color == "black"){
				document.querySelector('#button-Shift').style.backgroundColor="black";
			}else if(color=="white"){
				document.querySelector('#button-Shift').style.backgroundColor="white";
			}
		}
	};
	buttonShift.onmouseover=function(){
		document.querySelector('#button-Shift').style.backgroundColor="#2894FF";
	};
	buttonShift.onclick=function(){
		if(isShift == 1){
			isShift = 0;
			document.querySelector('#button-Shift').style.backgroundColor="white";
		}else{
			isShift = 1;
			document.querySelector('#button-Shift').style.backgroundColor="#53FF53";
		}
	};
	//数字
	for(var i = 0;i<10;i++){
		eval("button"+i+".onclick=function(){if(isShift==1){document.querySelector('#inputBox').value+=document.querySelector('#button-"+i+"').innerHTML}else{document.querySelector('#inputBox').value+="+i+"}}");
	}
	//zimu1
	for(var i = 0;i<zimu1.length;i++){
		if(isLock == 1||isShift==1){
			eval("document.querySelector('#button-"+zimu1[i]+"').innerHTML = document.querySelector('#button-"+zimu1[i]+"').innerHTML.toUpperCase()");
			eval("button"+zimu1[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu1[i].toUpperCase()+"'}");
		}else{
			eval("document.querySelector('#button-"+zimu1[i]+"').innerHTML = document.querySelector('#button-"+zimu1[i]+"').innerHTML.toLowerCase()");
			eval("button"+zimu1[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu1[i].toLowerCase()+"'}");
		}
	}
	//zimu2
	for(var i = 0;i<zimu2.length;i++){
		if(isLock == 1||isShift==1){
			eval("document.querySelector('#button-"+zimu2[i]+"').innerHTML = document.querySelector('#button-"+zimu2[i]+"').innerHTML.toUpperCase()");
			eval("button"+zimu2[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu2[i].toUpperCase()+"'}");
		}else{
			eval("button"+zimu2[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu2[i].toLowerCase()+"'}");
			eval("document.querySelector('#button-"+zimu2[i]+"').innerHTML = document.querySelector('#button-"+zimu2[i]+"').innerHTML.toLowerCase()");
		}
	}
	//zimu3
	for(var i = 0;i<zimu3.length;i++){
		if(isLock == 1||isShift==1){
			eval("document.querySelector('#button-"+zimu3[i]+"').innerHTML = document.querySelector('#button-"+zimu3[i]+"').innerHTML.toUpperCase()");
			eval("button"+zimu3[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu3[i].toUpperCase()+"'}");
		}else{
			eval("button"+zimu3[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu3[i].toLowerCase()+"'}");
			eval("button"+zimu3[i]+".onclick=function(){document.querySelector('#inputBox').value+='"+zimu3[i].toLowerCase()+"'}");
		}
	}
	};

//用回车取用户输入的值（所有参数必须设置）
function getValueByEnter(id){
	var buttonEnter=document.querySelector('#button-enter');
	buttonEnter.onclick=function(){
		if(document.querySelector('#inputBox').value != ""&&document.querySelector('#inputBox').value!=null){
			document.querySelector('#'+id).value+=document.querySelector('#inputBox').value;
			document.querySelector('#inputBox').value="";
			if(closeAE == "true"){
				document.querySelector("#keyboard").style.display="none";
			}
		}
	};
	document.onkeydown = function (e) {
            if(e.keyCode == 13){
            		if(document.querySelector('#inputBox').value != ""&&document.querySelector('#inputBox').value!=null){
			document.querySelector('#'+id).value+=document.querySelector('#inputBox').value;
			document.querySelector('#inputBox').value="";
			if(closeAE == "true"){
				document.querySelector("#keyboard").style.display="none";
			}
		}
            };
       };
}

//显示键盘方法（所有参数必须设置）
function showKeyboard(positionTop,positionLeft,canClose,canMove,closeAfterEnter,content){
	if(closeAfterEnter!=""&&closeAfterEnter!=null&&canClose!=""&&canClose!=null&&positionTop != ""&&positionTop!=null&&positionLeft != ""&&positionLeft!=null&&canMove != ""&&canMove!=null){
		document.querySelector("#keyboard").style.top=positionTop;
		document.querySelector("#inputBox").value = "";
		document.querySelector("#inputBox").value = content;
		isLock = 0;
		isShift = 0;
		document.querySelector("#keyboard").style.left=positionLeft;
		document.querySelector("#keyboard").style.display="block";
		if(canClose == "false"){
			document.querySelector("#keyboard-close").style.display="none";
		}else{
			document.querySelector("#keyboard-close").style.display="block";
		}
		if(canMove =="true"){
			moveKeyboard();
		}
		if(closeAfterEnter == "true"){
			closeAE="true";
		}else{
			closeAE ="false";
		}
	}else{
		console.log("显示键盘方法-一些参数没有被定义");
	}
}
//检查shift的值，用来更改键盘显示【系统参数，不能被用户调用】
function checkShiftChangeDisplay(){
	if(isShift == 1){
		document.querySelector("#button-endSign").innerHTML = ">";
		document.querySelector("#button-slash").innerHTML = "?";
		document.querySelector("#button-semicolon").innerHTML = ":";
		document.querySelector("#button-quotationMark").innerHTML = "\"";
		document.querySelector("#button-braces-left").innerHTML = "{";
		document.querySelector("#button-braces-right").innerHTML = "}";
		document.querySelector("#button-backslash").innerHTML = "|";
		document.querySelector("#button-point").innerHTML = "~";
		document.querySelector("#button-1").innerHTML = "!";
		document.querySelector("#button-2").innerHTML = "@";
		document.querySelector("#button-3").innerHTML = "#";
		document.querySelector("#button-4").innerHTML = "$";
		document.querySelector("#button-5").innerHTML = "%";
		document.querySelector("#button-6").innerHTML = "^";
		document.querySelector("#button-7").innerHTML = "&";
		document.querySelector("#button-8").innerHTML = "*";
		document.querySelector("#button-9").innerHTML = "(";
		document.querySelector("#button-0").innerHTML = ")";
		document.querySelector("#button--").innerHTML = "_";
		document.querySelector("#button-equal").innerHTML = "+";
		document.querySelector("#button-comma").innerHTML = "<";
	}else{
		document.querySelector("#button-endSign").innerHTML = ".";
		document.querySelector("#button-slash").innerHTML = "/";
		document.querySelector("#button-quotationMark").innerHTML = "'";
		document.querySelector("#button-semicolon").innerHTML = ";";
		document.querySelector("#button-backslash").innerHTML = "\\";
		document.querySelector("#button-braces-left").innerHTML = "[";
		document.querySelector("#button-braces-right").innerHTML = "]";
		document.querySelector("#button-point").innerHTML = "`";
		document.querySelector("#button-1").innerHTML = "1";
		document.querySelector("#button-2").innerHTML = "2";
		document.querySelector("#button-3").innerHTML = "3";
		document.querySelector("#button-4").innerHTML = "4";
		document.querySelector("#button-5").innerHTML = "5";
		document.querySelector("#button-6").innerHTML = "6";
		document.querySelector("#button-7").innerHTML = "7";
		document.querySelector("#button-8").innerHTML = "8";
		document.querySelector("#button-9").innerHTML = "9";
		document.querySelector("#button-0").innerHTML = "0";
		document.querySelector("#button--").innerHTML = "-";
		document.querySelector("#button-equal").innerHTML = "=";
		document.querySelector("#button-comma").innerHTML = ",";
	}
}

function closeKeyboard(){
	document.querySelector("#keyboard").style.display="none";
}

//初始化键盘方法
function eKeyboardInitialization(){
	var Keyboardtimer = setInterval(function(){
		checkShiftChangeDisplay();
		checkKeyboardDisplay();
		closebtn();
		addfont();
	},10);
}
