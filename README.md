# Blog Interativo

Este é um projeto de um blog dinâmico e interativo desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS). O objetivo é oferecer uma experiência de leitura fluida com funcionalidades modernas de interação no lado do cliente.

## 🚀 Funcionalidades

- **Slider de Imagens Automático**: Um carrossel de fotos no post principal que alterna automaticamente para destacar diferentes visuais.
- **Sistema de Comentários Dinâmico**: Permite que os leitores enviem comentários em tempo real. Os dados são processados e exibidos na página sem a necessidade de recarregamento.
- **Expansão de Conteúdo ("Ler mais")**: Melhora a legibilidade da página inicial ocultando detalhes extensos dos posts, permitindo que o usuário escolha o que deseja ler.
- **Navegação Responsiva**: Menu de navegação simplificado e layout estruturado para diferentes dispositivos.

## 📂 Estrutura do Projeto

- `blog.html`: Contém a marcação estrutural, o formulário de comentários e a estrutura do slider.
- `blog.js`: Gerencia a lógica de alternância do slider, a manipulação do DOM para novos comentários e o controle de exibição dos posts.
- `style.css`: Responsável pelo design visual e animações (arquivo referenciado no HTML).

## 🛠️ Como Executar

1. Clone ou baixe os arquivos para sua máquina local.
2. Certifique-se de que a pasta `img/` contém as imagens referenciadas no HTML para que o slider funcione visualmente.
3. Abra o arquivo `blog.html` em qualquer navegador web moderno (Chrome, Firefox, Edge, etc.).

## ⚠️ Observações de Desenvolvimento

Para que o projeto funcione perfeitamente, considere as seguintes correções técnicas identificadas:
1. **Sincronização de IDs**: No `blog.js`, o código busca por IDs como `radio1`, enquanto no `blog.html` os IDs estão definidos como `slide1`.
2. **Correção de Erros**: Existe um erro de digitação no objeto global `document` na inicialização do slider.

---
Projeto desenvolvido para fins educacionais e de portfólio.
