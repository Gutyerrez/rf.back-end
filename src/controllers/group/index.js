const {
    Op
} = require('sequelize');

const {
    server_group
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await server_group.findAll({
            where: {
                id: {
                    [ Op.lte ]: 5
                }
            }
        });

        return response.json(result);
    }
};