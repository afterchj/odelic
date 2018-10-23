$(function(){
    var ModalWin = function (opts){
        var
            _defs = {
                imgBoxW : 1600,
                imgBoxH : 1200,
                topMargin : 100,
                bottomMargin : 100,
                modalClass : 'modal',
                onLoad : null,
                onResize : null
            },
            _setting = $.extend(_defs, opts),
            _$overlay,
            _$modal,
            _$content,
            _$close;

        //????????
        function _init () {
            _createElement();
            _addEvent();
        }

        //?v?f?????
        function _createElement () {
            // Generate the HTML and add it to the document
            _$overlay = $('<div id="overlay"></div>');
            _$modal = $('<div id="modal"></div>');
            _$content = $('<div id="modal-content"></div>');
            _$close = $('<a id="close" href="#">close</a>');

            _$modal.hide();
            _$overlay.hide();
            _$modal.append(_$content);
            _$overlay.append(_$close);

            $(document).ready(function(){
                $('body').append(_$overlay, _$modal);
            });
        }

        //?C?x???g???
        function _addEvent () {
            _$overlay.click(_close);
            _$close.click(_close);
        }

        // Center the modal in the viewport
        function _center() {
            var data = {},
                winW = $(window).width(),
                winH = $(window).height();

            data.w = Math.min(winW, _setting.imgBoxW);
            data.h = Math.min(winH - (_setting.topMargin + _setting.bottomMargin), _setting.imgBoxH, data.w * _setting.imgBoxH / _setting.imgBoxW);

            data.top = Math.max(winH - data.h, (_setting.topMargin + _setting.bottomMargin)) / 2;
            data.left = Math.max(winW - data.w, 0) / 2;

            _$modal.css({
                width : data.w,
                height : data.h,
                top:data.top,
                left:data.left
            });

            if ($.isFunction(_setting.onResize)) {
                _setting.onResize(data);
            }
        };

        // Open the modal
        function _open(data) {
            _$content.empty().append(data.content);

            $(window).bind('resize', _center);

            _$modal.css('opacity', 0).show();
            _$overlay.stop(true, true).fadeIn(500, function(){
                $('html').addClass(_setting.modalClass);

                if ($.isFunction(_setting.onLoad)) {
                    _setting.onLoad(data);
                }
                _$modal.animate({'opacity' : 1}, 500);
            });
        };

        // Close the modal
        function _close(evt) {
            evt.preventDefault();

            $(window).unbind('resize');
            $('html').removeClass(_setting.modalClass);

            _$modal.stop(true, true).fadeOut(function(){_$content.empty();});
            _$overlay.fadeOut();
        };

        //????????
        _init();

        return {
            'center' : _center,
            'open' : _open,
            'close' : _close
        };
    };

    var modalWin = ModalWin({
        onLoad : function(settings){
            Slideshow($('#photo-gallery-l'), {
                slideClass : "photo-l",
                navClass : "photo-nav-l",
                autoPlay : false,
                navEventType : "click",
                startIdx : settings.startIdx,
                enableNextPrevNav : true,
                nextId : 'next',
                prevId : 'prev',
                loop : false,
                fetchAll : false,
                onLoadImg : function(){modalWin.center();}
            });
        },
        onResize : function (data) {
            var $nav = $('#photo-navs-l'),
                $modal = $('#modal'),
                navMargin = 12,
                navWidth = 56,
                navHeight = 56,
                marginHeight = $modal.position().top,
                w,
                h,
                posLeft,
                posBottom;

            //?i?r?Q?[?V??????????
            w = Math.min(Math.floor(data.w * 85 / 100), navWidth * $nav.find('.photo-nav-l').length);
            $nav.css({width : w});
            h = $nav.height();

            //?i?r?Q?[?V??????u?????
            posLeft = Math.floor((data.w - w) / 2);
            posBottom = -(h + navMargin);
            $nav.css({left : posLeft, bottom : posBottom});

            //???[?_???E?B???h?E??u?????
            $modal.css('top', Math.max(60, marginHeight + Math.min(0, (marginHeight - (h + navMargin * 2)))));

            //??^????????
            $('#photos-l .photo-l .image').css({"height" : data.h});
        }
    });

    var photoGallery = function () {
        var _$container = $('#photo-gallery'),
            _$photos = $('#photos', _$container),
            _navsId = 'photo-navs',
            _navClass = 'photo-nav',
            _photoClass = 'photo',
            _photoImgClass = 'image',
            _defMargin = 45,
            _navHeight = 56;

        //??????????
        function _init () {
            _setSlideshow();
            _setNavMargin();
        }

        //?X???C?h?V???[????
        function _setSlideshow () {
            var param = {
                slideClass : _photoClass,
                navClass : _navClass,
                onLoadImg : _onGalleryLoad
            };

            if (Slideshow.duration) {
                param.duration = Slideshow.duration;
            }
            Slideshow(_$container, param);
        }

        //?i?r?Q?[?V????????]?????
        function _setNavMargin () {
            var $navs = $('#' + _navsId);

            // _$photos.find('.' + _photoImgClass).css('padding-bottom', _defMargin + _navHeight * (Math.floor($navs.height() / _navHeight) - 1));
        }

        //?X???C?h?V???[?��????[?h????
        function _onGalleryLoad() {
            _setBg();
            // _addEvent();
        }

        //?f?��??p??w?i?��????
        function _setBg () {
            _$photos.find('.' + _photoClass).find('.' + _photoImgClass).each(function(){
                var $this = $(this),
                    src = $this.find('img').attr('src');

                // $this.closest('.' + _photoClass).css({'background-image' : 'url(' + src + ')'});
            });
        }

        //?g??p?C?x???g????
        // function _addEvent () {
        //     $('.' + _navClass, _$container).find('a').click(_onClick);
        //
        //     $('.' + _photoClass + ' .' + _photoImgClass, _$container).find('a').click(_onClick).each(function(){
        //             $(this).append('<span class="hover-msg"><img src="/products/execution/common/images/bg_over_msg.png" alt="?N???b?N?????g?��??\????????B" width="310" height="70"></span>');
        //         }
        //     );
        //
        //     $('.' + _photoClass + ' .' + _photoImgClass).hover(
        //         function(){
        //             var $this = $(this);
        //
        //             $this.closest('.' + _photoClass).stop(true, true);
        //             $this.find('.hover-msg, .hover-msg img').stop(true, true).fadeIn('slow');
        //         },
        //         function(){$(this).find('.hover-msg, .hover-msg img').stop(true, true).fadeOut('slow'); }
        //     );
        // }

        function _onClick (evt) {
            evt.preventDefault();
            var $this = $(this),
                idx = $this.closest('.' + _photoClass + ', ' + '.' + _navClass).attr('id').replace(/photo|-nav/g, '') - 1;

            modalWin.open({content: _getModalContentHTML(), startIdx : idx});
        }

        //?g??M???????[?pHTML????
        function _getModalContentHTML() {
            var html = '<div id="photo-gallery-l">',
                $nav;

            html += '<ul id="photos-l">';
            $('.photo-nav a').each(function(){
                var $this = $(this);
                html += '<li class="photo-l"><div class="wrap"><div class="image"><img src="/shared_v2/images/placefolder.gif?path=' + $this.attr('href') + '" alt="" class="placefolder"></div></div></li>';
            });
            html += '</ul>';

            $nav = $('#photo-navs').clone(false);
            $nav.find('.photo-nav').each(function(){
                var $this = $(this);

                if ($this.hasClass('current')) {
                    $this.removeClass('current');
                }
                $this.removeClass('photo-nav').addClass('photo-nav-l');
            });

            html += '<ul id="photo-navs-l" class="clearfix">';
            html += $nav.html();
            html += '</ul>';

            html += '</div>';

            return html;
        }

        _init();
    }
    photoGallery();

    var adoptedProducts = function () {
        var $container = $('#adopted-products');

        //??p???????i??\??
        if ($container.length > 0) {
            $.ajax({
                type: "get",
                dataType: "json",
                url: '/products/execution/common/js/data.json',
                cache : false,
                success: onLoadSetting
            });
        }

        //??p???????i?p???t?@?C?????[?h??
        function onLoadSetting (data) {
            var num;

            num = searchData(data, location.href);

            if (num.length > 0) {
                addProducts(num);
            }
        }

        //url???Y???f?[?^??????
        function searchData (data, url) {
            var i = 0,
                len = data.length,
                record,
                result = [];

            for (; i < len; i++) {
                record = data[i];

                if ( url.match(new RegExp(record.url)) ) {
                    result = record.num;
                    break;
                }
            }
            return result;
        }

        //???i?��??\??
        function addProducts (ary) {
            var imgUrl = '/sozai/jpg_sum/MAIN_',
                linkUrl = '/CGI/product/search.cgi?detail=',
                i = 0,
                len = ary.length,
                num,
                html;

            html = '<ul>';
            for(; i < len; i++) {
                num = ary[i];
                html += '<li class="biggerlink">';
                html += '<div class="thumb"><img src="' + imgUrl + num + '.jpg" alt=""></div>';
                html += '<p class="link"><a href="' + linkUrl + num + '_0_0">' + num + '</a></p>';
                html += '</li>';
            }

            html += '</ul>';
            $container.show().find('.wrap').append(html);
            $container.find('.biggerlink').biggerlink({hoverclass:'hover'});
        }
    }
    adoptedProducts();
});