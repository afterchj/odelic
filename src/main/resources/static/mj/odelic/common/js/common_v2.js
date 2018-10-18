(function($) {
    "use strict";
    /*var
     ----------------------------------------------------------------------*/
    var DATAPREF = "-cmnjs";
    var globalKey = "cmnjs";

    if (globalKey && window[globalKey] == null) {
        window[globalKey] = {};
    } else {
        globalKey = false;
    }

    /*utility
     ----------------------------------------------------------------------*/
    /**
     * UA蛻､蛻･
     */
    var UAINFO = (function() {
        var ua = navigator.userAgent.toLowerCase();
        //browser
        var ie = !!ua.match(/(msie|trident)/i);
        var edge = !!ua.match(/edge/i);
        var chrome = edge ? false : !!ua.match(/(chrome|crios)/i);
        var safari = edge || chrome ? false : !!ua.match(/safari/i);
        var firefox = !!ua.match(/firefox/i);
        //mobile device and os
        var iPhone = ua.indexOf("iphone") >= 0;
        var iPod = ua.indexOf("ipod") >= 0;
        var iPad = ua.indexOf("ipad") >= 0;
        var iOS = iPhone || iPod || iPad;
        var Android = ua.indexOf("android") >= 0;
        var TB = iPad || (Android && ua.indexOf("mobile") < 0);
        var SP = !TB && (iOS || Android);
        return {
            IE: ie,
            Edge: edge,
            Chrome: chrome,
            Safari: safari,
            Firefox: firefox,

            iOS: iOS,
            iOS_SP: iOS && SP,
            iOS_TB: iOS && TB,
            Android: Android,
            Android_SP: Android && SP,
            Android_TB: Android && TB,
            TB: TB,
            SP: SP,
            iOS_Android: iOS || Android
        };
    })();
    if (globalKey) {
        window[globalKey].UAINFO = UAINFO;
    }

    /**
     * 繧ｯ繝�く繝ｼ謫堺ｽ�
     */
    var COOKIECTRL = {
        get: function(name) {
            var cookies = document.cookie.split(";");
            for (var index = 0, length = cookies.length; index < length; index += 1) {
                var temp = cookies[index].replace(/\s/g, "").split("=");
                if (temp[0] === name) {
                    return decodeURIComponent(temp[1]);
                }
            }
            return null;
        },
        set: function(name, value, expires, path, domain, secure) {
            var d = document;
            var today = new Date();
            if (expires) {
                expires = expires * 1000 * 60 * 60 * 24;
            }
            var expires_date = new Date(today.getTime() + expires);
            d.cookie =
                name +
                "=" +
                encodeURIComponent(value) +
                (expires ? ";expires=" + expires_date.toUTCString() : "") +
                (path ? ";path=" + path : "") +
                (domain ? ";domain=" + domain : "") +
                (secure ? ";secure" : "");
        },
        del: function(name, path, domain) {
            var d = document;
            if (this.get(name)) {
                d.cookie =
                    name +
                    "=" +
                    (path ? ";path=" + path : "") +
                    (domain ? ";domain=" + domain : "") +
                    ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
            }
        }
    };
    if (globalKey) {
        window[globalKey].COOKIECTRL = COOKIECTRL;
    }

    /*module
     ----------------------------------------------------------------------*/
    /**
     * 譁�ｭ励し繧､繧ｺ蛻�崛
     * 蛻�崛繝懊ち繝ｳ縺ｧhtml隕∫ｴ�縺ｫ謇螳壹�繧ｯ繝ｩ繧ｹ繧剃ｻ倅ｸ弱繧ｯ繝�く繝ｼfontSizeChange縺ｧ菫晄戟縺苓ｪｭ縺ｿ霎ｼ縺ｿ譎ゅ↓繧ょ渚譏�
     *  蛻�崛繝懊ち繝ｳ 螟ｧ�喙data-cmnjs-fontsizechange=L]
     *  蛻�崛繝懊ち繝ｳ 荳ｭ�喙data-cmnjs-fontsizechange=M]
     *  蛻�崛繝懊ち繝ｳ 蟆擾ｼ喙data-cmnjs-fontsizechange=S]
     *  html繧ｿ繧ｰ縺ｫ莉倅ｸ弱＆繧後ｋ繧ｯ繝ｩ繧ｹ 螟ｧ�喃ontSizeL
     *  html繧ｿ繧ｰ縺ｫ莉倅ｸ弱＆繧後ｋ繧ｯ繝ｩ繧ｹ 荳ｭ�壹↑縺�
     *  html繧ｿ繧ｰ縺ｫ莉倅ｸ弱＆繧後ｋ繧ｯ繝ｩ繧ｹ 蟆擾ｼ喃ontSizeS
     */
    (function() {
        var config = {
            sets: [
                {
                    cls: "fontSizeS",
                    btn: "[data" + DATAPREF + "-fontsizechange=S]"
                },
                {
                    cls: null,
                    btn: "[data" + DATAPREF + "-fontsizechange=M]"
                },
                {
                    cls: "fontSizeL",
                    btn: "[data" + DATAPREF + "-fontsizechange=L]"
                }
            ],
            cookieConf: {
                name: "fontSizeChange",
                path: "/",
                exp: 365 * 2
            }
        };
        //main function
        var changeRootClass = (function() {
            var $rootElm = $("html");
            return function(seq) {
                var addCls = "",
                    removeCls = "",
                    thisCls,
                    i;
                for (i = 0; i < config.sets.length; i++) {
                    thisCls = config.sets[i].cls;
                    if (thisCls) {
                        if (i === seq) {
                            addCls = thisCls;
                        } else {
                            removeCls += thisCls + " ";
                        }
                    }
                }
                $rootElm.removeClass(removeCls).addClass(addCls);
                //cookie
                if (!addCls) {
                    COOKIECTRL.del(config.cookieConf.name, config.cookieConf.path);
                } else {
                    COOKIECTRL.set(
                        config.cookieConf.name,
                        seq,
                        config.cookieConf.exp,
                        config.cookieConf.path
                    );
                }
            };
        })();
        //init by saved cookie
        (function(savedCookieVal) {
            if (savedCookieVal !== null) {
                changeRootClass(Number(savedCookieVal));
            }
        })(COOKIECTRL.get(config.cookieConf.name));
        //btn events
        $(function() {
            var thisData;
            var clickEvent = function(e) {
                this.blur();
                changeRootClass(e.data.seq);
            };
            for (var i = 0; i < config.sets.length; i++) {
                thisData = config.sets[i];
                $(thisData.btn).on("click", { seq: i }, clickEvent);
            }
        });
    })();

    /**
     * 繧ｹ繝�繝ｼ繧ｺ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
     * 蟇ｾ雎｡縲[href^="#"][data-cmnjs-smoothscroll]
     */
    $(function() {
        var dataName = "data" + DATAPREF + "-smoothscroll";
        var speed = 300;
        var easing = "swing";
        var $win = $(window);

        var getScrollableElm = (function() {
            var $scrollable = null;
            return function() {
                if (!$scrollable) {
                    $("html,body").each(function() {
                        var $this = $(this);
                        if ($this.scrollTop() > 0) {
                            $scrollable = $this;
                            return false;
                        } else {
                            $this.scrollTop(1);
                            if ($this.scrollTop() > 0) {
                                $scrollable = $this;
                                return false;
                            }
                            $this.scrollTop(0);
                        }
                    });
                }
                return $scrollable;
            };
        })();
        $(document).on("click", '[href^="#"][data-cmnjs-smoothscroll]', function() {
            var $this = $(this);
            var $scroller = getScrollableElm();
            var pos, curpos;
            var href = $this.attr("href");
            var $target = $(href === "#" ? "html" : href);
            if ($target.length) {
                if ($scroller) {
                    pos = $target.offset().top;
                    curpos = Number($win.scrollTop());
                    location.href = location.href.split("#")[0] + href;
                    $scroller
                        .scrollTop(curpos)
                        .animate({ scrollTop: pos }, speed, easing);
                } else {
                    location.href = location.href.split("#")[0] + href;
                }
                return false;
            } else {
                return true;
            }
        });
    });

    /**
     * 髮ｻ隧ｱ逡ｪ蜿ｷ繝ｪ繝ｳ繧ｯ
     * 蟇ｾ雎｡縲*[data-cmnjs-tellink]
     * 蟇ｾ雎｡隕∫ｴ�縺ｫ蟇ｾ縺嶺ｸ願ｨ伜ｱ樊ｧ蛟､縺ｮ蛟､縺ｧtel:繝励Ο繝医さ繝ｫ縺ｮhref螻樊ｧ繧呈戟縺｣縺歛繧ｿ繧ｰ縺ｫ螟画鋤
     * Android縲（OS縺ｮUA縺ｮ縺ｿ螳溯｡�
     * ex) <span data-cmnjs-tellink="117">譎ょ�ｱ</span>縲竊偵<a href="tel:117">譎ょ�ｱ</a>
     */
    $(function() {
        var dataName = "data" + DATAPREF + "-tellink";
        if (UAINFO.iOS_Android) {
            $("[" + dataName + "]").each(function() {
                var $this = $(this);
                $this
                    .wrapInner('<a href="tel:' + $this.attr(dataName) + '" />')
                    .children()
                    .unwrap();
            });
        }
    });

    /**
     * 繧ｿ繝門�譖ｿ
     * 繝懊ち繝ｳ縺ｮ繧ｯ繝ｪ繝�け縺ｧ繝懊ち繝ｳ縺ｨ蟇ｾ雎｡繧ｨ繝ｪ繧｢縺ｫ繧｢繧ｯ繝�ぅ繝悶け繝ｩ繧ｹ繧剃ｻ倅ｸ�
     * 繝懊ち繝ｳ縺ｨ繧ｨ繝ｪ繧｢縺ｮ邏蝉ｻ倥￠縺ｯDOM鬆�分縺ｫ萓晏ｭ�
     */

        //constructor
    var TabChange = function(opt) {
            var thisO = this;
            var def = opt.def - 0 || 0;
            this.curSeq = -1;
            this.$btns = opt.$btns;
            this.$areas = opt.$areas;
            this.activeBtnClass = opt.activeBtnClass || "";
            this.activeAreaClass = opt.activeAreaClass || "";
            this.onChanged =
                typeof opt.onChanged === "function" ? opt.onChanged : function() {};
            this.$btns.each(function(seq) {
                var $this = $(this);
                $this.on("click", function() {
                    this.blur();
                    thisO.changeTab(seq);
                });
            });
            this.changeTab(def, true);
        };
    TabChange.prototype.changeTab = function(seq, firstFlg) {
        if (this.curSeq === seq) {
            return;
        }
        var $activeArea = this.$areas.eq(seq);
        if (!firstFlg && $activeArea.is(":visible")) {
            return;
        }
        this.$btns.removeClass(this.activeBtnClass);
        this.$btns.eq(seq).addClass(this.activeBtnClass);
        this.$areas.removeClass(this.activeAreaClass);
        $activeArea.addClass(this.activeAreaClass);
        this.curSeq = seq;
        this.onChanged(seq);
    };
    if (globalKey) {
        window[globalKey].TabChange = TabChange;
    }

    $(function() {
        /**
         * 繝ｩ繝�ヱ繝ｼ豎守畑蝙� TabChange 縺ｮ逕滓�
         *  繝ｩ繝�ヱ繝ｼ�喙data-cmnjs-tabchange-role="wrap"]
         *  繝懊ち繝ｳ縲�喙data-cmnjs-tabchange-role="wrap"] [data-cmnjs-tabchange-role="btn"]
         *  繧ｨ繝ｪ繧｢縲�喙data-cmnjs-tabchange-role="wrap"] [data-cmnjs-tabchange-role="area"]
         *  繧｢繧ｯ繝�ぅ繝悶�繧ｿ繝ｳ繝ｻ繧ｨ繝ｪ繧｢縺ｫ莉倅ｸ弱＆繧後ｋ繧ｯ繝ｩ繧ｹ�嗾abActive
         *  繝ｩ繝�ヱ繝ｼ縺ｮ data-cmnjs-tabchange-def 螻樊ｧ縺ｧ蛻晄悄繧ｿ繝悶�繧ｷ繝ｼ繧ｱ繝ｳ繧ｹ繧呈欠螳壼庄
         */
        var wrapData = "data" + DATAPREF + "-tabchange-role=wrap";
        var btnData = "data" + DATAPREF + "-tabchange-role=btn";
        var areaData = "data" + DATAPREF + "-tabchange-role=area";
        var defaultSeqData = "data" + DATAPREF + "-tabchange-def";
        var activeClass = "tabActive";

        $("[" + wrapData + "]").each(function() {
            var $wrap = $(this);
            var $nested = $wrap.find("[" + wrapData + "]" + " *"); //繝阪せ繝医ｒ閠��
            var $btns = $wrap.find("[" + btnData + "]").not($nested);
            var $areas = $wrap.find("[" + areaData + "]").not($nested);
            if ($btns.length && $areas.length) {
                new TabChange({
                    $btns: $btns,
                    $areas: $areas,
                    activeBtnClass: activeClass,
                    activeAreaClass: activeClass,
                    def: $wrap.attr(defaultSeqData)
                });
            }
        });
    });

    /**
     * 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ
     * 繝懊ち繝ｳ縺ｮ繧ｯ繝ｪ繝�け縺ｧ繝懊ち繝ｳ縺ｫ繧｢繧ｯ繝�ぅ繝悶け繝ｩ繧ｹ繧剃ｻ倅ｸ弱＠縲∝ｯｾ蠢懊☆繧九お繝ｪ繧｢繧帝幕髢峨い繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ
     * 髢矩哩蠕慧isplay繧ｹ繧ｿ繧､繝ｫ繧貞叙繧企勁縺阪√お繝ｪ繧｢縺ｫ繧｢繧ｯ繝�ぅ繝悶け繝ｩ繧ｹ繧剃ｻ倅ｸ弱☆繧�
     */
        //constructor
    var Accordion = function(opt) {
            var thisO = this;
            this.$btn = opt.$btn;
            this.$area = opt.$area;
            this.activeBtnClass = opt.activeBtnClass || "";
            this.activeAreaClass = opt.activeAreaClass || "";
            this.openedFlg = opt.openedFlg;
            this.speed = opt.speed || 200;
            this.onBeforeDisplayChange = opt.onBeforeDisplayChange || function() {};
            this.onAfterDisplayChange = opt.onAfterDisplayChange || function() {};
            this.busyFlg = false;
            this.useDisplayCheck = !!opt.useDisplayCheck;
            this.$btn.on("click", function() {
                this.blur();
                thisO.displayChange(!thisO.openedFlg);
            });
            this.displayChange(thisO.openedFlg, true, true);
        };
    Accordion.prototype.displayChange = function(flg, noAnimationFlg, initFlg) {
        var visibleCheck, hasActiveClass;
        if (!initFlg && this.useDisplayCheck) {
            if (flg) {
                hasActiveClass = this.$area.hasClass(this.activeAreaClass);
                visibleCheck = this.$area.is(":visible");
                if (visibleCheck) {
                    return;
                }
                this.$area.addClass(this.activeAreaClass);
                visibleCheck = this.$area.is(":visible");
                if (!hasActiveClass) {
                    this.$area.removeClass(this.activeAreaClass);
                }
                if (!visibleCheck) {
                    return;
                }
            } else {
                hasActiveClass = this.$area.hasClass(this.activeAreaClass);
                visibleCheck = this.$area.is(":visible");
                if (!visibleCheck) {
                    return;
                }
                this.$area.removeClass(this.activeAreaClass);
                visibleCheck = this.$area.is(":visible");
                if (hasActiveClass) {
                    this.$area.addClass(this.activeAreaClass);
                }
                if (visibleCheck) {
                    return;
                }
            }
        }
        if (this.busyFlg) {
            return;
        }
        this.busyFlg = true;
        if (this.onBeforeDisplayChange(flg) === false) {
            this.busyFlg = false;
            return;
        }
        var thisO = this;
        var speed = noAnimationFlg ? 0 : this.speed;
        if (flg) {
            //open
            this.$btn.addClass(this.activeBtnClass);
            this.$area.slideDown(speed, "swing", function() {
                thisO.displayChangeCallback(flg);
            });
        } else {
            //close
            this.$btn.removeClass(this.activeBtnClass);
            this.$area.slideUp(speed, "swing", function() {
                thisO.displayChangeCallback(flg);
            });
        }
    };
    Accordion.prototype.displayChangeCallback = function(flg) {
        this.openedFlg = flg;
        if (flg) {
            this.$area.addClass(this.activeAreaClass);
        } else {
            this.$area.removeClass(this.activeAreaClass);
        }
        this.$area.css({ display: "" });
        this.onAfterDisplayChange(flg);
        this.busyFlg = false;
    };
    if (globalKey) {
        window[globalKey].Accordion = Accordion;
    }

    $(function() {
        /**
         * 繝ｩ繝�ヱ繝ｼ豎守畑蝙帰ccordion縺ｮ逕滓�
         *  繝ｩ繝�ヱ繝ｼ�喙data-cmnjs-accordion-role="wrap"]
         *  繝懊ち繝ｳ縲�喙data-cmnjs-accordion-role="wrap"] [data-cmnjs-accordion-role="btn"]
         *  繧ｨ繝ｪ繧｢縲�喙data-cmnjs-accordion-role="wrap"] [data-cmnjs-accordion-role="area"]
         *  繧｢繧ｯ繝�ぅ繝悶�繧ｿ繝ｳ繝ｻ繧ｨ繝ｪ繧｢縺ｫ莉倅ｸ弱＆繧後ｋ繧ｯ繝ｩ繧ｹ�啾ccordionActive
         *  繝ｩ繝�ヱ繝ｼ縺ｮ data-cmnjs-accordion-active 螻樊ｧ縺ｮ謖�ｮ壹′縺ゅｌ縺ｰ蛻晄悄迥ｶ諷九〒髢九￥
         */
        var wrapData = "data" + DATAPREF + "-accordion-role=wrap";
        var btnData = "data" + DATAPREF + "-accordion-role=btn";
        var areaData = "data" + DATAPREF + "-accordion-role=area";
        var activeClass = "accordionActive";
        var defaultOpendData = "data" + DATAPREF + "-accordion-active";

        //繝ｩ繝�ヱ繝ｼ豎守畑蝙狗函謌�
        $("[" + wrapData + "]").each(function() {
            var $wrap = $(this);
            var $nested = $wrap.find("[" + wrapData + "]" + " *"); //繝阪せ繝医ｒ閠��
            var $btn = $wrap.find("[" + btnData + "]").not($nested);
            var $area = $wrap.find("[" + areaData + "]").not($nested);
            if ($btn.length && $area.length) {
                new Accordion({
                    $btn: $btn,
                    $area: $area,
                    activeBtnClass: activeClass,
                    activeAreaClass: activeClass,
                    openedFlg: typeof $wrap.attr(defaultOpendData) !== "undefined",
                    useDisplayCheck: true
                });
            }
        });
    });

    /**
     * 郢ｧ�ｹ郢ｧ�ｯ郢晢ｽｭ郢晢ｽｼ郢晢ｽｫ邵ｺ蜉ｱ窶ｻ邵ｺ?�玖撻�ｴ陷ｷ蛹ｻ竊馴勗�ｨ驕会ｽｺ邵ｺ蜷ｶ��
     */
    $(function() {
        var $taraget = $("[data" + DATAPREF + "-scrollshow]");
        var $win = $(window);
        var speed = 300;
        var flg = false;
        function checkScroll() {
            if ($win.scrollTop() > 0) {
                if (!flg) {
                    flg = true;
                    $taraget.stop().fadeIn(speed);
                }
            } else {
                if (flg) {
                    flg = false;
                    $taraget.stop().fadeOut(speed);
                }
            }
        }
        function fixedPageTop() {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            var $footer = $(".l-foot");
            var footHeight = $footer.height();
            var $pageTop = $("#go-top-btn");

            if (scrollHeight - scrollPosition >= footHeight + 43) {
                $pageTop.addClass("wrap-page-top-fixed");
            } else {
                $pageTop.removeClass("wrap-page-top-fixed");
            }
        }
        $win.on("scroll resize", checkScroll);
        checkScroll();
        $win.on("scroll resize", fixedPageTop);
        fixedPageTop();
    });

    var tabletMode = function (){
        var contentWidth = 1280;
        var breakPoint = 767;
        if(cmnjs.UAINFO.TB){
            $('body').addClass('tb');
            var windowWidth = $(window).width();
            var fontSizeDefault = 62.5;
            if((windowWidth <= contentWidth)&&(windowWidth >=breakPoint)){
                var zoom = (windowWidth / contentWidth)*100;
                var fontSize = (fontSizeDefault / 100)*zoom;
                $('html').css('zoom',zoom+'%');
                $('html').css('font-size',fontSize+'%');
            }
        }
    };
    $(function() {
        // 繧ｿ繝悶Ξ繝�ヨ蝗櫁ｻ｢譎ゅ�繧､繝吶Φ繝育匱轣ｫ
        $(window).on('orientationchange', function() {
            tabletMode();
        });
        tabletMode();
    });


})(jQuery);
