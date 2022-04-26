class Accountant {
    static global = 0;

    constructor(name) {
        this.name = name;
        this.individual = 0;
    }

    contar() {
        this.individual = this.individual + 1;
        Accountant.global = Accountant.global + 1;
    }
    obtResponsable() {
        return this.name;
    }
    obtCuentaIndv() {
        return this.individual;
    }

    obtCntGlobal() {
        return Accountant.global;
    }
}

const gary = new Accountant('gary');
console.log('de gary');
gary.contar();
console.log(gary.name);
console.log(gary.obtResponsable());
console.log(gary.obtCuentaIndv());
console.log(gary.obtCntGlobal());

const steven = new Accountant('steven');
console.log('De steven');
console.log(steven.obtCntGlobal());
