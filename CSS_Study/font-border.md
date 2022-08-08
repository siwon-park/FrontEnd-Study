# 폰트에 테두리 CSS 적용하기

## 01_text-shadow 활용

#### CSS

```css
h1 {
    color: yellow;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
```

<br>

#### HTML

```html
<h1>
    Hello World!
</h1>
```

<br>

## 02_webkit-text-stroke 활용

표준 방법은 아니기 때문에 웹킷 및 모질라 계열의 브라우저에만 적용됨을 유의

#### CSS

```css
// text-stroke라는 클래스에 -webkit-text-stroke속성을 부여
.text-stroke {
  -webkit-text-stroke: 1px #000;
}
```

<br>

#### HTML

```html
<span class="text-stroke">Hello World!</span>
```

