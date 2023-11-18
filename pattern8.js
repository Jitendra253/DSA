const n = parseInt(process.argv[2]);

for (let i = 0; i <= n; i++) {

    for (j = 0; j <= n; j++) {
        if (i === j || i + j === n) {
            process.stdout.write('*')
        }
        else {
            process.stdout.write(' ')
        }
    }
    process.stdout.write('\n')
}

