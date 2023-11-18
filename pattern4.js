const n = parseInt(process.argv[2]);

for (let i = n; i >= 1; i--) {
    let star = i;
    let spaces = n - i;
    while (spaces > 0) {
        process.stdout.write(' ');
        spaces--;
    }
    while (star > 0) {
        process.stdout.write('*')
        star--;
    }
    process.stdout.write('\n')

}


