# BioGame

Jogo educativo para celular sobre meio ambiente. O jogador encontra uma árvore quase sem vida e a recupera respondendo perguntas sobre plásticos, bioplásticos e consumo consciente. A cada nível concluído, a árvore da tela inicial é trocada por uma versão mais viva; depois do nível bônus, ela se torna a árvore dourada.

Projeto interdisciplinar desenvolvido em grupo.

## Integrantes

- Aurora Santos Gonçalves
- Letícia Anti de Freitas Andrade
- Lorena Rodrigues Marinho
- Marina Yumi Shinomiya Brugnoli
- Maycon Ryan Fontinele de Araújo

## O que o projeto tem

- **Aplicativo mobile** (pasta `App-BioGame`): login e cadastro, 4 níveis com 4 fases cada, narrativa e quiz por fase, vidas em folhas, nível bônus, árvores por etapa, "Suas árvores", amigos, ranking, conta, configurações e privacidade.
- **Landing page** (pasta `Landing-Page`): site de divulgação com o projeto, objetivos, funcionalidades e a equipe.

## Ferramentas utilizadas

| Área | Ferramenta |
| --- | --- |
| App | React Native 0.86 + React 19, com Expo SDK 57 |
| Navegação | React Navigation 7 (stack e abas) |
| Login e dados | Firebase Authentication (e-mail e senha) e Cloud Firestore |
| Fonte e ícones | Nunito (`@expo-google-fonts/nunito`) e `@expo/vector-icons` |
| Versão web do app | react-native-web |
| Design | Protótipo no Figma (telas e ilustrações em SVG) |
| Landing page | HTML5, CSS3 (Flexbox, Grid, variáveis) e Google Fonts |

## Como executar

### Requisitos

- [Node.js](https://nodejs.org) 20 ou superior (com npm)
- Aplicativo **Expo Go** no celular (Android ou iOS), ou um emulador Android/iOS
- Conta no [Firebase](https://console.firebase.google.com) (já configurada no projeto, veja o passo 3)

### 1. Instalar as dependências

```bash
cd App-BioGame
npm install
```

### 2. Iniciar o app

```bash
npx expo start
```

- **No celular:** abra o Expo Go e leia o QR Code que aparece no terminal (celular e computador na mesma rede Wi-Fi).
- **No emulador:** com o servidor aberto, pressione `a` (Android) ou `i` (iOS).
- **No navegador:** pressione `w`, ou rode `npm run web`.

Atalhos do `package.json`: `npm start`, `npm run android`, `npm run ios`, `npm run web`.

### 3. Configurar o Firebase

As chaves do projeto ficam em `App-BioGame/configuration/firebase.js`. Para usar outro projeto Firebase, troque o objeto `firebaseConfig` por um seu e, no console do Firebase:

1. **Authentication > Método de login:** ative **E-mail/senha**.
2. **Firestore Database:** crie o banco.
3. **Firestore > Regras:** cole as regras abaixo e publique.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /perfis/{uid} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
    match /usuarios/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      match /amigos/{amigoUid} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
  }
}
```

### 4. Usar o app

1. Crie uma conta (Cadastro) e entre.
2. Na Home, toque em **Continuar** para escolher o nível e a fase.
3. Leia a narrativa e responda ao quiz. Errar custa uma folha de vida e permite tentar de novo.
4. Conclua os 4 níveis para liberar o nível bônus e ganhar a árvore dourada.
5. Em **Amigos > Gerenciar amizades**, adicione outra conta pelo e-mail. A pessoa precisa ter entrado no app ao menos uma vez.

O progresso fica salvo no Firestore, por conta.

### Landing page

Não precisa instalar nada. Abra `Landing-Page/index.html` no navegador, mantendo a pasta `imagens` ao lado do arquivo (ou use a extensão Live Server do VS Code).

## Estrutura de pastas

```
BioGame-Interdiciplinar-main
├── README.md
├── Landing-Page/          site de divulgação
└── App-BioGame/
    ├── App.js, Route.js   entrada e navegação
    ├── Progresso.js       progresso, vidas e amigos (contexto)
    ├── Telas/             telas do jogo
    ├── TelasLogin/        login, cadastro e recuperação de senha
    ├── components/        componentes reutilizáveis
    ├── dados/niveis.js    níveis, fases, narrativas e perguntas
    ├── services/          Firebase (login, progresso, amigos)
    ├── configuration/     configuração do Firebase
    ├── theme.js           cores, fontes e escala
    └── assets/            imagens e ilustrações
```

## Observações

- Os amigos são adicionados só por quem adiciona (a amizade não é mútua automaticamente).
- O nome exibido é o do perfil ou, se não houver, a parte do e-mail antes do `@`.
