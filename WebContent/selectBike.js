/**
 *
 */

function getCode(){
	var url = window.location.search;
	hash  = url.slice(1).split('&');
	max = hash.length;
	for (var i = 0; i < max; i++) {
	    array = hash[i].split('=');    //keyと値に分割。
	    if(array[0] == 'code'){
	    	return array[1];
	    }
	}
}
var code = getCode();


var xhr = new XMLHttpRequest();
xhr.open("GET","https://www.strava.com/oauth/token?client_id=[[クライアントID]]-dclient_secret=[[クライアントシート]]-dcode=aabef407793b0f2e3167c741fd1034a94c0057fd-dgrant_type=" + code);
//xhr.open("POST","http://zipcloud.ibsnet.co.jp/api/search?zipcode=2500011");
xhr.send();

xhr.addEventListener("load",function(ev){
	var response = xhr.response;
	alert(response);
});