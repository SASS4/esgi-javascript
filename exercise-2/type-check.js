function type_check_v1(arg1, arg2) {
    if (arg1 === null && arg2 == "object") return false;
    else if (arg1 === null && arg2 === "null") return true;
    else if (Array.isArray(arg1) && arg2 === "object") return false;
    else if (Array.isArray(arg1) && arg2 === "array") return true;
    else return typeof arg1 === arg2;
}

//console.log(type_check_v1(1,"number"));

function type_check_v2(arg1, arg2) {
    if(typeof arg1 === "number") {
        for(let i = 0; i < arg2.enum.length; i++){
            if(arg2.enum[i] === arg1){
                return true;
            }
        }
        return false;
    }
    else if(typeof arg1 === "string" && arg1 === arg2.value) return true;
    else if(typeof arg1 === "string" && arg1 !== arg2.value) return false;
    return typeof arg1 === arg2.type;
}

//console.log(type_check_v2(2,{enum:[]}));