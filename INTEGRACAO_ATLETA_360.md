# Área do Atleta — interface desktop (protótipo)

Esta versão substitui o iframe por uma interface nativa e responsiva no site institucional, incluindo Início, Documentos, Agenda, Conteúdos e Perfil.

## Segurança e estado real
- **Não há autenticação implementada**: o frontend não dispõe das credenciais de integração nem da API do serviço original.
- O formulário não transmite nem armazena e-mails ou senhas; informa que a integração ainda é necessária.
- O botão de prévia permite inspecionar o layout **sem autenticação** e usa apenas placeholders sem dados privados.
- Não há documentos, compromissos ou perfis pessoais carregados; não existe backend vinculado.
- As páginas privadas reais exigem uma API autenticada e autorização por usuário em TODA requisição, validação de sessão, logout, expiração e políticas RLS equivalentes no backend.
- Não substitui a área privada real para uso em produção.

## Para conectar de verdade
Acesso autorizado ao repositório Lovable e à configuração da infraestrutura (ex.: Supabase Auth/RLS, API e tabelas), sem compartilhar senhas pessoais. Documentar modelos de dados, permissões, estado de sessão e endpoints. Só então ligar os componentes desktop aos dados reais e habilitar o login com autenticação testada.


## V19: login demonstrativo
O formulário aceita qualquer e-mail com formato válido e senha não vazia **somente para visualizar o protótipo**. Não há autenticação, autorização, sessão real, banco de dados nem proteção de informações privadas. Nunca use credenciais verdadeiras. Não publicar esta tela como sistema de acesso privado.
