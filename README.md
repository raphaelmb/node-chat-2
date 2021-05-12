# Trabalho 02

Chat utilizando webservice como intermediário.

## Instalação

Projeto feito em Node.js. Para rodar, execute

```bash
npm install
```
na raiz do projeto e depois

```bash
node server.js
```

para iniciar.

## Funcionamento

Na pasta "public" do projeto, há uma página html simples com 3 campos (usuário, destinatário e mensagem) e 2 botões (enviar e receber). Abra a página em 2 abas do navegador.

Ao preencher usuário, destinatário e mensagem e clicar em enviar, uma requisição POST é enviada ao servidor que registra as informações em um array (para simplificar o projeto decidi guardar os dados em memória). Lá então é registrada as informações passada nos campos.

Em outra aba, ao colocar no campo "usuário" o destinatário descrito na etapa anterior, o mesmo pode preencher os campos e enviar uma mensagem ou, ao clicar no botão "receber", a página fará uma requisição GET ao servidor que devolverá todas as mensagens que forem enviadas a esse usuário.

Assim, o servidor recebe no endpoint "/messages" requisições do tipo POST que registram as mensagens enviadas e no endpoint "/messages/:username" recebe requisições do tipo GET que devolvem à página html as mensagens enviadas ao usuário referido no campo.
