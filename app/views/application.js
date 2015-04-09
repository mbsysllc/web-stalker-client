import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['application-content'],
  currentTarget: null,
  selectedTarget: null,

  currentPath: function() {
    if (!this.get('currentTarget')) return;
    return this.get('currentTarget').getPath();
  }.property('currentTarget'),

  selectedPath: function() {
    if (!this.get('selectedTarget')) return;
    return this.get('selectedTarget').getPath();
  }.property('selectedTarget'),

  mouseMove: function(event) {
    if (this.get('selectedPath')) {
      return;
    }

    var className = 'current-active-element';
    var target = $(event.target);

    this.$('.' + className).removeClass(className);
    this.set('currentTarget', target);

    target.addClass(className);
  },

  click: function(event) {
    if (Ember.isEmpty($(event.target).parents('.current-page-html'))) return;
    this.set('selectedTarget', this.get('currentTarget'));
  },

  actions: {
    clear: function() {
      this.set('selectedTarget', null);
    }
  }
});