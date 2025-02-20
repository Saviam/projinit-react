

//-----minha versão abaixo----

// import  { useState } from 'react';


// function App(){

//   const [name, setName] = useState('');
//   const [quant, setQuant] = useState ([]);

//   function submit (e){
//     e.preventDefault();
//     setName('');
//     setQuant([...quant, name]);
//   }

//   return(
//     <div>
//      <form onSubmit={submit}>

//       <label >Nome</label><br/>
//       <input 
//       placeholder='Nome'
//       value={name}
//       onChange={(e) => setName (e.target.value)}
//       /><br/>

//       <label >Quantidade</label><br/>
//       <input placeholder='Quantidade'/><br/>

//       <button type='Submit'>Registrar</button>
//      </form>

//      <ul>
//       { quant.map(quant => 
//         (<li key={quant}>{quant}</li> ))} 
      
//      </ul>
//     </div>
   
//   );
// }

// export default App;


import  { useState, useEffect } from 'react';


function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React'
    //aqui ele já começa o array com esse dados
  ]);



useEffect(()=>{
  const tarefasStorage = localStorage.getItem('@tarefa');

  if(tarefasStorage){
    setTarefas(JSON.parse(tarefasStorage))
  }

}, []);


useEffect(()=>{ 
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
}, [tarefas]);


function handleRegister(e){
  

  setTarefas([...tarefas, input]); //usa-se o spread operator ( os 3 pontinhos) para ele criar a lista, se não ele vai jogando tudo na mesma linha
  setInput('');
  e.preventDefault();
}

// o 'onSubmit' no form, é que chama a função para inseriros valores colocados nos inputs
  return(
    <div>
      <form onSubmit={handleRegister}>

        <h1>Cadastrando usuário</h1>
        <label>Nome da tarefa:</label><br/>
        <input 
        placeholder='digite uma tarefa'
        value={input}
        onChange={ (e)=> setInput(e.target.value)  }
        /><br/>

        <button type='sumit'>Registrar</button>
      </form><br/><br/>

      <ul>
       {tarefas.map(tarefa => (<li key={tarefa}>{tarefa}</li>))}
       
      </ul>
    
    </div>//toda lista 'li' precisa uma uma 'key', ele usou a palavra 'tarefa'
   
  );
}

export default App;

