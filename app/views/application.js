import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['application-content'],
  activeElementClass: 'current-active-element',
  currentTarget: null,
  selectedTarget: null,

  currentPath: function() {
    if (!this.get('currentTarget')) return;
    return this.get('currentTarget').getPath();
  }.property('currentTarget'),

  selectedPath: ".s-item-container",
  _selectedPath: function() {
    if (!this.get('selectedTarget')) return;
    return this.get('selectedTarget').getPath();
  }.property('selectedTarget'),

  isInsidePreview: function(event) {
    return !Ember.isEmpty($(event.target).parents('.current-page-html'));
  },

  mouseMove: function(event) {
    if (!this.isInsidePreview(event) /*|| this.get('selectedPath')*/) {
      return;
    }

    var className = this.get('activeElementClass');
    var target = $(event.target);

    this.$('.' + className).removeClass(className);
    this.set('currentTarget', target);

    target.addClass(className);
  },

  click: function(event) {
    if (!this.isInsidePreview(event)) return;

    this.set('selectedTarget', this.get('currentTarget'));
    event.stopPropagation();
    event.preventDefault()
  },

  actions: {
    clear: function() {
      this.set('selectedTarget', null);
      this.$('.' + this.get('activeElementClass')).removeClass(this.get('activeElementClass'));
    }
  }
});