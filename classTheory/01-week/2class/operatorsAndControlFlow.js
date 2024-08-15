var variable; // Declaración de una variable sin asignación de valor (var es el método antiguo de declaración)
variable = 1; // Asignación de un valor a la variable previamente declarada
let variable1 = 2; // Declaración e inicialización de una variable con let (forma moderna y preferida)

// Operadores
variable = 5;
variable1 = "5";
console.log(variable);
console.log(variable1);

let result = variable + 2; // suma
console.log(result);

let result2 = variable - 2; // resta

Math.PI; // objeto para operaciones matemáticas

let counter = 0;
counter++; // incremento
counter--; // decremento

console.log(variable == 5); // Igual a
console.log(variable != 5); // Diferente de

console.log(variable1 === 5); // Igualdad estricta

console.log(3 > 5); // mayor que
console.log(3 < 5); // menor que

console.log(variable == 5 && 3 > 5); // AND - Retorna true si ambas operadores son verdaderas o false si una o ambas no lo son
console.log(variable == 5 || 3 > 5); // OR - Retorna true si solo una es verdadera

// Controles de flujo
if (!variable1 == 1) {
  console.log("We are in condition if");
}

// Operador Ternario
const variable =
  variable == 5
    ? console.log("We are in condition if")
    : console.log("Condition was not met.");

// switch
switch (variable) {
  case "5":
    console.log("Variable value is 5");
    break;
  case Math.PI:
    console.log("Variable value is 3.1416...");
    break;
    default:
        console.log('')
}
