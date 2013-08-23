
/**
 * Module dependencies.
 */

var style = require('style');
var inherit = require('inherit');
var favicon = require('favicon');
var autoscale = require('autoscale-canvas');
var Pie = require('pie');

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
  this.el = document.createElement('canvas');
  this.ctx = this.el.getContext('2d');
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
  this.el.width = n;
  this.el.height = n;
  autoscale(this.el);
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
  favicon(this.el.toDataURL());
  return this;
};

/**
 * Reset favicon.
 *
 * @api public
 */

Piecon.prototype.reset = function(){
  favicon.reset();
};