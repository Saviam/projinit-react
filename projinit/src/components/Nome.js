function Nome({aluno, idade}){ //poderia colocar 'props' direto sem as chaves,mas desse jeito que esta é no metodode 'destructure"
    return(
      <span>Bem vindo: {aluno} - Idade:{idade}</span>
    )
  }

  export default Nome