

import  { useState } from 'react';


function App(){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const [user,setUser] = useState ({});
  //precisa criar outro useState para definir como começa o objeto ( se for um objeto) e para fazer a troca dos valores


function handleRegister(e){
  e.preventDefault();

  setUser({
    nome: nome,
    idade: idade,
    email: email,
  })
}

// o 'onSubmit' no form, é que chama a função para inseriros valores colocados nos inputs
  return(
    <div>
      <form onSubmit={handleRegister}>

        <h1>Cadastrando usuário</h1>
        <label>Nome:</label><br/>
        <input placeholder='Digite seu nome'
        value={nome}
        onChange={ (e)=> setNome(e.target.value)  }
        /><br/>

        <label>Email:</label><br/>
        <input placeholder='Digite seu email'
        value={email}
        onChange={ (e)=> setEmail(e.target.value)  }
        /><br/>

        <label>Idade:</label><br/>
        <input placeholder='Digite sua idade'
        value={idade}
        onChange={ (e)=> setIdade(e.target.value)  }
        /><br/>

        <button type='sumit'>Registrar</button>
      </form><br/><br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span>
      </div>
    
    </div>
   
  );
}

export default App;

