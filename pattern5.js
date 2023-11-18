const n = parseInt(process.argv[2]);
let star = 1;
let spaces = n / 2;
for (let i = 1; i <= n; i++) {

    for (j = 1; j <= spaces; j++) {
        process.stdout.write(' ')
    }
    for (j = 1; j <= star; j++) {
        process.stdout.write('*')
    }
    if (i < n / 2) {
        spaces -= 1;
        star += 2
    }
    else {
        spaces += 1;
        star -= 2;
    }
    process.stdout.write('\n')

}


