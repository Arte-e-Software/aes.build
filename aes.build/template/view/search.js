module.exports = data => {

    return `
    
    <!doctype html>
<html lang="pt-br">
  <%-include ./parts/head.ejs %>
  <body>
    
<nav class="navbar navbar-expand-md navbar-light fixed-top bg-light shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="img/Persona360LogoTexto.svg" height="55rem"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0" id="navul">
        
      </ul>
      <div class="d-flex" id="navavatar">
       
      </div>
    </div>
  </div>
</nav>

<main class="flex">
  <div class="p-4">
    <form>
      <h1 class="h3 mb-3 fw-normal">Informe suas credenciais</h1>
  
      <div class="form-floating mb-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Senha</label>
      </div>
  
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Lembrar
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Acessar</button>
    </form>
  </div>
</main>

<%-include ./parts/js.ejs %>
      
  </body>
</html>
<!--

    Entity: ${ data.entity }
    <br>
    Layer: ${ data.layer }
    <br>
    Module: ${ data.module }
    <br>
    Fields: ${ JSON.stringify(data.fields) }

-->
    `;

};