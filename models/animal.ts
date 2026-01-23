class Animal {
    tipo: string;
    species: string;
    voar: boolean;

    //Metudo Construtor 
    constructor(tipoParametro: string, speciesParametro: string, voaParametro: boolean) {
        this.tipo = tipoParametro;
        this.species = speciesParametro;
        this.voar = voaParametro;

    }
}

export default Animal;