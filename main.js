function Veiculo(marca, modelo) {
  this.marca = marca; // Atributo público
  this.modelo = modelo;

  // Método compartilhado
  this.buzinar = function () {
    console.log(`${this.modelo} está buzinando: Beep Beep!`);
  };
}

function Carro(marca, modelo, portas) {
  // Herda atributos de Veiculo
  Veiculo.call(this, marca, modelo);

  this.portas = portas; // Atributo específico

  // Polimorfismo: implementação específica de acelerar
  this.acelerar = function () {
    console.log(`O carro ${this.modelo} está acelerando rápido!`);
  };
}

function Moto(marca, modelo, cilindradas) {
  Veiculo.call(this, marca, modelo);

  this.cilindradas = cilindradas;

  this.acelerar = function () {
    console.log(`A moto ${this.modelo} de ${this.cilindradas}cc arrancou!`);
  };
}

// Criando instâncias
const meuCarro = new Carro("Toyota", "Corolla", 4);
const minhaMoto = new Moto("Honda", "CB 500", 500);
const carroAntigo = new Carro("Ford", "Fiesta", 2);

// Testando os objetos
meuCarro.acelerar();
minhaMoto.acelerar();
carroAntigo.buzinar();

// Verificando instâncias
console.log(meuCarro instanceof Carro);
console.log(minhaMoto instanceof Veiculo);
