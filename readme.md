# Guia Alimentar App

### Resumo do Projeto

O Guia Alimentar App é um aplicativo móvel desenvolvido em Ionic que visa atender às necessidades dos usuários em relação à sua dieta e objetivos de saúde. O aplicativo oferece suporte para diversos objetivos, como emagrecimento, ganho de massa muscular, entre outros. Os usuários podem fornecer informações sobre seu perfil, restrições alimentares e objetivos, e com base nessas informações, o aplicativo gera recomendações de dieta personalizadas.

No futuro, o aplicativo incluirá um dashboard com gráficos de evolução do usuário e indicações de como melhorar o desempenho na dieta. Os usuários também poderão monitorar seu progresso e informar se estão cumprindo suas dietas. Caso não estejam, o aplicativo solicitará informações sobre o que gostariam de alterar para gerar uma nova dieta, se possível.

## Requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0
- Ionic CLI (Certifique-se de instalá-lo globalmente com `npm install -g @ionic/cli`)

### Desenvolvimento Local

Para desenvolver o projeto localmente, siga os passos abaixo:

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/guia-alimentar-app.git

2. **Instale as dependências:**

   ```bash
   npm install

3. **Inicie o servidor:**

   ```bash
   npm start

## Telas do Aplicativo

### Tela 1 - Login via Google (Autenticação)
O aplicativo oferece autenticação via Google.

### Tela 2 - Perfil do Usuário
Nesta tela, os usuários fornecem informações pessoais para que o aplicativo possa gerar uma dieta personalizada. As informações incluem:

- Nome;
- Foto de Perfil;
- Peso;
- Altura;
- Gênero;
- Objetivo;
- Restrições Alimentares;

### Tela 3 - Resultado do Plano
Após o usuário fornecer as informações do perfil, o aplicativo gera uma recomendação de dieta personalizada com base nos dados fornecidos. O usuário pode visualizar as informações da dieta nesta tela.

## Requisições (API)

### Autenticação
- Solicitação para fazer login com uma conta do Google.

### Perfil de Usuário
- Listar todos os usuários.
- Obter um usuário específico pelo ID.
- Adicionar um novo usuário.
- Atualizar um usuário específico pelo ID.
- Deletar um usuário específico pelo ID.

### Resultado Dieta
- Obter a dieta recomendada para um usuário específico com base em seu perfil.

## Executando o Aplicativo em um Dispositivo Físico ou Emulador
Para executar o aplicativo em um dispositivo físico ou emulador, consulte a documentação oficial do Ionic: https://ionicframework.com/docs/developing/running
