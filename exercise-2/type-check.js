function type_check_v1(arg1, arg2) {
    if (arg1 === null && arg2 == "object") return false;
    else if (arg1 === null && arg2 === "null") return true;
    else if (Array.isArray(arg1) && arg2 === "object") return false;
    else if (Array.isArray(arg1) && arg2 === "array") return true;
    else return typeof arg1 === arg2;
}

//console.log(type_check_v1(1,"number"));

function type_check_v2(arg1, arg2) {
    if (arg2.enum) {
        for (let i = 0 ; i< arg2.enum.length; i++) {
            if(arg2.enum[i] === arg1) return true;
        }
    }
    if (arg2.type) {
        if (arg2.value){
            return arg1 === arg2.value;
        }
        return typeof arg1 === arg2.type;
    }
    return typeof arg1 === arg2.type;
}

console.log(type_check_v2({prop1: 1}, {type: "object"}));
console.log(type_check_v2("foo", {type: "string", value: "foo"}));
console.log(type_check_v2("bar", {type: "string", value: "foo"}));
console.log(type_check_v2(3, {enum: ["foo", "bar", 3]}));