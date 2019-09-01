document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    var loader = document.querySelector('.spinner-wrapper')
    setTimeout(e=>{
      loader.classList.add('loaded')
      loader.style.visibility = 'hidden'
    },2500)

    

    

    // Gallery section in JQuery
            
      var allImages = []
      var btns = document.querySelectorAll('.btn')
      var sel = document.getElementById('parent').getElementsByTagName('div')
      for (i=0; i < sel.length; i++){
        allImages.push(sel[i])
      }

      btns.forEach(e =>{
        e.onclick = function(e){
          if(this.id == 'all'){
            for (i=0; i< sel.length;i++){
              sel[i].style.display = 'inline-block';
            }
          }else{
            allImages.forEach(e=>{
              e.style.display= 'none'
            })
            var ele = document.querySelectorAll('.'+this.id)
            ele.forEach(e=>{
              e.style.display ='inline-block'
            })
          }
          btns.forEach(e=>{
            e.classList.remove('active')
            if (e.id == this.id){
              e.classList.add('active')
            }
          })
        }
      })
        
    //end of gallery section



    //Paralax Home page
    function Parallax(options){
      options = options || {};
      this.nameSpaces = {
          wrapper: options.wrapper || '.parallax',
          layers: options.layers || '.parallax-layer',
          deep: options.deep || 'data-parallax-deep'
      };
      this.init = function() {
          var self = this,
              parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
          for(var i = 0; i < parallaxWrappers.length; i++){
        (function(i){
          parallaxWrappers[i].addEventListener('mousemove', function(e){
            var x = e.clientX,
              y = e.clientY,
              layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
            for(var j = 0; j < layers.length; j++){
              (function(j){
                var deep = layers[j].getAttribute(self.nameSpaces.deep),
                    disallow = layers[j].getAttribute('data-parallax-disallow'),
                    itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                    itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                    if(disallow && disallow === 'both') return;
                    layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
              })(j);  
            }
          })
        })(i);
          }
      };
      this.init();
      return this;
  }

  new Parallax();
  //  end of parallax



  });