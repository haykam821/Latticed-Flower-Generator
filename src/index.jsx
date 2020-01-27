require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");
require("file-loader?name=[name].[ext]!html-minify-loader!./index.css");

const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./components/app.jsx");

ReactDOM.render(<App />, document.getElementById("app"));