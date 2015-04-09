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
  pageUrl: "http://www.amazon.com/s/ref=nb_sb_ss_c_0_10?field-keywords=javascript",
  currentPageHtml: "No content",
  actionValue: "text",
  responseResult: null,
  childs: [{
    name: "Title",
    selector: ".s-access-title"
  }, {
    name: "Prices",
    selector: ".s-price"
  }],

  actions: {
    getPage: function() {
      var url = "http://localhost:8080/page?url=" + this.get('pageUrl');
      this.set('currentPageHtml', 'Loading...');
      Ember.$.get(url).then(function(response) {
        this.set('currentPageHtml', response.html);
      }.bind(this));
    },

    sendSelector: function(selector) {
      var url = "http://localhost:8080/result";
      var childs = this.get('childs').map(function(child) {
        return {
          name: child.name,
          selector: child.selector
        };
      });

      this.set('responseResult', 'Loading...');

      Ember.$.get(url, {
        url: this.get('pageUrl'),
        item_selector: selector,
        childs: childs,
        action: this.get('actionValue')
      }).then(function(response) {
        console.log(response.results[0], response.results[1]);
        this.set('responseResult', JSON.stringify(response.results, null, 2));
      }.bind(this));
    },

    addChild: function() {
      this.get('childs').pushObject({name: "", selector: ""})
    }
  }
});