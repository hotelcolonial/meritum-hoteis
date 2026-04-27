# Instruções para Visualizar o Site em Localhost

## Passo a Passo

1. **Instalar as dependências** (se ainda não instalou):
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar no navegador**:
   - O servidor estará rodando em: **http://localhost:3000**
   - Abra seu navegador e acesse essa URL

## Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção

## Porta Configurada

O servidor está configurado para rodar na porta **3000** (conforme `vite.config.ts`).

Se a porta 3000 estiver ocupada, o Vite automaticamente tentará a próxima porta disponível (3001, 3002, etc.) e mostrará no terminal qual porta está sendo usada.
