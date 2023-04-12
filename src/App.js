import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-Prot">
        <h1>Protótipo de Redefinição</h1>
      </header>

      <header className="App-Tela">
        <h3>Página Inicial</h3>
        <h3>Login</h3>
        <h3>Redefinir Senha</h3>
      </header>

      <body className="App-Senha">
        <form h2>
          <h3>Redefinir senha</h3>
          <input type="password" name="senha1" placeholder="Senha atual:" />
          <input type="password" name="senha2" placeholder="Nova senha:" />
          <input type="password" name="senha2" placeholder="Confirmar senha:" />
        </form>

        <form>
          Sua senha deve conter no mínimo 8 caracteres, 1 letra maiúscula e 1
          caractere especial.
        </form>
      </body>

      <form h4>
        <input type="submit" nome="acao" value="Confirmar" />
      </form>

      <form h5>
        <h5>Voltar para tela de login ou criar uma conta</h5>
      </form>
    </div>
  );
}

export default App;
