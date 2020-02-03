const {
    Op
} = require('sequelize');

const {
    website_changelog
} = require('../../models');

module.exports = {
    index: async (request, response) => {
        const result = await website_changelog.findAll();

        return response.json(result);
    },
    show: async (request, response) => {
        const {
            date
        } = request.params;

        const day = date.includes('day=') ? date.split('day=')[1].split('&')[0] : null;
        const month = date.includes('month=') ? date.split('month=')[1].split('&')[0] : null;
        const year = date.includes('year=') ? date.split('year=')[1] : null;

        const date1 = new Date();

        if (day) date1.setDate(day);
        if (month) date1.setMonth(month);
        if (year) date1.setFullYear(year);

        const result = await website_changelog.findAll({
            where: {
                time: {
                    [ Op.lte ]: date1.getTime()
                }
            },
            order: [
                [ 'time', 'DESC' ]
            ]
        });

        return response.json(result);
    },
    store: async (request, response) => {
        const {
            title,
            message
        } = request.body;

        const time = new Date().getTime();

        const result = await website_changelog.create({
            title,
            message,
            time
        });

        return response.json(result);
    },
    destroy:  async (request, response) => {
        const {
            id
        } = request.body;

        const result = await website_changelog.destroy({
            where: {
                id
            }
        });

        return response.json(result);
    },
    update: async (request, response) => {
        const {
            id,
            title,
            message
        } = request.body;

        const result = await website_changelog.update({
            title,
            message
        }, {
            where: {
                id
            }
        });

        return response.json(result);
    }
};