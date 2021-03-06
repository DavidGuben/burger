var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColsVals, condition, cb) {
    orm.update('burgers', objColsVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('burgers', condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
