const Dataarray = [];

module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    save() {
        Dataarray.push(this)
    }
    static fetchAll(){
         return Dataarray;
    }
}