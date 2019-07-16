export class Dictionary{
    items = {};
    set = function(key:any, value:any){
        this.items[key] = value; 
    };
    remove = function(key:any){
        if (this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    };
    has = function(key:any){
        return this.items.hasOwnProperty(key);
    };
    get = function(key:any) {
        return this.has(key) ? this.items[key] : undefined;
    };
    clear = function(){
        this.items = {};
    };
    size = function(){
        return Object.keys(this.items).length;
    };
    keys = function(){
        return Object.keys(this.items);
    };
    values = function(){
        var values = [];
        for (var k in this.items) {
            if (this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    };
    each = function(fn:Function) {
        for (var k in this.items) {
            if (this.has(k)) {
                fn(k, this.items[k]);
            }
        }
    };
    getItems = function(){
        return this.items;
    }
}


