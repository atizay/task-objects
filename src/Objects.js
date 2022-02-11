export function personUpdate(data) {
    let result = { ...data };
    if (result.gender === 'female' && result.hasOwnProperty('age')) {
        delete result.age;
    }
    if (result.gender === 'male' && !result.hasOwnProperty('income')) {
        result.income = 100000;
    }
    return result;
}

export function objectFieldsList(obj1, obj2, obj3) {
    let total = Object.keys(obj1);
    total = total.concat(Object.keys(obj2));
    total = total.concat(Object.keys(obj3));
    return total.sort();
}

export function objectClone(obj, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(deepClone(obj));
        result[i].id = i;
    }
    return result;
}

function deepClone(obj) {
    const clObj = {};
    for (const i in obj) {
        if (obj[i] && typeof obj[i] === 'object') {
            clObj[i] = deepClone(obj[i]);
            continue;
        }
        clObj[i] = obj[i];
    }
    return clObj;
}
