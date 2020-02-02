const express = require('express');
const routes = express.Router();

const notices = require('../controllers/notices');
const staff = require('../controllers/staff');

/**
 * NOTICES route
 */

routes.route('/notice')
    .get(notices.index)
    .post(notices.store)
    .put(notices.update)
    .delete(notices.destroy);

routes.get('/notice/:id', notices.show);

/**
 * STAFF route
 */

routes.route('/staff')
    .get(staff.index)
    .post(staff.store)
    .delete(staff.destroy);

module.exports = routes;