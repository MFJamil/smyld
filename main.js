var bigWindowDiv,smallWindowDiv,mainDiv,curMode,mobileMenu,desktopDiv,infoDTDiv,infoMBDiv,infoContentsDiv,impressumDTDiv,impressumMBDiv,impressumContentsDiv;
var isInfoVisible = isImpressumVisible = false;

const data =[
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

function toggleGroup(grp,isSmall){
    grp.classList.toggle(`app_group_ext_${isSmall?'small':'big'}`);
    (grp.getElementsByTagName('span')[1]).classList.toggle('app_group_text_show'); 
}

function smallScreen(){
    if (isMobileDevice()) return true;
    return (window.innerWidth <= 800 && window.innerHeight <= 600);
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

/**
 * Below Code is written using the new EMACScript 9
 */
function drawWindowNew(colsPerRow){
    const tableEl = document.createElement("table");   
    tableEl.setAttribute('class','contentsTable');
    const rows = data.length / colsPerRow;
    let dataIndex = 0; 
    Array(rows).fill(1).map(i => {
        const rowEl =  document.createElement("tr");
        Array(colsPerRow).fill(1).map(j => {
            rowEl.insertAdjacentHTML('beforeend',
            `<td>
                  <div class="app_group"  onmouseover="toggleGroup(this,${(colsPerRow==1).toString()});" onmouseout="toggleGroup(this,${(colsPerRow==1).toString()});">
                      <div><img src="images/${data[dataIndex].icon}" class="group_icon"></div>
                      <span class="app_group_title">${data[dataIndex].title}</span>
                      <div class="app_item">
                          <a href="${data[dataIndex].link}">${data[dataIndex].name}</a>
                      </div>
                      <span class="app_group_text">${data[dataIndex].text}</span>
                  </div>
              </td>`);
              dataIndex++; 
        });
        tableEl.appendChild(rowEl);
    });
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
    this.infoMBDiv.classList.toggle('infoMBDiv_Show');
 }

 function toggleMBImpressum(){
    this.impressumMBDiv.classList.toggle('impressumMBDiv_Show');
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
    bigWindowDiv = this.drawWindowNew(2);
    smallWindowDiv = this.drawWindowNew(1);
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
function handleHiddenTricks(){
    console.log("Key Pressed : " + event.keyCode);
    if (event.keyCode==32){
        window.location = "hidden.html";
    }
}

window.onkeydown = function(){
    handleHiddenTricks();
}

