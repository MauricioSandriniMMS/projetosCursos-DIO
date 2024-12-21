class hero{
    constructor(name,age,classe){
        this.name = name
        this.age = age
        this.classe = classe
    }
    atack(){
        const atack = ["magia","espada","arte marciais","shuriken"]
        const classs =["mago", "guerreiro", "monge", "ninja"]
        for(let i=0; i < classs.length; i++){
            if(classs[i] == this.classe){
                console.log(`o ${this.classe} atacou usando ${atack[i]}`)
            }
        }

    }
}

let myHero = new hero("mauricio","23","monge")
myHero.atack()