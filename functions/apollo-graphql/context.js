const auth0verify = require('auth0-jwt-lambda');

module.exports = (integrationContext) => {
    const token = integrationContext.event.headers.authorization || '';

    const run = async () => {
        try {
            return await auth0verify.verify(
                token.replace("Bearer ", ""),
                process.env.AUTH_DOMAIN);
        } catch(err) {
            console.log(err);

            return null;
        }
    };

    return {
        token,
        decoded: run()
    };
}