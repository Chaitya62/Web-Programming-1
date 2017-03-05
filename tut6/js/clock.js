var clock = (function(){

	var hours;
	var minutes;
	var seconds;
	var clock;
	var twelve_clock;
	var twenty;
	var twelve;



	var cacheDOM = function(){
		hours = document.getElementById('hours');
		minutes = document.getElementById('minutes');
		seconds = document.getElementById('seconds');
		clock = document.getElementById('clock');
		twenty = document.getElementById('format24');
		twelve = document.getElementById('format12');


	}
	var startClock = function(){
		var interval = window.setInterval(tickClock,1000);
	}

	var formatTime = function(a){
		a = a.toString();
		if(a.length === 1){
			a = '0'+a;
		}
		return a;
	}
	var setFormat = function(){
		twelve_clock = !twelve_clock;
		tickClock();
	}

	var addEventHandler = function(){
		twenty.addEventListener('click',setFormat);
		twelve.addEventListener('click',setFormat);	
	}

	var tickClock = function(){
		var time = new Date();
		var h = time.getHours();
		var m = time.getMinutes();
		var s = time.getSeconds();
		if(twelve_clock) h = h%12;
		h = formatTime(h);
		m = formatTime(m);
		s = formatTime(s);
		setTime(h,m,s);
		return;
	}

	var setTime= function(h,m,s){
		hours.innerHTML = h;
		minutes.innerHTML = m;
		seconds.innerHTML = s;
		return;
	}



	var init = (function(){	
		twelve_clock = true;
		cacheDOM();
		addEventHandler();
		tickClock();
		startClock();

	});

	return{
		init: init,
	};

})();

clock.init();