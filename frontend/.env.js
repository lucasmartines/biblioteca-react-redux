export default env = {
    APP_NAME: 'Biblioteca',
    SERVER_PORT: 3000,
    SERVER_HOST: process.env.HOST || 'http://localhost',
    SERVER_HOST_FULL: process.env.HOST_PORT || 'http://localhost:3000'
}

console.log(env)
console.log(process.env)