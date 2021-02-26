export function HashMap(){
    var length = 0;
    var obj = new Object();

    this.isEmpty=function(){
        return length==0;
    }

    this.containsKey=function(key){
        return (key in obj);
    }

    this.put=function(key,value){
        obj[key]=value;
    }

    this.get=function(key){
        return this.containsKey?obj[key]:"";
    }
}