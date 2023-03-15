//*---------- EJERCICIO 1 -------------
/* class Animal {
      nombre;
      edad;
      color;
      piernas;
      constructor(nombre, edad, color, piernas) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.piernas = piernas;
      }
      getNombre() {
        return `Me llamo: ${this.nombre}, tengo ${this.edad} años, soy de color ${this.color} y tengo ${this.piernas} piernas`;
      }
    }

    class Perro extends Animal {
      constructor(nombre, edad, color, piernas) {
        super(nombre, edad, color, piernas);
      }
      getNombre() {
        return `Me llamo: ${this.nombre}, tengo ${this.edad} años, soy de color ${this.color} y tengo ${this.piernas} piernas`;
      }
    }

    class Gato extends Animal {
      constructor(nombre, edad, color, piernas) {
        super(nombre, edad, color, piernas);
      }
      getNombre() {
        return `Me llamo: ${this.nombre}, tengo ${this.edad} años, soy de color ${this.color} y tengo ${this.piernas} piernas`;
      }
    }

    const perro1 = new Perro("Firulais", 3, "cafe", 4);
    const gato1=new Gato('Peluche',5,'verde',4)
    console.log(gato1.getNombre());
    console.log(perro1.getNombre()); */

//*---------- EJERCICIO 2 -------------
/* class statistics {
      static count() {
        const ages = [
          31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
          31, 34, 24, 33, 29, 26,
        ];
        return ages.length
      }

      static sum() {
        const ages = [
          31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
          31, 34, 24, 33, 29, 26,
        ];
        return ages.reduce((acc, curr) => acc + curr);
      }

      static min(){
        const ages=[
          31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
          31, 34, 24, 33, 29, 26,
        ]
        let min=ages[0]
        for (let index = 1; index < ages.length; index++) {
          if (min > ages[index]) {
            min=ages[index]
          }
        }
        return min
      }
    }

    console.log(statistics.count());
    console.log(statistics.sum());
    console.log(statistics.min()); */

//*---------- EJERCICIO 3 -------------

class PersonAccount {
  constructor(nombre, apellido, ingresos, gastos) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ingresos = ingresos;
    this.gastos = gastos;
  }

  totalIncome() {
    return this.ingresos;
  }

  totalExpense() {
    return this.gastos;
  }

  accountInfo() {
    return (
      `${this.nombre} ${this.apellido}, su informacion es la siguiente: tiene como ingresos ${this.ingresos} y gastos ${this.gastos}. Como balance tiene:` +
      this.accountBalance()
    );
  }

  addIncome(add) {
    this.ingresos += add;
  }

  addExpense(add) {
    this.gastos += add;
  }
  accountBalance() {
    const balance = this.ingresos - this.gastos;
    return balance;
  }
}
const persona1 = new PersonAccount("rafael", "salirrosas", 2000, 300);
console.log(persona1);
persona1.addIncome(100);
console.log(persona1);
console.log(persona1.accountBalance());
persona1.addExpense(50);
console.log(persona1.accountInfo());