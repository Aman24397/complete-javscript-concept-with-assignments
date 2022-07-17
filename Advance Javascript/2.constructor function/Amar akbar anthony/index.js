
let Amar={
    name:"amar",
    skill:"singer",
    living:"Goa",
}
let Akbar={
    name:"akbar",
    skill:"chef",
    living:"mumbai",
}
let Anthony={
    name:"anthony",
    skill:"Magician",
    living:"Kashmir",
}

function Borrow(n,skill){
    console.log(`${this.name} borrowed skill of ${n}'s ${skill}`)
}

Borrow.call(Amar,"akbar","chef")
Borrow.call(Akbar,"athony","Megician")
Borrow.call(Anthony,"amar","singer")