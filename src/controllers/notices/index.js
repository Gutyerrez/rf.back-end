const {
    website_notice,
    server_user
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await website_notice.findAll({
            include: [
                {
                    model: server_user,
                    as: 'user',
                    attributes: [
                        'id',
                        'name',
                        'display_name'
                    ]
                }
            ],
            attributes: [
                'id',
                'title',
                'content',
                'time'
            ]
        });

        return response.json(result);
    },
    show: async (request, response) => {
        const {
            id
        } = request.params;

        const result = await website_notice.findByPk(id, {
            include: [
                {
                    model: server_user,
                    as: 'user',
                    attributes: [
                        'id',
                        'name',
                        'display_name'
                    ]
                }
            ],
            attributes: [
                'id',
                'title',
                'content',
                'time'
            ]
        });

        return response.json(result);
    },
    destroy: async (request, response) => {
        const {
            id
        } = request.body;

        const result = await website_notice.destroy({
            where: {
                id
            }
        });

        return response.json(result);
    },
    store: async (request, response) => {
        const {
            title,
            content,
            user_id,
            time
        } = request.body;

        const notice = await website_notice.create({
            title,
            content,
            user_id,
            time
        });

        return response.json(notice);
    },
    update: async (request, response) => {
        const {
            id,
            title,
            content
        } = request.body;

        const notice = await website_notice.update({
            title,
            content
        }, {
            where: {
                id
            }
        });

        return response.json(notice);
    }
};