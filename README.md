# 🏋️‍♂️ Projeto: Dados de Atletas  
Aplicação em JavaScript para calcular informações de atletas.

## 📌 Descrição

Este projeto consiste em uma aplicação desenvolvida em **JavaScript**, cujo objetivo é receber informações de atletas e calcular automaticamente:

- Categoria do atleta  
- IMC (Índice de Massa Corporal)  
- Média válida das notas  

O software utiliza uma classe chamada **Atleta**, responsável por concentrar todos os atributos e métodos necessários.

---

## 🧩 Funcionalidades da Classe Atleta

A classe **Atleta** recebe os seguintes atributos:

- **nome**
- **idade**
- **peso**
- **altura**
- **notas** (array numérico)

### Métodos de cálculo

- **calculaCategoria()** → Determina a categoria do atleta  
- **calculaIMC()** → Calcula o IMC  
- **calculaMediaValida()** → Calcula a média válida removendo maior e menor nota  

### Métodos de acesso

- `obtemNomeAtleta()`  
- `obtemIdadeAtleta()`  
- `obtemPesoAtleta()`  
- `obtemNotasAtleta()`  
- `obtemCategoria()`  
- `obtemIMC()`  
- `obtemMediaValida()`  

---

## 🧮 Regras de Negócio

### 1. Categoria por idade

| Idade | Categoria |
|-------|-----------|
| 9 a 11 | Infantil |
| 12 e 13 | Juvenil |
| 14 e 15 | Intermediário |
| 16 a 30 | Adulto |
| Outros | Sem categoria |

---

### 2. Cálculo do IMC

