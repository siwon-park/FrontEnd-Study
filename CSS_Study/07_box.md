# 07_box

CSS 박스 요소에 대해 정리

## 01_margin, padding

### 간격 조정

#### 1. 네 면 모두 같은 라인으로 조정(1개)

```css
margin: 1rem;
padding: 5px;
```

<br>

#### 2. 세로 방향(↕), 가로 방향(↔)별 조절(2개)

```css
 /* 세로방향 | 가로방향 */
margin: 5px auto;
padding: 10px 5%;
```

<br>

#### 3. 위, 가로방향(↔), 아래 간격 조절(3개)

```css
/* 위 | 가로방향 | 아래 */
margin: 1rem auto 2rem;
padding: 5px auto 5px;
```

<br>

#### 4. 위, 오른쪽, 아래, 왼쪽(4개)

```css
/* 위 | 오른쪽 | 아래 | 왼쪽 */
margin: 2px 1rem 0 auto;
padding: 5px 2px 2px 5px;
```

<br>