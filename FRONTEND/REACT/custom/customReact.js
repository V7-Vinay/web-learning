function customRender(reactElement, container) {
    // 1. Create the DOM element
    const domElement = document.createElement(reactElement.type);

    // 2. Set attributes (props)
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // 3. Set children (string only)
    // If children is a string → create a text node
    if (typeof reactElement.children === "string") {
        const textNode = document.createTextNode(reactElement.children);
        domElement.appendChild(textNode);
    }

    // 4. Append to container
      container.appendChild(domElement);
}


// Example element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
};

const rootContainer = document.querySelector('#root');

customRender(reactElement, rootContainer);
