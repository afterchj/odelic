var Slideshow = function (_$container, _opt) {
	var _def = {
		startIdx : 0,
		duration : 5000,
		animSpeed : 2000,
		placefolderClass : 'placefolder',
		currentClass : 'current',
		autoPlay : true,
		fetchAll : true,
		loop : true,
		slideClass : 'slide',
		navClass : 'slide-nav',
		navEventType : 'hover',//hover or click
		enableNextPrevNav : false,
		nextId : 'next',
		prevId : 'prev',
		disableClass : 'disable',
		onLoadImg : null,
		useNav : true
	},
	_setting = $.extend(_def, _opt),
	_slideList,
	_navList,
	_currentNav,
	_currentSlide,
	_prevSlide,
	_nextSlide,
	_timerid,
	_navTimerid,
	_$next,
	_$prev;

	//スライド
	var Slide = function ($obj, idx) {
		var _$self = $obj,
			_idx = idx;

		//初期設定
		function _init () {
			_addId();
		}

		//IDを追加
		function _addId () {
			_$self.attr('id', _setting.slideClass + (idx + 1));
		}

		//画像のパスを返す
		function _getImgPath () {
			var result = _$self.find('.' + _setting.placefolderClass).attr('src').match(/path=(.+)/);

			return result ? result[1] : null;
		}

		//プレースフォルダを置き換える
		function _replacePlacefolder () {
			var $img = _$self.find('.' + _setting.placefolderClass),
				newSrc = $img.attr('src').replace(/.+?path=/, '');

			$img.attr('src', newSrc);
		}

		//スライドの表示
		function _show (callback) {
			_$self.addClass(_setting.currentClass).fadeIn(_setting.animSpeed, callback);
		}

		//スライドの非表示
		function _hide (callback) {
			_$self.removeClass(_setting.currentClass).fadeOut(_setting.animSpeed, callback);
		}

		//アニメーションの停止
		function _stopAnim () {
			_$self.stop(true, true);
		}

		//初期処理
		_init();

		return {
			idx : _idx,
			loaded : false,
			getImgPath : _getImgPath,
			replacePlacefolder : _replacePlacefolder,
			show : _show,
			hide : _hide,
			stopAnim : _stopAnim
		}
	}

	//スライドナビゲーション
	var Nav = function ($obj, idx) {
		var _$self = $obj,
			_idx = idx;

		//初期設定
		function _init () {
			_addId();
			_disableEvent();
		}

		function _addId () {
			_$self.attr('id', _setting.slideClass + (idx + 1));
		}

		//イベント設定
		function _enableEvent () {
			if (_setting.navEventType === 'hover') {
				_$self.hover(_onMouseOver, _onMouseOut);
			}
			else if (_setting.navEventType === 'click') {
				_$self.unbind().click(_onClick);
			}
		}

		//ボタンを無効にする
		function _disableEvent () {
			if (_setting.navEventType === 'hover') {
				_$self.unbind();
			}
			else if (_setting.navEventType === 'click') {
				_$self.unbind().click(_cancelEvent);
			}
		}

		//クリックイベントのキャンセル
		function _cancelEvent (evt) {
			evt.preventDefault();
		}

		//マウスオーバー
		function _onMouseOver () {
			clearTimeout(_navTimerid);
			_navTimerid = setTimeout(function(){_gotoSlide(_idx);}, 100);
		}

		//マウスアウト
		function _onMouseOut () {

		}

		//クリック
		function _onClick (evt) {
			evt.preventDefault();

			_gotoSlide(_idx);
		}

		function _toggleState() {
			_$self.toggleClass(_setting.currentClass);
		}

		_init();

		return {
			disableEvent : _disableEvent,
			enableEvent : _enableEvent,
			toggleState :_toggleState
		}
	}

	//初期処理
	function _init () {
		_slideList = $('.' + _setting.slideClass, _$container).map(function(idx){
			return Slide($(this), idx);
		});
		_currentSlide = _slideList[_setting.startIdx];

		if(_setting.useNav) {
			_navList = $('.' + _setting.navClass, _$container).map(function(idx){
				return Nav($(this), idx);
			});
			_currentNav = _navList[_setting.startIdx];
		}

		//画像の読み込み
		if (_setting.fetchAll) {
			_loadAllImg();
		}
		else {
			_loadImg(_setting.startIdx);
		}
	}

	//全ての画像を読み込み
	function _loadAllImg () {
		_startLoading();
		$.preload(_getAllImgPath(), {
			onComplete : function(data){_onComplete(data.index)},
			onFinish: _onFinish
		});
	}

	//指定画像を読み込み
	function _loadImg (idx) {
		if (_slideList[idx] && !_slideList[idx].loaded) {
			_startLoading();
			$.preload([_slideList[idx].getImgPath()], {
				onComplete : function () {_onComplete(idx);},
				onFinish: _onFinish
			});
		}
	}

	//1画像読み込み完了
	function _onComplete (idx) {
		var slide = _slideList[idx];

		slide.loaded = true;
		slide.replacePlacefolder();
	}

	//画像読み込み完了
	function _onFinish () {
		_currentSlide.show(_endLoading);

		if (_setting.useNav) {
			_currentNav.toggleState();
			_enableNavEvent();
		}
		_addNextPrevNav();

		if ($.isFunction(_setting.onLoadImg)) {
			_setting.onLoadImg();
		}

		if (_setting.autoPlay) {
			_start();
		}
	}

	//ローディング開始
	function _startLoading () {
		_$container.addClass('loading');
	}

	//ローディング終了
	function _endLoading () {
		_$container.removeClass('loading');
	}

	//ナビゲーションの有効化
	function _enableNavEvent () {
		if (!_setting.useNav) {
			return false;
		}
		$.each(_navList, function(idx, nav){
			nav.enableEvent();
		});
	}

	//ナビゲーションの無効化
	function _disableNavEvent () {
		if (!_setting.useNav) {
			return false;
		}
		$.each(_navList, function(idx, nav){
			nav.disableEvent();
		});
	}

	//プリロード対象の全画像パスを取得
	function _getAllImgPath () {
		return _slideList.map(function(){
			if (!this.loaded) {
				return this.getImgPath().replace(/.+?path=/, '');
			}
			return null;
		});
	}

	//スライドショーの開始
	function _start () {
		_timerid = setTimeout(_next, _setting.duration);
	}

	//スライドショーの停止
	function _stop () {
		clearTimeout(_timerid);
	}

	//スライドの切り替え
	function _changeSlide () {
		var nextIdx = _nextSlide.idx,
			nextNav;

		if (_setting.useNav) {
			nextNav = _navList[nextIdx];
		}
		//表示中スライドを非表示
		_currentSlide.hide();

		if (_setting.useNav) {
			_currentNav.toggleState();
		}

		//次の画像が読み込まれていない場合
		if (!_nextSlide.loaded) {
			_stop();
			_disableNavEvent();
			_disableNextPrev();
			_currentSlide.stopAnim();
			_currentSlide = _nextSlide;
			_nextSlide = null;

			if (_setting.useNav) {
				_currentNav = nextNav;
			}
			_loadImg(_currentSlide.idx);

			return;
		}

		//次のスライドを表示
		_nextSlide.show(function(){
			if (_setting.autoPlay && nextIdx === _nextSlide.idx) {
				_timerid = setTimeout(_next, _setting.duration);
			}
		});

		_prevSlide = _currentSlide;
		_currentSlide = _nextSlide;

		if (_setting.useNav) {
			nextNav.toggleState();
			_currentNav = nextNav;
		}
		_changeNextPrevState();
	}

	//指定位置のスライドを表示
	function _gotoSlide (idx) {
		clearTimeout(_timerid);

		if (idx === _currentSlide.idx) {
			return;
		}

		_nextSlide = _slideList[idx];

		_prevSlide && _prevSlide.stopAnim();
		_currentSlide.stopAnim();

		_changeSlide();
	}

	//次のスライドを表示
	function _next () {
		var nextIdx = _getNextIdx();
		_gotoSlide(nextIdx);
	}

	//前のスライドを表示
	function _prev () {
		var prevIdx = _getPrevIdx();
		_gotoSlide(prevIdx);
	}

	//表示中スライドの次のスライド番号を返す
	function _getNextIdx () {
		var nextIdx = _currentSlide.idx + 1;

		if ( nextIdx === _slideList.length ) {
			nextIdx = _setting.loop ? 0 : _currentSlide.idx;
		}

		return nextIdx;
	}

	//表示中スライドの前のスライド番号を返す
	function _getPrevIdx () {
		var prevIdx = _currentSlide.idx - 1;

		if ( prevIdx === -1 ) {
			prevIdx = _setting.loop ? _slideList.length - 1 : _currentSlide.idx;
		}

		return prevIdx;
	}

	//next, prevナビの追加
	function _addNextPrevNav () {
		if (!_setting.enableNextPrevNav || _slideList.length < 2) {
			return;
		}

		if(!_$next) {
			_$next = $('<a href="#" id="next">next</a>');
			_$prev = $('<a href="#" id="prev">prev</a>');
			_$container.append(_$next, _$prev);
		}
		_enableNextPrev();
		_changeNextPrevState();
	}

	//next prevボタンの使用可否設定
	function _changeNextPrevState () {
		var nextIdx,
			prevIdx;

		if (_setting.loop) {
			return;
		}

		_$prev.removeClass(_setting.disableClass);
		_$next.removeClass(_setting.disableClass);

		currentIdx = _currentSlide.idx;
		if (currentIdx === 0) {
			_$prev.addClass(_setting.disableClass);
		}
		if (currentIdx === _slideList.length - 1) {
			_$next.addClass(_setting.disableClass);
		}
	}

	function _onClickNext (evt) {
		evt.preventDefault();
		_next();
	}

	function _onClickPrev (evt) {
		evt.preventDefault();
		_prev();
	}

	function _enableNextPrev () {
		_$next.click(_onClickNext);
		_$prev.click(_onClickPrev);
	}

	function _disableNextPrev () {
		_$next.unbind('click', _onClickNext);
		_$prev.unbind('click', _onClickPrev);
	}

	//初期化処理
	_init();
}