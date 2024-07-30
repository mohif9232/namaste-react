let heading = React.createElement("div",{id:"head"},[
    React.createElement("div",{id:'child1'},[
        React.createElement("h1",{},'H1'),
        React.createElement("h2",{},'H2')
    ]),
    React.createElement("div",{id:'child2'},[
        React.createElement("h1",{},'H1'),
        React.createElement("h2",{},'H2')
    ]),
])

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

