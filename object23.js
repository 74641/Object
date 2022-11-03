class user{
    constructor (name,id,shift,hours){
        this._name = name;
        this._id = id;
        this._shift = shift;
        this._hours = hours;
    }
    get name(){
        return this._name;
    }
    set name(newname){
        this._name = newname;
    }
}
    
    
class administrator extends user{
    constructor (id,shift,hours){
        super(id,shift,hours);
        this._role = _role;
    }
    get _role(){
        return this._role;
    }
    set _role(newrole){
        this._role = newrole;
    }
}

const jay = new administrator("Jay", 1230, "1","5");
console.log(jay.name);
console.log(jay.role);
