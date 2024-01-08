// União de tipos
// OR ->  um tipo ou (|) outro
function printStatusCode(code: string | number) {
     console.log(`Meu código de status é ${code}`);

     /*
          Aqui tem que ser trabalhado de um modo que aceite sempre os dois tipos.

          Por exemplo, não se pode usar aqui métodos como toUpperCase(), pois não 
     funcionam em numbers.
     */
}
printStatusCode(404);
printStatusCode("not found (404)")
