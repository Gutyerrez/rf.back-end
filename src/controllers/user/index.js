const {
    server_user
} = require('../../models');

module.exports = {
    show: async (request, response) => {
        const {
            username,
            email
        } = request.query;

        const where = username ? { name: username.toLowerCase() } : { email }

        const result = await server_user.findOne({
            where
        });

        return response.json(result);
    }
}