class contaBancaria
{
    constructor(nome, saldo){

        this.nome = nome;
        this.saldo = saldo;

    }
    deposita(quantidade)
    {
        this.saldo = this.saldo + quantidade;
        console.log("Você depositou", quantidade);
        console.log(`Seu saldo agora é ${this.saldo}`);
    }
    saca(quantidade)
    {
        this.saldo = this.saldo - quantidade;
        console.log("Você sacou", quantidade);
        console.log(`Seu saldo agora é ${this.saldo}`);
    }
    

}

const pessoa1 = new contaBancaria("Diego M.", 6000);
pessoa1.deposita(100);
pessoa1.saca(500);
