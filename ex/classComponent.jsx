/*import React, { Component } from 'react' //importando dentro do pacote react o component, por isso usa {}
// - React é o export default e qualquer outra coisa em especifico chama dentro das {}


export default class ClassComponent extends Component {
    constructor(props) {
        super(props) //obrigatorio esse metodo, se eu nao o fizer da erro
        //todo componente tem um state
        this.state = { value: props.initialValue } //inicializando o estado com o valor 
        //this.props e this.state são padrao de componente
    }
    sum(delta){ //soma +1 e -1 (incrementar e decrementar)
       this.setState ({ value: this.state.value + delta }) //setState para deixar rastros o valor - chamado evoluir valores
       //para um atributo ({ value: this.state.value + delta })  //evoluindo o estado,não alterando
    }

 //caso não houvesse usado o  "{Component}" - poderia se utilizar agora o "extends React.Component"
  //Fazendo um componente simples
  //componente react que é baseado em classe tem que ter pelo menos
  //uma função render
  render() {
     // this.props.value++ //da erro pq qualquer propriedade que eu passar 
      //ela é somente leitura, eu não posso alterar nada de props
      return (
        <div>
            <h1>{this.props.label}</h1>
            <h2>{this.state.value}</h2>
            <button onClick={() => this.sum(-1)}>Dec</button>
            <button onClick={() => this.sum(1)}>Inc</button>
        </div>
        // <h1>{this.props.value}</h1>//props é um nome padrão para este método
          //poderia se utilizar qq outro nome
      )
  }
} */