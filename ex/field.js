// tudo que eu digitar o label atualiza
import React, { Component } from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }
    //reponsavel pela mudança no field
    handleChange(event) {
       this.setState({ value: event.target.value })
    }
    render(){
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value} />
                
             </div>
        )
    }
}

export default Field  //existe essa forma de exportação sem o onChange={this.handleChange} o botao trava 