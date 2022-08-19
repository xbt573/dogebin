const spawn = require('node:child_process').spawn;
const server = spawn('yarn', ['exec', 'serve', '-l', `${process.env.FRONTEND_PORT || 3000}`]);

server.stdout.on('data', (data) => {
    console.log(data.toString());
});

server.stderr.on('data', (data) => {
    console.log(data.toString());
});

server.on('close', (code) => {
    console.log(`server exit ${code}`);
    process.exit(code);
});
