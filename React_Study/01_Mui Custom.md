# 02_@mui Custom

@mui 아이콘, 컴포넌트 CSS 상속 및 적용하기

#### CSS 예시)

@mui 컴포넌트에 id나 클래스를 통해서 css 적용해도 원하는 대로 적용되지 않는 경우가 있는데, 그럴 경우 Mui컴포넌트-root에 css를 추가적으로 적용해서 적용할 수 있다

```CSS
/* MuiInput-root에 width: 100% 적용 */
.MuiInput-root{
  width: 100%;
  background: rgba(255, 255, 255);
  border: 1px solid rgba(177, 177, 177);
  border-radius: 5px;
}
```

![image](https://user-images.githubusercontent.com/93081720/183297470-9fedb642-efb3-4d74-8a37-8ed2b42d0cdc.png)
