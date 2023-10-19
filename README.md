# Ethniscan

**Ethniscan** é uma aplicação que utiliza modelos de aprendizado de máquina (com Teacheble MAchine) e TensorFlow para identificar e prever a etnia com base em imagens carregadas. Este projeto foi desenvolvido pela turma de Frontend da **FAP-Softex | Pró-Criança** sob a orientação do Professor Breno Liberatto. O grupo responsável por esta aplicação é composto por Davi Roberto da Costa França, Ewerton Santos Gomes de Oliveira e Geilson Silva (Fidelis).

## Visão Geral

Esta aplicação permite que os usuários carreguem imagens e recebam uma previsão da etnia com base no conteúdo da imagem. Ela utiliza um modelo de aprendizado de máquina previamente treinado e a biblioteca TensorFlow para fazer essas previsões.

## Como Usar

### Página Inicial

A página inicial da aplicação oferece uma interface simples e intuitiva para o usuário:

- **Título**: O logotipo do Ethniscan no topo da página.
- **Carregamento de Imagem**: Os usuários podem clicar na área designada ou no botão "Clique aqui para adicionar uma foto" para selecionar uma imagem.
- **Botão "Identificar Etnia"**: Após o carregamento da imagem, o botão "Identificar Etnia" é ativado para iniciar o processo de identificação da etnia.
- **Imagem Carregada**: A imagem carregada será exibida na página para referência.

### Processo de Identificação

1. O usuário carrega uma imagem clicando na área designada ou selecionando um arquivo.
2. Após o carregamento da imagem, o botão "Identificar Etnia" fica disponível.
3. O usuário clica no botão "Identificar Etnia".
4. A aplicação inicia o processo de identificação da etnia com base na imagem carregada.
5. Durante o processo, uma barra de progresso é exibida para indicar o andamento.
6. Uma vez concluído, a aplicação exibe os resultados.

### Resultados

- **Lista de Etnias**: A aplicação exibe uma lista de etnias com a probabilidade de correspondência. Isso permite que o usuário veja a probabilidade de a imagem pertencer a grupo etnico listado.

- **Etnia com Maior Probabilidade**: A etnia com a probabilidade mais alta é destacada, e um link "Informações sobre a etnia" é fornecido para obter mais informações sobre essa etnia.

## Configuração

- A URL do modelo Teachable Machine é definida em `MODEL_URL` no arquivo `script.js`. Certifique-se de que esta URL seja atualizada conforme necessário para a localização do modelo de aprendizado de máquina.

## Desenvolvimento

Se você deseja contribuir ou desenvolver ainda mais o Ethniscan, siga as etapas a seguir:

1. Clone este repositório.

```bash
git clone https://seu-repositorio.com/ethniscan.git
```

2. Faça as alterações necessárias nos arquivos `index.html`, `style.css` e `script.js`.

3. Execute um servidor local para testar suas alterações.

```bash
python -m SimpleHTTPServer 8000
```

4. Abra um navegador e acesse `http://localhost:8000` para visualizar suas alterações.

5. Após concluir as alterações e testes, faça um commit e envie um pull request para o repositório principal.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter detalhes.

## Créditos

- Prof. Breno Liberatto: Orientação do projeto.
- [Davi Roberto da Costa França](https://github.com/daviroberto1): (Java Script).
- [Ewerton Santos Gomes de Oliveira](https://github.com/Ewertonsgo): HTML, CSS, criação e treinamento da model no Teacheble Machine.
- [Geilson Silva (Fidelis)](https://github.com/geilson25): HTML, CSS, Gestão do Projeto e apresentação do Ciclo de Vida de Desenvolvimento.

## Contato

Se você tiver alguma dúvida ou precisar de assistência adicional, sinta-se à vontade para entrar em contato com a equipe de desenvolvedores ou abrir uma issue no repositório.

---

Esperamos que você aproveite o uso desta aplicação! Alunos FAP-Softex | Front-End | Recife, PE - 2023.
