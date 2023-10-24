import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // clicks = 0;
  year: string ='';

  constructor(public senhasService: SenhasService) {
  }      
  ngOnInit(): void {
      this.year = new Date().getFullYear().toString().substring(2, 4);
  }
  

  // chamarRapido(){
  //     if(rapido.length > 0){
  //         document.getElementById("visor-tela").innerHTML = rapido[0]; 
  //         rapido.shift();
  //         document.getElementById("numero-caixa").innerHTML = event.target.id;
  //     }else{
  //         chamarPrioritario()
  //     }
      
      
  // }    
  
  // //Função para chamar as senhas Prioritarias, com verificação.        
  // chamarPrioritario(){            
  //     if(prioritario.length > 0){
  //         document.getElementById("visor-tela").innerHTML = prioritario[0]; 
  //         prioritario.shift();
  //         document.getElementById("numero-caixa").innerHTML = event.target.id;  
  //     }else if(rapido.length > 0){
  //         chamarRapido();
  //     }else if (comum.length > 0){
  //         chamarComum();
  //     }else{
  //         document.getElementById("visor-tela").innerHTML = "Nao ha Senhas";
  //     }
      
  // }

  // //Função para chamar as senhas Comums, com verificação.  
  // chamarComum(){  
  //     if(comum.length >0){
  //         document.getElementById("visor-tela").innerHTML = comum[0]; 
  //         comum.shift();
  //         document.getElementById("numero-caixa").innerHTML = event.target.id;
  //     }else{
  //         chamarPrioritario()
  //     } 
      
  // }
  // //Fim das funções

  // // Pega todos os botoes que existem com a class botoes
  // const checkButtons = document.querySelectorAll(".botoes")

  // checkButtons.forEach( button => {
  //     //adicionar a escuta
  //     button.addEventListener("click" , handleClick)

  // })        

  // //Quando o botao for clickado, registra o evento e entra no IF          
  // handleClick(event){
  //     // console.log(event)
  //     event.preventDefault()
  //     if(event.target.id == "btn-comum" ){
  //         addComum()
  //     }else if(event.target.id == "btn-rapido"){
  //         addRapido()
  //     }else if(event.target.id == "btn-prioridade"){
  //         addPrioritario()
  //     }else if(event.target.id == "Caixa 1"){
  //         chamarPrioritario()
  //     }else if(event.target.id == "Caixa 2"){
  //         chamarRapido()
  //     }else if(event.target.id == "Caixa 3"){
  //         chamarRapido()            
  //     }else if(event.target.id == "Caixa 4"){
  //         chamarComum()
  //     }
  // }        
 

}
