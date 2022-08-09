# 02_Backdrop-filter로 배경에 효과주기

backdrop-filter라는 속성을 통해서 배경에 다양한 효과를 추가적으로 부여할 수 있다

블러처리, 밝기, 대조, 그레이 스케일 등

- 단일 적용

```css
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);
```

<br>

- 다중 적용

```css
/* 다중 필터 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);
```

