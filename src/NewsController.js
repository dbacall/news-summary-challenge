function NewsController() {

}

NewsController.prototype = (function() {

  
    function addHeadlines(headlines) {
      console.log((headlines.show()))
      $("#headlines").html(headlines.show())
 
    };

    return{
      addHeadlines: addHeadlines
    };

 
})()