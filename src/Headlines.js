(function(exports){
  function Headlines() {

  }

  Headlines.prototype.show = function() {
    $.get( "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search", function(data) {
      var list = "<ul>"
      data.response.results.forEach(story => list += '<li><a href="' + story.webUrl + '">' + story.webTitle + '</a></li>')
      console.log(list)
      $("#headlines").html(list + "</ul>")
    })
  };

  exports.Headlines = Headlines;

})(this);