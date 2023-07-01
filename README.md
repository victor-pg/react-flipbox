# Flipbox

`react-flipbox-animation` let you use Flipbox animation in React

Example:

![Working Flipbox example](https://i.imgur.com/Pj8j2QV.gif)

Example of code:

```jsx
<Flipbox
  trigger="mouseenter"
  duration={1}
  type="rotate-left"
  thirdDimensional={{
    enabled: true,
  }}
>
  <FlipboxFront>
    <h1>Flipbox Front</h1>
  </FlipboxFront>
  <FlipboxBack>
    <h1>Flipbox Back</h1>
  </FlipboxBack>
</Flipbox>
```
