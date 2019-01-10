import React, { Component } from 'react' //importando dentro do pacote react o component, por isso usa {}
// - React é o export default e qualquer outra coisa em especifico chama dentro das {}


export default class ClassComponent extends Component {
 //caso não houvesse usado o  "{Component}" - poderia se utilizar agora o "extends React.Component"
  //Fazendo um componente simples
  //componente react que é baseado em classe tem que ter pelo menos
  //uma função render
  render() {
      return (
          <h1>{this.props.value}</h1>//props é um nome padrão para este método
          //poderia se utilizar qq outro nome
      )
  }
} 