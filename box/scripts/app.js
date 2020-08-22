const projects =[
    {
        'title':'Tools',
        'icon' : 'images/tools.png',
        'name':'Spring Generator',
        'link': 'https://mfjamil.github.io/smyld-web/tools/build/spring_generator/',
        'text': 'For developers who needs to create a maven based full stack project that holds Spring Boot as a back-end and one of the frameworks (Angular,Vue or React) as a front-end',
        'x'   : '10%',
        'y'   : '20%'
    },
    {
        'title': 'Templates',
        'icon' : 'images/angular_32.png',
        'name' : 'Simple Explorer',
        'link' : 'https://mfjamil.github.io/smyld-web/angular/templates/SMYLDSimpleExplorer',
        'text' : 'For Angular developers who needs a project\'s template to speed up their work, this template is called "Simple Explorer"',
        'x'   : '20%',
        'y'   : '60%'

    },
    {
        'title': 'Frameworks',
        'icon' : 'images/java_45.png',
        'name' : 'Portal Engine',
        'link' : 'https://mfjamil.github.io/smyld-java/apps/pe',
        'text' : 'Java Based framework that creates GUI components on the fly which interact with other layers via annotations',
        'x'   : '60%',
        'y'   : '60%'

    },
    {
        'title': 'Graphics',
        'icon' : 'images/diagram.png',
        'name' : 'Entity Plotter',
        'link' : 'https://mfjamil.github.io/smyld-java/apps/ep',
        'text' : 'Java Swing Component that holds a full animated and funcitional entity diagram like flow charts and can be extended to plot UML diagrams',
        'x'   : '70%',
        'y'   : '20%'

    }

    ];

    var app = new Vue({
        el: '#app',
        data: {
            list:projects
        },
    
      })    


      /*
    Vue.component('projectsContainer', {
        data(){
            return{
              curFace:"show-front",
    
            }
          },
          
        template: ` <div>
                        <box v-for="proj in projects">
                            <div slot="front">
                                {{proj.title}}
                            </div>
                        </box>
                        </div>`,
        
        methods:{
            mounted(){
                console.log("Mounted ..... ");
            },
    
        },
    
    
      });
    */
      
    /*    
    var myApp = new Vue({
    el: '#contentsDiv',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    },

  })*/
    /**
     * Below Code is written using the new EMACScript 9
     */
    /*
     function drawWindowNew(colsPerRow){
        const tableEl = document.createElement("table");   
        tableEl.setAttribute('class','contentsTable');
        const rows = projects.length / colsPerRow;
        let dataIndex = 0; 
        Array(rows).fill(1).map(i => {
            const rowEl =  document.createElement("tr");
            Array(colsPerRow).fill(1).map(j => {
                rowEl.insertAdjacentHTML('beforeend',
                `<td>
                    <box>
                        <div slot="front">
                            <div><img src="images/${projects[dataIndex].icon}" class="group_icon"></div>
                            <span class="app_group_title">${projects[dataIndex].title}</span>
                            <div class="app_item">
                                <a href="${projects[dataIndex].link}">${projects[dataIndex].name}</a>
                            </div>
                            
                        </div>
                        <div slot="right">
                            <span class="app_group_text">${projects[dataIndex].text}</span>
                        </div>
                        <div slot="left">TT</div>
                    </box>
                </td>`);
                dataIndex++; 
            });
            tableEl.appendChild(rowEl);
        });
        return tableEl;
    }
*/
function drawWindowNew(mainDiv){
    let dataIndex = 0; 
        Array(projects.length).fill(1).map(j => {
            let rowEl =  document.createElement("box");
            rowEl.insertAdjacentHTML('beforeend',
            `<div slot="front">
                <div><img src="images/${projects[dataIndex].icon}" class="group_icon"></div>
                <span class="app_group_title">${projects[dataIndex].title}</span>
                <div class="app_item">
                    <a href="${projects[dataIndex].link}">${projects[dataIndex].name}</a>
                </div>
                
            </div>
            <div slot="right">
                <span class="app_group_text">${projects[dataIndex].text}</span>
            </div>`);
            mainDiv.appendChild(rowEl);
            dataIndex++; 
        });
}

    function initPage(){
        var mainDiv = document.getElementById('contentsDiv');
        var bigWindowDiv = this.drawWindowNew(mainDiv);
        
    }
    /*
    window.onload = function(event){
        initPage();
    };
    */