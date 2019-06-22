const React = require("react");
const ReactDOM = require("react-dom");
const { inject, Provider } = require("mobx-react");

const e = React.createElement;

test("inject should work with components that use forwardRef", () => {
    const FancyComp = React.forwardRef((_, ref) => {
        return e("div", { ref });
    });
    
    const InjectedFancyComp = inject("bla")(FancyComp);
    const ref = React.createRef();
    
    ReactDOM.render(
        e(
            Provider,
            { bla: 42 },
            e(
                InjectedFancyComp,
                { ref },
                )
            ),
        document.createElement("div")
    );
    
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
});
