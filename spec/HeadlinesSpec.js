
describe("Headlines", function(){
  
  describe("get", function(){

    it("should return add headlines html to page", function(){
      var headlines = new Headlines();
      expect(headlines.show()).toEqual("<ul><li>story 1</li><li>story 2</li></ul>")
    })

  })

})

