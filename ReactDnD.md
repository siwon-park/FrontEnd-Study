# React DnD

> React DnD에 대한 이해를 위해 정리하는 문서

`DndProvider`, `HTML5Backend`, `useDrag`, `useDrop`

## 1. DndProvider & Backend

### 1) DndProvider

React DnD의 전역 컨텍스트.

드래그 앤 드랍 이벤트를 적용할 컴포넌트의 최상단에 감싸주면 됨.

즉 팝업 컴포넌트가 있다고 할 때, 해당 팝업 컴포넌트를 밖에서 감싸주면 된다.



### 2) Backend

"실제 드래그 이벤트를 브라우저/환경에서 어떻게 처리할지" 추상화한 것

드래그 앤 드랍 이벤트를 어떤 환경의 api와 연결할 것인지 선택하는 것으로, DndProvider의 backend 속성으로 지정해줘야 한다.

- `HTML5Backend`
  - 표준 HTML5 DnD API 사용
  - 마우스 기반 데스크톱 브라우저에 적합
- `TouchBackend`
  - 터치/모바일 중심
- `MultiBackend`
  - 마우스 + 터치를 동시에 지원하고 싶을 때



### 3) 기본 구조 예시

팝업 컴포넌트에서만 드래그 앤 드랍을 적용할 경우

```tsx
function MyDnDPopup() {
  return (
    <DndProvider backend={HTML5Backend}>
      <PopupLayout>
        <SourceList />
        <TargetSlots />
      </PopupLayout>
    </DndProvider>
  );
}
```

> `useDrag`, `useDrop` 를 쓰는 컴포넌트들은
> 반드시 어떤 `DndProvider` 의 “자식 트리” 안에 있어야 한다.