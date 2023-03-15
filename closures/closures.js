//*---------- EJERCISE 1 ------------
/* function closExterna() {
  let count = 0;
  function closInterna() {
    count++;
    return count;
  }
  return closInterna;
}

const clos = closExterna();
console.log(clos());
console.log(clos());
console.log(clos());
console.log(clos()); */
//*------------------------------
function closExterna() {
  let count = 0;
  function incrementar() {
    count++;
    return count;
  }
  function decrementar() {
    count--;
    return count;
  }
  function valor_actual() {
    return count;
  }
  //return FUNCION EXTERNA
  return {
    incrementar: incrementar,
    decrementar: decrementar,
    valor_actual: valor_actual,
  };
}

const clos = closExterna();
console.log(clos);
// {
//   incrementar: [Function: incrementar],
//   decrementar: [Function: decrementar],
//   valor_actual: [Function: valor_actual]
// }

console.log(clos.incrementar());//ejecuta la propiedad incrementar que tiene como value FUNCTION
console.log(clos.decrementar());
console.log(clos.valor_actual());
