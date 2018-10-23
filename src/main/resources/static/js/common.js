/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing,{def:'easeOutExpo',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeOutExpo:function (x,t,b,c,d){return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+ b;}});

$(function(){
    //Add Rollover Event
    var originaSrc;
    $("img.rollover,input.rollover").hover(
        function(){
            var $this = $(this);
            originaSrc = $this.attr('src');
            var filename = originaSrc.match(".+/(.+?)\.[a-z]+$")[1]
            $this.attr('src', originaSrc.replace(filename, filename + "_ov"));
        },
        function(){
            $(this).attr('src', originaSrc);
        }
    );

    //Add SmoothScroll Event
    $('a[href^=#], area[href^=#]').click(function() {
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        //$.support.checkOn
        var position = target.offset().top;
//	  $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'easeOutExpo');//del 2018.6.5
        $('html,body').animate({scrollTop:position}, speed, 'easeOutExpo');//add 2018.6.5
        return false;
    });

    //html5-placeholder-fix-with-jquery
    var supportsInputAttribute = function (attr) {
        var input = document.createElement('input');
        return attr in input;
    };
    if (!supportsInputAttribute('placeholder')) {
        $('[placeholder]').each(function () {
            var
                input = $(this),
                placeholderText = input.attr('placeholder'),
                placeholderColor = 'GrayText',
                defaultColor = input.css('color');
            input.
            focus(function () {
                if (input.val() === placeholderText) {
                    input.val('').css('color', defaultColor);
                }
            }).
            blur(function () {
                if (input.val() === '') {
                    input.val(placeholderText).css('color', placeholderColor);
                } else if (input.val() === placeholderText) {
                    input.css('color', placeholderColor);
                }
            }).
            blur().
            parents('form').
            submit(function () {
                if (input.val() === placeholderText) {
                    input.val('');
                }
            });
        });
    }

    //set biggerlink
    if($.fn.biggerlink){
        // Supporting target _blank
        $('.biggerlink a[target="_blank"]').click(function(){
            window.open(this.href);
            return false;
        });
        $('.biggerlink').biggerlink({hoverclass:'hover'});
    }

    //for ios safari
    var ua =navigator.userAgent;
    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1){
        $('label').click(function(){});
    }
    if (ua.search(/Android 4/) !== -1) {
        $("head").append($('<meta name="viewport" content="width=device-width,user-scalable=yes,target-densitydpi=device-dpi,initial-scale='+(screen.width/960)+'">'));
    }
});

//popup window
function openWindow(evt, url, name, features){
    //default settings
    var settings = {
        menubar : 'no',
        location : 'no',
        resizable : 'yes',
        scrollbars : 'yes',
        status : 'yes',
        toolbar : 'no'
    }
    if(features){
        for(var p in features){
            settings[p] = features[p];
        }
    }
    var param = [];
    for(var p in settings){
        param.push(p + '=' +settings[p]);
    }
    var w = window.open(url, name, param.join(','));
    w.focus();

    //Prevent the Default Action
    if(evt.preventDefault){
        evt.preventDefault();
    }
    else{
        evt.returnValue = false;
    }
}