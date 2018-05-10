
// 函數playSound 參數e 為該事件
function playSound(e){

	// 如果有兩個事件並用 則要看是哪個來觸發 e.keyCode 代表 按鍵觸發 
	// this.getArrtribute 取得該點擊的 data-key的值 
	// 如果有兩事件 則 querySelector 裡的 e.keyCode 改成 keycode  
	let keyCode = e.keyCode || this.getAttribute('data-key'); // 變成用這個二則一選擇

	// 監聽音樂對應的keycode
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	// 監聽按鍵對應的keyCode
	const key = document.querySelector(`div[data-key="${keyCode}"]`);

	if (!audio)	return;
	// 添加playing到class
	key.classList.add('playing');
	// 設為播放從0秒開始
	audio.currentTime = 0;
	// 播放
	audio.play();
};

//  監聽動畫結束事件後執行函數
function removeTransition(e){
	// 因為transition 動畫結束時會回傳很多屬性/值
	// 我們選擇參考 propertyName : transform 來參考 是否結束動畫了
	if (e.propertyName !== 'transform') return ;
	// 如果有則移除transform

	// e.target 代表 觸發本次事件的元件
	e.target.classList.remove('playing');
};




// 將所有 class屬姓為 key的 轉成 array 並 設為變數 keys
const keys = Array.from(document.querySelectorAll('.key'));

// 新增 click事件監聽
keys.forEach(key => key.addEventListener('click', playSound));

// 陣列裡的每個 key 新增監聽事件功能 addEventListener , 監聽動畫結束時 執行 移除動畫
keys.forEach(key => key.addEventListener('transitionend',removeTransition));





//  監聽按鍵 keydown 事件 , 觸發函數
window.addEventListener('keydown', playSound);

