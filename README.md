# MQS - Mano, Qual é a Sala?! 🧭

> **Eficiência e UX no Cotidiano Acadêmico.** Landing Page responsiva projetada para apresentar o assistente ágil e intuitivo do MQS, eliminando a burocracia e simplificando o acesso às informações de salas de aula e horários do IFTO.

[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 🛠️ Tecnologias e Arquitetura

O projeto foi inteiramente construído com tecnologias puras e sem dependências pesadas, garantindo excelente tempo de carregamento e fidelidade estética:

1. **HTML5 Semântico**: Estrutura limpa livre de "divsoup" (wrappers vazios excessivos), utilizando tags nativas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
2. **Bootstrap 5.3.3**: Utilização das classes utilitárias, componentes de navegação, grid de colunas e propriedades nativas de alternância de temas do framework.
3. **Custom CSS (`style.css`)**: Estilos organizados em seções limpas via banners, estendendo a identidade visual do MQS e adicionando recursos dinâmicos de acessibilidade.
4. **Vanilla JS (`script.js`)**: Controle completo de estados locais e manipulação da DOM sem dependência do jQuery.

---

## ♿ Funcionalidades de Acessibilidade & UX

### 🌓 Alternância de Temas com Persistência
Suporte completo para os modos **Claro** e **Escuro** nativos do Bootstrap 5. O estado preferido do usuário é persistido localmente no navegador sob a chave `tema` (`light`/`dark`).

### 🔤 Suporte à Dislexia (Fonte Acessível)
Botão para alternar dinamicamente a tipografia global para um modo legível e acessível. Aumenta o espaçamento entre letras (`letter-spacing`) e palavras, auxiliando na leitura confortável. Estado persistido localmente sob a chave `fonte` (`acessivel`/`padrao`).

### 🎨 Elevação Física e Contraste WCAG
* **Profundidade em Cards**: Substituição de fundos planos para evitar o colapso visual de bordas. No modo escuro, os cards assumem tom elevado (`#2b3035`) sobre o fundo chumbo (`#212529`). No modo claro, assumem branco puro (`#ffffff`) sobre fundo cinza claro (`#f8f9fa`).
* **Branding Seguro (Teal MQS)**: Otimização dinâmica da cor Teal. No modo escuro, o sistema transiciona do Teal padrão (`#00897B`) para uma variante luminosa e com excelente contraste (`#01a897`), respeitando as diretrizes de acessibilidade visual do WCAG.

### 📱 Grid de Recursos com Mockups em Alta Fidelidade
A seção de funcionalidades possui uma vitrine tridimensional dividida em 3 recursos principais do aplicativo, acompanhados de mockups de telas mobile reais gerados para o projeto:
* **Busca Direcionada**: Localização por curso, período e turno.
* **Grade Personalizada**: Quadro de horários adaptado à rotina acadêmica.
* **Acesso Rápido**: Favoritos disponíveis instantaneamente e offline.

---

## 🚀 Como Rodar o Projeto

Como o MQS é uma landing page estática desenvolvida com o máximo de otimização, você não precisa de complexidades ou pipelines de instalação para visualizá-la:

1. Baixe ou clone este repositório para o seu dispositivo local:
   ```bash
   git clone https://github.com/diegoaquinosza/Site-MQS-Projeto-Bootstrap.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Site-MQS-Projeto-Bootstrap
   ```
3. Abra o arquivo `index.html` diretamente em seu navegador web preferido (Google Chrome, Safari, Firefox, Microsoft Edge, etc.) ou utilize a extensão **Live Server** no VS Code.

---

## 🧑‍💻 Autoria e Créditos

Trabalho prático desenvolvido como parte integrante da formação acadêmica:

* **Disciplina**: Programação para Web Designers
* **Professor**: Wilson Wolf
* **Desenvolvedores**:
  * DIEGO AQUINO SOUZA
  * PAULO RICARDO SOUSA SILVA
  * LUIZA PALMA ALMEIDA MAIA
