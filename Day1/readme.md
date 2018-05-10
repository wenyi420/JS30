## 主題 : 監聽使用者按鍵與點擊產生 音效與動畫

#### 主要應用 :

1. 監聽按鍵 , 點擊 , 動畫結束 
> **keydown** : 監聽按鍵事件 </br>
> **click** : 監聽點擊事件  </br>
> **transitionend** : 可看成 transition end , 當動畫結束時執行函數  </br>
```prolog
window.addEventListener('監聽事件種類',觸發事件後執行的函數)
```

2. 為了辨識按鍵,使用KeyCode,每個按鍵都有對應的鍵碼, 透過鍵碼得知使用者按下的按鈕
> [keyCode參考網站](http://keycode.info/)

3. 透過 data-* attribute : 此為自定義屬性, * 後的為自定義名稱 藉由這個去取得KeyCode

4. ```querySelector``` 為 JS 原生選擇器 , 會選取該class屬性名稱的第一個,如果要選取多個則要使用 ```querySelectorAll```

5. 使用Array.from 將元素轉成陣列 , 再透過 forEach(), 監聽事件 </br>

```prolog
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', playSound));
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
```

6. template literals(模板文字) : 透過‵　來組合字串, 範圍內利用${變數} 操作 </br>
 ```prolog
 let str = `<div data-key="${key}"> <button>click me</button> </div>`;
```
