# mobx-react-inject-forward-ref-bug
https://github.com/mobxjs/mobx-react/issues/717
## Steps
1. Run `yarn`
2. Run `yarn test`
```
 FAIL  ./index.test.js
  ✕ inject should work with components that use forwardRef (43ms)

  ● inject should work with components that use forwardRef

    expect(received).not.toBeNull()

    Received: null

      25 |     );
      26 |     
    > 27 |     expect(ref.current).not.toBeNull();
         |                             ^
      28 |     expect(ref.current).toBeInstanceOf(HTMLDivElement);
      29 | });
      30 | 

      at Object.toBeNull (index.test.js:27:29)
```
Test should be passed.