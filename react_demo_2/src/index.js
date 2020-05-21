import React from 'react'
import ReactDom from 'react-dom'
import HomePage from "./home"
import AppRouter from "./router.js"
class App extends React.Component {
    render(){
        return (
            <div style={{color:"#333"}} className="test test2">
                <AppRouter />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))