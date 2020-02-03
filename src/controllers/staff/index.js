const {
    server_user,
    server_user_group,
    server_group,
    website_staff
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await website_staff.findAll({
            include: [
                {
                    model: server_user,
                    as: 'user',
                    include: [
                        {
                            model: server_user_group,
                            as: 'groups',
                            attributes: [
                                'group_id'
                            ],
                            order: [
                                [ 'group_id', 'DESC' ]
                            ],
                            include: [
                                {
                                    model: server_group,
                                    as: 'fancy_group',
                                    attributes: [
                                        'id',
                                        'name'
                                    ]
                                }
                            ]
                        }
                    ],
                    attributes: [
                        'name',
                        'display_name'
                    ]
                }
            ],
            attributes: [
                'id'
            ]
        });

        return response.json(result);
    },
    store: async (request, response) => {
        const {
            user_id
        } = request.body;

        const staffer = await website_staff.create({
            user_id
        });

        return response.json(staffer);
    },
    destroy: async (request, response) => {
        const {
            id
        } = request.body;

        const staffer = await website_staff.destroy({
            where: {
                id
            }
        });

        return response.json(staffer);
    }
}