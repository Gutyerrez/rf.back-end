const express = require('express');
const routes = express.Router();

const notices = require('../controllers/notice');
const staff = require('../controllers/staff');
const changelog = require('../controllers/changelog');
const group = require('../controllers/group');
const user = require('../controllers/user');
const punishment = require('../controllers/punishment');

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

/**
 * CHANGELOG route
 */

routes.route('/changelog')
    .get(changelog.index)
    .post(changelog.store)
    .put(changelog.update)
    .delete(changelog.destroy);

routes.get('/changelog/:date', changelog.show);

/**
 * GROUP route
 */

routes.get('/group', group.index);

/**
 * USER route
 */

routes.route('/user')
    .get(user.show)
    .post(user.store)
    .put(user.update);

routes.get('/punishment', punishment.index);

module.exports = routes;