const {
    website_staff
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await website_staff.findAll();
    
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