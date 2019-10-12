var bigWindowDiv;
var smallWindowDiv;
var mainDiv;
var curMode;

var data =[
    {
        'title':'Tools',
        'icon' : 'tools.png',
        'name':'Spring Generator',
        'link': 'https://mfjamil.github.io/smyld-web/tools/build/spring_generator/',
        'text': 'For developers who needs to create a maven based full stack project that holds Spring Boot as a back-end and one of the frameworks (Angular,Vue or React) as a front-end'
    },
    {
        'title': 'Templates',
        'icon' : 'angular_32.png',
        'name' : 'Simple Explorer',
        'link' : 'https://mfjamil.github.io/smyld-web/angular/templates/SMYLDSimpleExplorer',
        'text' : 'For Angular developers who needs a project\'s template to speed up their work, this template is called "Simple Explorer"'
    },
    {
        'title': 'Frameworks',
        'icon' : 'java_45.png',
        'name' : 'Portal Engine',
        'link' : 'https://mfjamil.github.io/smyld-java/apps/pe',
        'text' : 'Java Based framework that creates GUI components on the fly which interact with other layers via annotations'
    },
    {
        'title': 'Graphics',
        'icon' : 'diagram.png',
        'name' : 'Entity Plotter',
        'link' : 'https://mfjamil.github.io/smyld-java/apps/ep',
        'text' : 'Java Swing Component that holds a full animated and funcitional entity diagram like flow charts and can be extended to plot UML diagrams'
    }

    ];


function showGroup(grp,isSmall){
    //console.log("Group ID : " + grp.id + " : " + grp.offsetLeft + "," + grp.offsetTop);
    grp.style.width  = (isSmall?"300px":"600px");
    grp.style.height = (isSmall?"300px":"300px");
    var contents = grp.getElementsByTagName('span')[1];
    contents.style.opacity = 1;
    contents.style.transitionDuration = "3s";
}

function hideGroup(grp,isSmall){
    //console.log("Group ID : " + grp.id + " : " + grp.offsetLeft + "," + grp.offsetTop);
    grp.style.width  = (isSmall?"300px":"300px");
    grp.style.height = (isSmall?"200px":"200px");
    var contents = grp.getElementsByTagName('span')[1];
    contents.style.opacity = 0;
    contents.style.transitionDuration = "0.5s";

}
function smallScreen(){
    return isMobileDevice();
    /*
    if(window.innerWidth <= 800 && window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }*/
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function drawWindow(colsPerRow){
    var mainDiv = document.getElementById('contentsDiv');
    //mainDiv.innerHTML = "Big Window !!!";
    
    var tableEl = document.createElement("table");   
    tableEl.setAttribute('class','contentsTable');
    var rows = data.length / colsPerRow;
    var dataIndex = 0; 
    for(r=0;r<rows;r++){
        var rowEl =  document.createElement("tr");
        for (c=0; c<colsPerRow;c++){
            var colEl =  document.createElement("td");        
            /*
            <td>
                <div class="app_group"  onmouseover="showGroup(this);" onmouseout="hideGroup(this);">
                    <div><img src="images/tools.png" class="group_icon"></div>
                    <span class="app_group_title">Tools</span>
                    <div class="app_item">
                        <a href="https://mfjamil.github.io/smyld-web/tools/build/spring_generator/">Spring Generator</a>
                    </div>
                    <span class="app_group_text">For developers who needs to create a maven based full stack project that holds Spring Boot as a back-end and one of the frameworks (Angular,Vue or React) as a front-end</span>
                </div>
            </td>        
            */
            var div1 = document.createElement("div");
                div1.setAttribute('class','app_group');
                div1.setAttribute('onmouseover','showGroup(this,' + (colsPerRow==1?'true':'false') + ');');
                div1.setAttribute('onmouseout','hideGroup(this,' + (colsPerRow==1?'true':'false') + ');');
                var div2 = document.createElement("div");
                var img1 = document.createElement("img");
                    img1.setAttribute('src','images/' + data[dataIndex].icon);
                    img1.setAttribute('class','group_icon');
                    div2.appendChild(img1);
                    div1.appendChild(div2);
                var span1 = document.createElement("span");
                    span1.setAttribute('class','app_group_title');
                    span1.innerHTML= data[dataIndex].title;
                    div1.appendChild(span1);
                var div3 = document.createElement("div");
                    div3.setAttribute('class','app_item');
                    var link = document.createElement("a");
                        link.setAttribute('href',data[dataIndex].link);
                        link.innerHTML = data[dataIndex].name;
                    div3.appendChild(link);
                    div1.appendChild(div3);
                var span2 = document.createElement("span");    
                    span2.setAttribute('class','app_group_text');
                    span2.innerHTML= data[dataIndex].text;
                    div1.appendChild(span2);
            colEl.appendChild(div1);    
            rowEl.appendChild(colEl);
            dataIndex++; 
        }
        tableEl.appendChild(rowEl);
    }
    return tableEl;
}


function drawBigWindowDesign(){
    console.log("Switching to Big window .....");
    mainDiv.replaceChild(bigWindowDiv,smallWindowDiv);
}

function drawSmallWindowDesign(){
    console.log("Switching to Small window .....");
    mainDiv.replaceChild(smallWindowDiv,bigWindowDiv);
}



window.onresize = function(event) {
    if (smallScreen()){
        if (curMode=='big'){
            drawSmallWindowDesign();
            curMode = 'small';
        }                    
    }else{
        if (curMode=='small'){
            drawBigWindowDesign();
            curMode = 'big';
        }
    }
}
window.onload = function(event){
    bigWindowDiv = drawWindow(2);
    smallWindowDiv = drawWindow(1);
    mainDiv = document.getElementById('contentsDiv');
    curMode = smallScreen()?'small':'big';
    mainDiv.appendChild(curMode=='big'?bigWindowDiv:smallWindowDiv);
}

