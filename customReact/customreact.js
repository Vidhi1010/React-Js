function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type); // <a>

    domElement.innerHTML = reactElement.children;// "Click me to visit Google"

    // Setting attributes for the anchor element
    // This is how you would set attributes in a real React application
    domElement.setAttribute('href', reactElement.props.href);

    // If the target prop is provided, set it as well
    // This is optional, as not all anchor elements will have a target
    domElement.setAttribute('target', reactElement.props.target );

    // Append the created DOM element to the container
    container.appendChild(domElement);
}

const reactElement = { //mimicking JSX as an object -which is exactly what JSX becomes behind the scenes in React!
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google',
}

const mainontainer = document.querySelector('#root');

customRender(reactElement, mainontainer);

