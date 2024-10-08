# 04-funcoes-composicao-params-errors

## Composição de Funções

1. Encadeadas
2. Empilhadas

```js
// encadear
console.log(a(2, b(7, c())))
// empilhar
function c() {
    
}

function b() {
    var r = c();
}

function a() {
    var r = b()
}
```