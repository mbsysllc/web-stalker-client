import Ember from 'ember';

function removeRelativePaths(html, absolutePath) {
  html = $(html);

  html.find('img').each(function(_, img) {
    img = $(img);
    img.attr('src', absolutePath + '/' + img.attr('src'));
  });

  return html.wrap('<p/>').parent().html();
} 

export default Ember.Controller.extend({
  pageUrl: "http://www.google.com",
  currentPageHtml: "No content",

  actions: {
    getPage: function() {
      var url = "http://localhost:8080/page?url=" + this.get('pageUrl');
      Ember.$.get(url).then(function(response) {
        this.set('currentPageHtml', response.html);
      }.bind(this));
    },

    sendSelector: function(selector) {
      debugger;
    }
  }
});