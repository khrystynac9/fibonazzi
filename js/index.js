var n = Number(prompt("Задайте число n"));

function fib(n) {
    var f;
    if (n >= 2) {
        f = fib(n - 1) + fib(n - 2);
    }
    else {
        f = n;
    }
    return "число Фібоначчі " + f;
}
document.write(fib(n));




//варіант другий =)


function fib(n) {
    var x1 = 1,
        x2 = 1;
        var k;
    var x3 = x1 + x2;
    for (k = 3; k <= n; k++) {
        x3 = x1 + x2;
        x1 = x2;
        x2 = x3;
    };
    return 'число Фібоначчі ' + x3;
};

document.write(fib(n));



