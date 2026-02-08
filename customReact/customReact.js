function customRender (reactElement, mainContainer)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.prop)
    {
        if(prop == 'children') constinue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement)

    
}

const reactElement = {
    type : 'a',                             //Element Type
    props : {                              
        href : 'https://google.com',        //Attributes
        target : '_blank'
    },
    children : 'Click me to visit Google'   //children
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
