class ContaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
        this.registro = [];
    }

    deposita(quantidade) {
        this.saldo += quantidade;
        console.log("Você depositou", quantidade);
        console.log(`Seu saldo agora é ${this.saldo}`);
        this.registro.push(`Depositou ${quantidade}`);
    }

    saca(quantidade) {
        this.saldo -= quantidade;
        console.log("Você sacou", quantidade);
        console.log(`Seu saldo agora é ${this.saldo}`);
        this.registro.push(`Sacou ${quantidade}`);
    }

    mostraHistorico() {
        for (let i = 0; i < this.registro.length; i++) {
            console.log(this.registro[i]);
        }
    }
}

const pessoa1 = new ContaBancaria("Diego M.", 6000);
pessoa1.deposita(100);
pessoa1.saca(500);
pessoa1.mostraHistorico();
