var bigWindowDiv;
var smallWindowDiv;
var mainDiv;
var curMode;
var mobileMenu;
var desktopDiv;

var infoDTDiv;
var infoMBDiv;
var infoContentsDiv;
var impressumDTDiv;
var impressumMBDiv;
var impressumContentsDiv;
var isInfoVisible = false;
var isImpressumVisible = false;


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
    grp.style.width  = (isSmall?"300px":"600px");
    grp.style.height = (isSmall?"300px":"300px");
    var contents = grp.getElementsByTagName('span')[1];
    contents.style.opacity = 1;
    contents.style.transitionDuration = "3s";
}

function hideGroup(grp,isSmall){
    grp.style.width  = (isSmall?"300px":"300px");
    grp.style.height = (isSmall?"200px":"200px");
    var contents = grp.getElementsByTagName('span')[1];
    contents.style.opacity = 0;
    contents.style.transitionDuration = "0.5s";

}

function smallScreen(){
    if (isMobileDevice()) return true;
    if(window.innerWidth <= 800 && window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
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


function setBigWindowDesign(){
    console.log("Switching to Big window .....");
    mainDiv.replaceChild(bigWindowDiv,smallWindowDiv);
    curMode = 'big';
    activateModeComponents();
}

function setSmallWindowDesign(){
    console.log("Switching to Small window .....");
    mainDiv.replaceChild(smallWindowDiv,bigWindowDiv);
    curMode = 'small';
    activateModeComponents();
}

function activateModeComponents(){
    if (curMode=='small'){
        this.mobileMenu.style.visibility = 'visible';
        this.desktopDiv.style.display = 'none';
        this.impressumDTDiv.style.visibility = 'hidden';
        this.infoDTDiv.style.visibility = 'hidden';
        this.impressumMBDiv.style.visibility = 'visible';
        this.infoMBDiv.style.visibility = 'visible';

    }else{
        this.mobileMenu.style.visibility = 'hidden';
        this.desktopDiv.style.display = 'block';
        this.impressumDTDiv.style.visibility = 'visible';
        this.infoDTDiv.style.visibility = 'visible';
        this.impressumMBDiv.style.visibility = 'hidden';
        this.infoMBDiv.style.visibility = 'hidden';

    }
 }

 function toggleMBInfo(){
    if (isInfoVisible){
        hideMBInfo();
    }else{
        showMBInfo();
    }
    isInfoVisible = !isInfoVisible;
 }

 function toggleMBImpressum(){
    if (isImpressumVisible){
        hideMBImpressum();
    }else{
        showMBImpressum();
    }
    isImpressumVisible = !isImpressumVisible;
 }

 function showMBInfo(){
    this.infoMBDiv.style.top = '0px';
    this.infoMBDiv.style.left = '0px';
 }

 function hideMBInfo(){
    this.infoMBDiv.style.top = '-300px';
    this.infoMBDiv.style.left = '-280px';
 }

 function showMBImpressum(){
    this.impressumMBDiv.style.top = '0px';
    this.impressumMBDiv.style.right = '0px';
 }

 function hideMBImpressum(){
    this.impressumMBDiv.style.top = '-300px';
    this.impressumMBDiv.style.right = '-280px';
 }

 window.onresize = function(event) {
    if ((smallScreen())&&(curMode=='big')){
        setSmallWindowDesign();
    }else if ((!smallScreen())&&(curMode=='small')){
        setBigWindowDesign();
    }
}
window.onload = function(event){
    // Creating elements
    bigWindowDiv = drawWindow(2);
    smallWindowDiv = drawWindow(1);
    // Reading elements
    mainDiv = document.getElementById('contentsDiv');
    mobileMenu = document.getElementById('mobileTitleDiv');
    desktopDiv = document.getElementById('desktopDiv');
    infoDTDiv = document.getElementById('infoDTDiv');
    infoMBDiv = document.getElementById('infoMBDiv');
    infoContentsDiv = document.getElementById('infoDiv');
    impressumDTDiv = document.getElementById('impressumDTDiv');
    impressumMBDiv = document.getElementById('impressumMBDiv');
    impressumContentsDiv = document.getElementById('impressumDiv');
    // Start processing
    curMode = smallScreen()?'small':'big';
    mainDiv.appendChild(curMode=='big'?bigWindowDiv:smallWindowDiv);
    impressumContentsDiv.style.display='block';
    impressumDTDiv.replaceChild(this.impressumContentsDiv,impressumDTDiv.children[1]);
    impressumMBDiv.replaceChild(this.impressumContentsDiv.cloneNode(true),impressumMBDiv.children[0]);

    infoContentsDiv.style.display='block';
    infoDTDiv.replaceChild(this.infoContentsDiv,infoDTDiv.children[1]);
    infoMBDiv.replaceChild(this.infoContentsDiv.cloneNode(true),infoMBDiv.children[0]);


    this.activateModeComponents();
}

