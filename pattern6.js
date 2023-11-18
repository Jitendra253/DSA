const n = parseInt(process.argv[2]);

for (let i = 1; i <= n; i++) {

    for (j = 1; j <= n; j++) {
        if (i === j) {
            process.stdout.write('*')
        }
        else {
            process.stdout.write(' ')
        }
    }
    process.stdout.write('\n')
}

