function repete(str, n) {
    var ret = ''
    for (var i = 0; i < n; i++) ret += str
    return ret
}

// abstrata/genérica suficiente. - COUTO, Guilherme. 2024.
function mult(arg, num) { // arg = pm, num = 3
    if (typeof(num) == 'number') {
        if (typeof(arg) == 'number') {
            return num * arg
        } else if (typeof(arg) == 'string') {
            return repete(arg, num)
        }
    }
}

function triplo(n) { // n = pm
    var resp = mult('pm', 3)
    return resp
}

function dobro(n) { // função polimórfica (mais de um tipo)
    var resp = mult(n, 2)
    return resp
}

var s = 'pm'
console.log(triplo(s)) // pmpmpm