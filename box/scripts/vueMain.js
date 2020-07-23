// Define a new component called todo-item
/*
Vue.component('todo-item', {
    props:['todo'],
    template: '<div style="position:relative;top:25px;width:300px;height:200px;background:rgba(0, 0, 255, 0.3);' + 
        'border-radius:10px;text-align:center;padding:10px;">' +
        '<h3>{{todo}}</h3>' + 
        '<slot name="top"></slot>'+
        '</div>'
  })
  */
 Vue.component('box', {
    data(){
        return{
          curFace:"show-front",

        }
      },
      props:["target"],
      
    template: '<div class="scene" @mousedown="openLink()">'+
                    '<div ref="mainBox" class="box" @mouseover="doMove" @mouseout="getback">'+
                        '<div class="box__face box__face--front"><slot name="front"></slot></div>'+
                        '<div class="box__face box__face--back"><slot name="back"></slot></div>'+
                        '<div  ref="linkFace" class="box__face box__face--right"><slot name="right"></slot></div>'+
                        '<div class="box__face box__face--left"><slot name="left"></slot></div>'+
                        '<div class="box__face box__face--top"><slot name="top"></slot></div>'+
                        '<div class="box__face box__face--bottom"><slot name="bottom"></slot></div>'+
                    '</div>'+
                '</div>',
    
    methods:{
        mounted(){
            console.log("Mounted ..... ");
        },
        openLink(){
          console.log(this.target);
          var target = this.$refs.linkFace;
          target.classList.add( "selectedLink" );

          window.location.href = this.target;

          

        },
        doMove(){
            //console.log("Do move");
            this.updateBoxClass("right")
                          
        },
        getback(){
            //console.log("Do move");
            this.updateBoxClass("front")
                          
        },

        updateBoxClass(newFace){
            var target = this.$refs.mainBox;

            //console.log(target);
            if ( this.curFace ) {
                target.classList.remove( "show-" + this.curFace );
              }
              target.classList.add( "show-" + newFace );
              this.curFace = newFace;
            
        }
        


    },


  })

  
