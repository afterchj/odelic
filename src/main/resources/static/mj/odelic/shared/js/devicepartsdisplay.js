/*device parts display
for BLOCK element
ex)
<div class="deviceParts[pc]" style="display:none;">Only PC contents here</div>
<div class="deviceParts[ios,android]" style="display:none;">Only iOS and Android contents here</div>
*/
(function(){			
	var d = document;	
	
	var init = function()
	{
		//class setting
		var CLASS = 'deviceParts';
		var OPTIONS = {
			pc:'pc',
			ios:'ios',
			android:'android'
		};
		
		//set current device
		var device;
		if(checkDevice('apple')){
			device = OPTIONS.ios;
		}else if(checkDevice('android')){
			device = OPTIONS.android;
		}else{
			device = OPTIONS.pc;
		}
		
		//get element
		var allElm = d.getElementsByTagName('*');
		for(var i=0;i<allElm.length;i++){
			if(allElm[i].className.indexOf(CLASS)>=0){
				var classOption = getClassOption(allElm[i],CLASS);
				if(classOption){
					devicePartsDisplay(allElm[i],classOption);
				}
			}
		}
		
		//check
		function devicePartsDisplay(elm,opt){
			var flg=false;
			for(var i=0;i<opt.length;i++){
				if(opt[i]==device){
					flg = true;
					break;
				}
			}
			if(flg){
				elm.style.display = 'block';
			}else{
				elm.style.display = 'none';
			}
		}
		
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////
	//mobile ua
	function checkDevice(device) {
		var ua = navigator.userAgent;
		if (device == 'apple') { return RegExp('iphone|ipod|ipad', 'i').test(ua); }
		else if (device == 'android') { return RegExp('android', 'i').test(ua); }
		else if (device == 'mobile') { return RegExp('iphone', 'i').test(ua) || (RegExp('android', 'i').test(ua) && RegExp('mobile', 'i').test(ua)); }
		else if (device == 'tablet') { return RegExp('ipad|android', 'i').test(ua); }
		else if (device == 'android mobile') { return RegExp('android', 'i').test(ua) && RegExp('mobile', 'i').test(ua) && !RegExp('SC-01C', 'i').test(ua); }
		else if (device == 'android tablet') { return RegExp('android', 'i').test(ua); }
		else if (device == 'BlackBerry') { return RegExp('BlackBerry', 'i').test(ua); } // BlackBerry
		else if (device == 'Windows Phone') { return RegExp('Windows Phone', 'i').test(ua) || RegExp('IEMobile', 'i').test(ua); } // Windows Phone & IEMobile
		else { return RegExp(device, 'i').test(ua); }
	}


	//get class option  class="className[opt,opt,...]"
	function getClassOption(Obj,keyClass){
		var classes = Obj.className.split(' ');
		var reg = new RegExp('^'+keyClass + "\\[(.*)\\]$");
		for(var i=0;i<classes.length;i++){
			var getOptions = reg.exec(classes[i]);
			if(getOptions){break;}
		}
		var result = null;
		if(getOptions){
			if(getOptions.length>1){
				result = getOptions[1].split(/\[|,|\]/);
			}
		}
		return result;
	}
	
	//DOMContentLoaded
	(function(){
		if(d.addEventListener){
			d.addEventListener("DOMContentLoaded", init, false);			
		}
		else if(navigator.userAgent.match(/MSIE/)){
		 try {
			 d.createComment().doScroll();
			 init();
		 } catch(e){ setTimeout(arguments.callee, 1);}
		}
	})();			
})();