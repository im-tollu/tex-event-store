let rootSelector = "#root"
let root = switch ReactDOM.querySelector(rootSelector) {
| Some(root) => root
| None => Js.Exn.raiseError(`Failed to find root container by selector [${rootSelector}]`)
}
ReactDOM.render(<App />, root)
