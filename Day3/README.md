### 主題 :用JS與CSS搭配製作一個即時的濾淨效果， 特效為調整內距、模糊、邊框色。

#### CSS Filters濾鏡效果共有十種特效，分別是：
1. grayscale : 灰階 
2. sepia : 懷舊
3. saturate : 飽和
4. hue-rotate : 色向旋轉
5. invert : 負片
6. opacity : 透明度
7. brightness : 亮度
8. contrast : 對比
9. blur : 模糊
10. drop-shadow : 下拉陰影

#### 主要應用 : 

1. 建立 css 變數 : 使用css原生變數,可透過JS擷取,並動態修改數值 </br>

```prolog
:root{--<varName>: <varValue>} // 使用 :root 建立 css 變數
```
2. 在 CSS 屬性值中使用 var(--<varName>) 來代入變數的值
  
3. 在HTML製作 input , type為range 為滾軸 , 為了讓JS能動態改動數值
```prolog
<label for="opacity">不透明</label>
<input id="opacity" type="range" name="opacity" min="0" max="100" value="100" data-sizing="%">
```

4. 透過 this.dataset 取得 data-* 值 
```prolog
const suffix = this.dataset.sizing || '';   //  || 設預設值用兩邊如有一邊為true則回傳一個值, 如兩個都true則左邊優先
```
再藉由style.setProperty() 取得 name值 讀取value值和 data-sizing 單位, 產生動態變化 
```prolog
 document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```

5. 監聽滾軸事件 : 兩者擇一也可,為了避免有些沒支援
```prolog
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

```
