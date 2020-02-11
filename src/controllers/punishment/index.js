const {
    server_punishment,
    server_punish_reason,
    server_revoke_reason,
    server_user,
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await server_punishment.findAll({
            include: [
                {
                    model: server_user,
                    as: 'user',
                    attributes: [
                        'id',
                        'display_name'
                    ]
                },
                {
                    model: server_user,
                    as: 'staffer',
                    attributes: [
                        'id',
                        'display_name'
                    ]
                },
                {
                    model: server_user,
                    as: 'revoker',
                    attributes: [
                        'id',
                        'display_name'
                    ]
                },
                {
                    model: server_punish_reason,
                    as: 'punish_reason',
                    attributes: [
                        'name',
                        'display_name'
                    ]
                },
                {
                    model: server_revoke_reason,
                    as: 'revoke_reason',
                    attributes: [
                        'name',
                        'display_name'
                    ]
                }
            ]
        });

        return response.json(result);
    }
};