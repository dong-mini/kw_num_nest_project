function prime(num) {
    let s = 0;

    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            s++;
        }
    }

    if (s > 0) return false;
    else return true;
}

function factorial(num) {
    if (num > 16) { return "error"; }
    if (num == 0) return 1;
    return num * factorial(num - 1);
}

module.exports = { prime, factorial };