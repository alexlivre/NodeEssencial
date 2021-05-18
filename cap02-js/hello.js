// Hash tables
let testeMap = () => {
    let map =[];
    map['nome'] = 'Alex';
    map['sobrenome'] = 'Santos'
    console.log(map)
    console.log('Nome completo: ', map['nome'], map['sobrenome']);
}

testeMap()

// Class

class Cachorro {
    constructor(nome = undefined, raca = undefined){
        this.nome = nome;
        this.raca = raca;
    }
    get Info(){
        return `O nome é ${this.nome} e a raça é ${this.raca}.`;
    }
    set NovaRaca(value){
        this.raca = value;
    }
    
}

let lessia = new Cachorro();

lessia.nome = 'Lessia'
lessia.raca = 'Pitbull'
console.log(lessia)

lessia.NovaRaca = 'Pinscher'
console.log(lessia.Info)

