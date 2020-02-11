const Helper = require('../../util/Helper');

const {
    server_user
} = require('../../models');

module.exports = {
    show: async (request, response) => {
        const {
            username,
            email,
            id
        } = request.query;

        const where = id ? { id } : username ? { name: username.toLowerCase() } : { email };

        const result = await server_user.findOne({
            where
        });

        return response.json(result);
    },
    store: async (request, response) => {
        const {
            username,
            email,
            password
        } = request.body;

        const created_at = new Date().getTime();

        const unique_id = Helper.constructOfflinePlayerUUID(username);

        const user = await server_user.create({
            name: username.toLowerCase(),
            display_name: username,
            unique_id,
            email,
            password,
            created_at,
            language_id: 1
        });

        return response.json(user);
    },
    update: async (request, response) => {
        const {
            id,
            email,
            password
        } = request.body;

        const user = await server_user.findOne({
            where: {
                id
            }
        });

        const result = await server_user.update({
            email: email === null ? user.email : email,
            password: password === null ? user.password : password
        }, {
            where: {
                id
            }
        });

        return response.json(result);
    }
}