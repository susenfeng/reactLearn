import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
var left = {
    fontSize: 100,
    color: '#FF0000',
    background:"#4df56e", 
    width:'100%',
    height:"200px",
    fontSize:'14px',
};
var right = {
    fontSize: 100,
    color: '#FF0000',
    background:"#f5e63e",
    width:'100%',
    height:"200px",
    fontSize:'14px',
};

function FormattedDate(props) {
    return <h2 onClick={props.clickAdd.bind(this, 555)}>现在是 {props.date.toLocaleTimeString()}.</h2>;
}

function Div2(props) {
    return <h2 onClick={props.clickAdd.bind(this, 666)}>
        <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="link">Link</Button>
  </div>
        内容:{props.date}
        </h2>;
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            data: 100
        };
        this.clickAdd = this.clickAdd.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    clickAdd(num,e){
        console.log('11111可以直接拿到this:'+this);
        console.log('11===',this.state.data,e)
        this.setState({
            data: num?num:++this.state.data
        });
    }


    clickAddTwo(name,e){
        console.log('22222222可以直接拿到this:'+ this);
        console.log('2222===',e,name)
        this.setState({
            data: name
        });
    }

    render() {
        return (
            <h1>
                <div style={left}>
                    <FormattedDate date={this.state.date} clickAdd = {this.clickAddTwo.bind(this)}/>
                </div>
                <div style={right}>
                    <Div2  date={this.state.data} clickAdd = {this.clickAdd}/>
                </div>
            </h1>
        );
    }
}

ReactDOM.render(
    <div>
        <Clock />
        <Clock />
        <Clock />
    </div>
    ,
    document.getElementById('root')
);
