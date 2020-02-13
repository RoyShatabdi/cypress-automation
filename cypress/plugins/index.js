module.exports = (on, config) => {
    on('task', {
        // deconstruct the individual properties
        log (message) {
            console.log(message);
            return null
        }
    })
};