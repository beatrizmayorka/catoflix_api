# Catoflix

## Instituição Educacional

> [Centro Universitário Católica de Santa Catarina](https://www.catolicasc.org.br/)

## Autora do Projeto

> [Beatriz Mayorka de Aguiar](https://br.linkedin.com/in/beatriz-mayorka-de-aguiar-a40951198)

## Professor Orientador

> [Diogo Winck](https://github.com/dvwinck)

## Controle de Tarefas - Trello

* [Kanban do Projeto](https://trello.com/b/OHCqcUeJ/portif%C3%B3lio-de-projeto)

### O que é o Catoflix?

Catoflix é um portal que dispõe o ranking de melhores produtos audiovisuais. Esta aplicação consome duas APIs. Uma API externa e pública de filmes e tv shows, com acesso disponibilizado a partir de uma key (chave) disponibilizada somente para esta aplicação, através de uma requisição de API no site do The Movie Database (TMDB). Já a outra API é a do Facebook, que fornece acesso à rede social para que seja realizado o acesso no portal através de Log In.

* [TMDB](https://www.themoviedb.org/)
* [Meta for Developers](https://developers.facebook.com/)

### Para que serve? 

Com a plataforma o usuário pode verificar qual é o melhor programa ou filme do momento para ele assistir, pode pesquisar algum filme que tenha assistido e receberá informações relevantes, como quanto foi gasto para produzir o filme, quanto foi o lucro obtido, qual a descrição do filme e qual foi a porcentagem de estrelas que este obteve pelo público.

## Objetivo do Projeto

Este projeto teve como objetivo criar um portal, onde o usuário pudesse visualizar o ranking de melhores filmes do momento. Ele teria a possilidade de visualizar as informações sobre o filme, poderia pesquisar qualquer filme de sua escolha e teria o retorno do mesmo. Para que o usuário obtivesse acesso às informormações, seria necessário que o projeto consumisse uma API externa e aberta ao público, que contivesse os filmes, tv shows, etc..., e informações sobre eles.

## Roadmap

O projeto continua a ser desenvolvido, buscando a melhoria contínua e implementações de qualidade que visem a melhor experiência do usuário no portal. 

- [x] Definir escopo do projeto.
- [x] Escolher as liguagens a serem utilizadas.
- [x] Iniciar a tela `Home`.
- [x] Construir cards e integração para conexão com a API.
- [x] Conectar API TMDB ao projeto
- [x] Implementar log in no portal via Facebook.
- [x] Conectar API do Facebook na aplicação.
- [x] Criar camada de persistência.
- [ ] Criar uma tela de cadastro do usuário.
- [ ] Implementar redefinição de senha e envio de link de recuperação via email.
- [ ] Apresentação para a banca.

## Como rodar o projeto

O Log In na aplicação só funcionará após realizar uma configuração no site [Meta for Developers](https://developers.facebook.com/). 
Deve ser realizado o Log In e após isso, deverá ser realizado o passo a passo como mostra neste tutorial -> [Youtube](https://www.youtube.com/watch?v=BHB4ZZhuKEE)

Quando estiver com a conta do Facebook logada no site, deverá colocar o seu ID na linha de código sublinhada em vermelho. Segue abaixo:

![appID](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/appID.png)

Agora é possível realizar a conexão.

### Execução do projeto

Ao clonar meu projeto em sua máquina, execute os comandos `npm install` e `npm install vite` para instalar as depêndencias do projeto, como mostra a seguir: 

![Dependências](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/dependencias.png)

Agora coloque o comando `npm run dev`

![run](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/run.png)

### Atenção

##### A url que deverá ser rodada no servidor e deverá estar na configuração do site Meta for Developers deve ser como a que está abaixo: 

`http://localhost:5173`

## Descrição do código

Para criar a tela de login foi utilizado a biblioteca `LoginSocialFacebook` que permitiu conectar a minha aplicação com a API do Facebook. Já para solicitar acesso aos dados do usuário
  foi utilizada a biblioteca <FacebookLoginButton>, que fornece o botão da rede social utilizada e assim que apertamos no botão e entramos na nossa conta, seguimos para a página que dá acesso
  ao ranking de melhores produtos audiovisuais disponíveis. Os dados do usuário ficam salvos na camada de persistência `localStorage`.
  
No `navbar` foi implementado a lógica que, se a url conter a string `login` o formulário de busca é removido. Também contém o botão de saída, que direcionará o usuário 
  para o caminho de login, como se estivesse realizando o logout do portal.  

![code](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/code.png)

![code 2](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/code2.png)

![code 3](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/code3.png)

## Requisitos funcionais

* [RF-01] O sistema deve permitir a busca de qualquer produto audiovisual.
* [RF-02] Deve permitir que o usuário faça Log In através de sua conta no Facebook.
* [RF-03] O sistema deve manter o usuário logando enquanto está acessando outras páginas da aplicação.
* [RF-04] O sistema deve realizar o logout do usuário assim que ele apertar no botão de saída.
* [RF-05] Deve mostrar o ranking por ordem de mais favoritado.

## Requisitos não funcionais

* [RFN-01] O sistema deve ser acessado via web.
* [RFN-02] Deve ser programado em JavaScript e React
* [RFN-03] O sistema deve conectar-se a duas APIs distintas.
* [RFN-04] O usuário deve ser informado caso haja algum erro de sistema ou Log In.

## Diagrama de caso de uso

###### O diagrama abaixo representa um caso de uso com as funcionalidades da aplicação enquanto o usuário está acessando a interface gráfica.

![Diagrama de Caso de Uso](https://github.com/beatrizmayorka/catoflix/blob/main/catoflix/img/caso_de_uso.png.png)

## Arquitetura do Projeto

A aplicação foi desenvolvida na linguagem JavaScript e utiliza a biblioteca React.JS, a qual permitiu o desenvolvimento de componentes de estado no código. A arquitetura escolhida foi REST (Representational State Transfer), um estilo arquitetônico usado para desenvolver software distribuído baseado em comunicação por rede.

![Arquitetura](catoflix/img/arquitetura.png)

## Tecnologias utilizadas no projeto

 > [Vite](https://vitejs.dev/)
 
 > [React](https://pt-br.reactjs.org/)
 
 > [JavaScript](https://www.javascript.com/)
 
 > [Jest](https://jestjs.io/pt-BR/)

## Telas da Aplicação

### Log In

![Login](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/Login.png)

### Home

![Tela Home 1](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/catoflix_home.png)

![Tela Home 2](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/catoflix_home_2.png)

# ----------------------------------------------------------------

### Resultado do clique no botão << Ver mais >>

![Tela description 1](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/descricao_1.png)

![Tela description 2](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/descricao_2.png)

# ----------------------------------------------------------------

### Resultado da pesquisa

![Tela search 1](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/pesquisa_filme_1.png)

![Tela search 2](https://github.com/beatrizmayorka/catoflix_api/blob/Master/catoflix/img/pesquisa_filme_2.png)

## Dificuldades 

A maior dificuldade no desenvolvimento do portifólio foi conseguir realizar a integração de tudo o que foi aprendido durante os semestres. Muito do que se é passado vai sendo esquecido com o tempo e conforme não utilizamos no dia-a-dia, por isso acredito que tenha demandado esforço em buscar conteúdo para aprender, dedicação e tempo para realizar cada etapa até aqui.

## Considerações finais

Desde que iniciei o primeiro semestre e tive contato com programação web, achei super interessante. Nunca gostei de construir backend e olhando para o mercado, as empresas buscam alguém que seja especialista em uma área da programação. O processo de chegar até aqui pode ser doloroso, principalmente quando sempre precisamos nos manter atualizados sobre as tecnologias que o mercado está apontando. Este é o maior desafio. Deixo aqui o meu agradecimento a todos que contribuíram para a minha evolução. 
