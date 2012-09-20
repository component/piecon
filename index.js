
/**
 * Module dependencies.
 */

var style = require('style')
  , inherit = require('inherit')
  , favicon = require('favicon')
  , Pie = require('pie');

/**
 * Expose `Piecon()`.
 */

module.exports = Piecon;

/**
 * Initialize a new `Piecon` with
 * an optional css `selector`,
 * defaulting to ".pie".
 *
 * @param {String} selector
 * @api public
 */

function Piecon(selector) {
  if (!(this instanceof Piecon)) return new Piecon(selector);
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');
  Pie.call(this, selector);
}

/**
 * Inherits from `Pie.prototype`.
 */

inherit(Piecon, Pie);

/**
 * Set size to `n`.
 *
 * @param {Number} n
 * @return {Piecon}
 * @api public
 */

Piecon.prototype.size = function(n){
  this._size = n;
  this.canvas.width = n;
  this.canvas.height = n;
  return this;
};

/**
 * Update percentage to `n`.
 *
 * @param {Number} n
 * @return {Piecon}
 * @api public
 */

Piecon.prototype.update = function(n){
  this.percent = n;
  this.draw(this.ctx);
  favicon(this.canvas.toDataURL());
  return this;
};
