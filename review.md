# 🔄 Code Review — Sistema de Pedidos Online

## 🧠 Visão geral
Projeto bem estruturado e com boa separação entre frontend (React) e backend (Node.js + Prisma). O fluxo de carrinho e checkout está claro e funcional. Abaixo estão comentários técnicos, sugestões de melhoria e boas práticas para evolução do sistema.

---

# 🔍 Code Review — Backend

## 1. Separação de responsabilidades (Controller vs Service)
🔍 O `cartController.js` parece conter regras de negócio diretamente.

💡 Sugestão: criar uma camada `CartService` para centralizar regras de negócio.

**Benefícios:**
- Melhor testabilidade
- Código mais limpo
- Reutilização de lógica

---

## 2. Regras de negócio no backend
🔍 Regras como quantidade mínima 1 e máxima 10 podem estar apenas no frontend.

💡 Isso é um problema, pois o frontend pode ser manipulado.

✔️ Sugestão: validar sempre no backend também.

---

## 3. Uso direto do Prisma no controller
🔍 Prisma pode estar sendo usado diretamente no controller.

💡 Sugestão: criar `CartRepository`.

**Benefícios:**
- desacoplamento da base de dados
- facilidade para trocar banco futuramente
- melhor organização

---

## 4. Endpoint de checkout
🔍 Endpoint `deleteAllItems` representa checkout.

💡 Problema: nome não reflete regra de negócio.

✔️ Sugestão:
- `POST /checkout`
- ou `POST /cart/checkout`

---

## 5. Padronização REST
🔍 Possível inconsistência entre PUT e PATCH.

💡 Sugestão:
- `PATCH /cart/:id` → atualização parcial
- `PUT /cart/:id` → substituição total

---

## 6. Tratamento de erros
🔍 Try/catch existe, mas pode ser melhor padronizado.

💡 Sugestão:
Criar middleware global de erro.

---

## 7. Seed de dados
🔍 `seed.js` está presente (boa prática).

💡 Sugestões:
- evitar duplicação de dados
- adicionar script no `package.json`

---

## 8. Acoplamento com SQLite
🔍 Código pode estar dependente do SQLite.

💡 Sugestão:
Evitar lógica dependente do banco no core da aplicação.

---

# 🔍 Code Review — Frontend (React)

## 9. Uso de useState e useEffect
✔️ Uso correto dos hooks.

💡 Sugestão:
Criar custom hooks:
- `useCart`
- `useProducts`

---

## 10. Chamadas de API dentro dos componentes
🔍 Possível presença de fetch/axios nos componentes.

💡 Sugestão:
Mover para `/services`

Exemplo:
