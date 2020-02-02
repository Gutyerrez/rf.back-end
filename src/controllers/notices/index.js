const {
    website_notices
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await website_notices.findAll();

        return response.json(result);
    },
    show: async (request, response) => {
        const {
            id
        } = request.params;

        const result = await website_notices.findOne({
            where: {
                id
            }
        });

        return response.json(result);
    },
    destroy: async (request, response) => {
        const {
            id
        } = request.body;

        const result = await website_notices.destroy({
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

        const notice = await website_notices.create({
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

        const notice = await website_notices.update({
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