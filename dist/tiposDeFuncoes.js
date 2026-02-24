"use strict";
//Reuso de código com Alias de tipo
Object.defineProperty(exports, "__esModule", { value: true });
//A funcSoma é do type calculadora, logo tem que respeitar a assinatura definida nela.
let funcSoma = (num1, num2) => num1 + num2;
//funcSubtrai também é do tipo calculadora e respeita a mesma assinatura.
let funcSubtrai = (num1, num2) => num1 - num2;
console.log(funcSoma(6, 8));
console.log(funcSubtrai(16, 8));
let funcSomaI = (num1, num2) => num1 + num2;
let funcSubtraiI = (num1, num2) => num1 - num2;
console.log(funcSomaI(6, 8));
console.log(funcSubtraiI(16, 8));
//# sourceMappingURL=tiposDeFuncoes.js.map