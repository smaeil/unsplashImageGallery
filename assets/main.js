// Global Variables **************************************************************************

// related to routing :
let pageList = ['home', 'cat1', 'cat2', 'cat3', 'about'];


// Picture src(s) :
let pictureSrc = './unsplash.com/' ;
let pictureSrcThumbnails = './unsplash.com/thumbnails/'

// Picture rolls
let picat1 = ['pic001.jpg', 'pic002.jpg', 'pic003.jpg', 'pic004.jpg', 'pic005.jpg', 'pic006.jpg', 'pic007.jpg', 'pic008.jpg', 'pic009.jpg', 'pic010.jpg', 'pic011.jpg', 'pic012.jpg', 'pic013.jpg', 'pic014.jpg', 'pic015.jpg', 'pic016.jpg', 'pic017.jpg', 'pic018.jpg', 'pic019.jpg', 'pic020.jpg', 'pic021.jpg', 'pic022.jpg', 'pic023.jpg', 'pic024.jpg', 'pic025.jpg', 'pic026.jpg', 'pic027.jpg', 'pic028.jpg', 'pic029.jpg', 'pic030.jpg', 'pic031.jpg', 'pic032.jpg', 'pic033.jpg', 'pic034.jpg', 'pic035.jpg', 'pic036.jpg', 'pic037.jpg', 'pic038.jpg', 'pic039.jpg', 'pic040.jpg', 'pic041.jpg', 'pic042.jpg', 'pic043.jpg', 'pic044.jpg', 'pic045.jpg', 'pic046.jpg', 'pic047.jpg', 'pic048.jpg', 'pic049.jpg', 'pic050.jpg', 'pic051.jpg', 'pic052.jpg', 'pic053.jpg', 'pic054.jpg', 'pic055.jpg'] 
let picat2 = ['pic056.jpg', 'pic057.jpg', 'pic058.jpg', 'pic059.jpg', 'pic060.jpg', 'pic061.jpg', 'pic062.jpg', 'pic063.jpg', 'pic064.jpg', 'pic065.jpg', 'pic066.jpg', 'pic067.jpg', 'pic068.jpg', 'pic069.jpg', 'pic070.jpg', 'pic071.jpg', 'pic072.jpg', 'pic073.jpg', 'pic074.jpg', 'pic075.jpg', 'pic076.jpg', 'pic077.jpg', 'pic078.jpg', 'pic079.jpg', 'pic080.jpg', 'pic081.jpg', 'pic082.jpg', 'pic083.jpg', 'pic084.jpg', 'pic085.jpg', 'pic086.jpg', 'pic087.jpg', 'pic088.jpg', 'pic089.jpg', 'pic090.jpg', 'pic091.jpg', 'pic092.jpg', 'pic093.jpg', 'pic094.jpg', 'pic095.jpg', 'pic096.jpg', 'pic097.jpg', 'pic098.jpg', 'pic099.jpg', 'pic100.jpg', 'pic101.jpg', 'pic102.jpg', 'pic103.jpg', 'pic104.jpg', 'pic105.jpg', 'pic106.jpg', 'pic107.jpg', 'pic108.jpg', 'pic109.jpg', 'pic110.jpg']
let picat3 = ['pic111.jpg', 'pic112.jpg', 'pic113.jpg', 'pic114.jpg', 'pic115.jpg', 'pic116.jpg', 'pic117.jpg', 'pic118.jpg', 'pic119.jpg', 'pic120.jpg', 'pic121.jpg', 'pic122.jpg', 'pic123.jpg', 'pic124.jpg', 'pic125.jpg', 'pic126.jpg', 'pic127.jpg', 'pic128.jpg', 'pic129.jpg', 'pic130.jpg', 'pic131.jpg', 'pic132.jpg', 'pic133.jpg', 'pic134.jpg', 'pic135.jpg', 'pic136.jpg', 'pic137.jpg', 'pic138.jpg', 'pic139.jpg', 'pic140.jpg', 'pic141.jpg', 'pic142.jpg', 'pic143.jpg', 'pic144.jpg', 'pic145.jpg', 'pic146.jpg', 'pic147.jpg', 'pic148.jpg', 'pic149.jpg', 'pic150.jpg', 'pic151.jpg', 'pic152.jpg', 'pic153.jpg', 'pic154.jpg', 'pic155.jpg', 'pic156.jpg', 'pic157.jpg', 'pic158.jpg', 'pic159.jpg', 'pic160.jpg', 'pic161.jpg', 'pic162.jpg', 'pic163.jpg', 'pic164.jpg', 'pic165.jpg', 'pic166.jpg', 'pic167.jpg']
let allPictureRolls = [picat1, picat2, picat3];



// Zoom holder:

let zoomIndex = 1.0 ;



// Functions *********************************************************************************


// related to routing :

function pages (page) {
    for (let i = 0 ; i < pageList.length ; i++) {
        if (page == pageList[i]) {
            document.getElementById(pageList[i]).style.display = 'block';
        } else {
            document.getElementById(pageList[i]).style.display = 'none';
        }
    }
    return navSelector(page);
}


/* navbar item selected 
   (Change the class of the selected navbar's item to 
   'nav-selected' and removes this class from others): */

function navSelector (page) {
    let ns = document.getElementsByClassName('nav-selected');
    for (let i = 0 ; i < ns.length; i++ ) {
        ns[i].classList.remove('nav-selected');
    }
    document.getElementById('nav-' + page).classList.add('nav-selected');
}




// ************************************************************


// dropdown opener and closer:

function dropdownToggle(dropTarget) {
    let dt = document.getElementById(dropTarget) ;

    if (dt.classList.contains('show-b')) {
        dt.classList.remove('show-b');
    } else {
        dt.classList.add('show-b');
    }
}

// Close the dropdown menu if user click outside it:

window.onclick = function(event) {

    // closes the dropdown:
    if (!event.target.classList.contains('dropdown-btn')) {
        let dpc = document.getElementsByClassName('dropdown-content');
        for (let i = 0 ; i < dpc.length ; i++ ) {
            if (dpc[i].classList.contains('show-b')) {
                dpc[i].classList.remove('show-b');
            }
        }
    }

    // closes the filter Menu  if the user clicks outside:

    if (!investigateTreeClasslist(event.target, 'filter-area')) {
        filterListCloser();
    }
}

function investigateTreeClasslist(targetelement, inqueryClass) {
    let r = false ;
    let element = targetelement;
    while (element && element !== document.body) {
        if (element.classList.contains(inqueryClass)) { r = true; }
        element = element.parentNode;
    }
    return r;
}


// ***************************************************************

// Clock and Date :

function getDateTime () {
    // variables:
    let date = new Date();
    let monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let weekDaysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // element updates calendar:
    let months = date.getMonth(); document.getElementById('months').innerHTML = monthNames[months] ;
    let weeks = date.getDay(); document.getElementById('weeks').innerHTML = weekDaysName[weeks] ;
    let days = date.getDate(); document.getElementById('days').innerHTML = days;

    // element updates clock:
    let hours = date.getHours().toString().padStart(2, '0'); document.getElementById('hours').innerHTML = hours ;
    let minutes = date.getMinutes().toString().padStart(2, '0'); document.getElementById('minutes').innerHTML = minutes ;
    let seconds = date.getSeconds().toString().padStart(2, '0'); document.getElementById('seconds').innerHTML = seconds ;
}

// updateing the Calendar and Clock every 1 second:
setInterval(getDateTime, 1000)
getDateTime()

// ***************************************************************

// scroll spy  embeded in footer:
window.onscroll = () => {
    // getting the window height in percentage:
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollpercentage = (currentScroll / totalHeight) * 100 ;

    //updating the scroll spy:
    document.getElementById('scroll-spy').style.width = scrollpercentage + '%';
}






// Anything picture related *************************************************************************************************

// Loading picture of a roll into Html body:

function pictureFiller(pictureRoll, pictureClass, targetedElement) {

    let load = ` ` ;

    for (let i = 0 ; i < pictureRoll.length; i++) {
        let x = `
                <a href="#" onclick="openViewer('${pictureRoll[i]}')" tabindex="1">
                    <img src="${pictureSrcThumbnails + pictureRoll[i]}" class="${pictureClass}" alt="${pictureRoll[i]}" title="${pictureRoll[i]}" loading="lazy">
                </a>
                `;
        load = load + x ;
    }

    document.getElementById(targetedElement).innerHTML = load ;
}


// loading the pictures into page:  *******************************************************************

// loading into home:
pictureFiller(picat1, 'micro-thumb', 'tile-cat1')
pictureFiller(picat2, 'micro-thumb', 'tile-cat2')
pictureFiller(picat3, 'micro-thumb', 'tile-cat3')

// loading into cat1:
pictureFiller(picat1, 'micro-thumb', 'dis-cat1')
pictureFiller(picat2, 'micro-thumb', 'dis-cat2')
pictureFiller(picat3, 'micro-thumb', 'dis-cat3')



// opening viewer pane with selected Picture

function openViewer(targetedPicture) {

    let Picture = document.getElementById('viewed-img');
    Picture.src = pictureSrc + targetedPicture;
    Picture.alt = targetedPicture;
    Picture.title = targetedPicture;


    let resetIcon = document.getElementById('reset-img');
    resetIcon.src = pictureSrcThumbnails + targetedPicture;

    document.getElementById('viewer').style.display = 'flex';

    zoomReset();
    filterListCloser();
    filterReset();
}

// closes viewer :

function closeViewer() {
    document.getElementById('viewer').style.display = 'none' ;
    filterListCloser();
    filterReset();
}


// download the pictures in viewer pane:

function downloadPicture() {
    const picName = document.getElementById('viewed-img').alt ;
    const picUrl = pictureSrc + picName ;

    const link = document.createElement('a');
    link.href = picUrl ;
    link.target = '_blank' ;
    link.click();
    link.remove();
}




// zoom **********************************************************************************************

// Zoom In:

function zoomIn () {
    let targetedPicture = document.getElementById('viewed-img') ;
    zoomIndex += 0.2 ;
    targetedPicture.style.transform = 'scale(' + zoomIndex + ')' ;
}

// Zoom Out:

function zoomOut () {
    let targetedPicture = document.getElementById('viewed-img') ;
    zoomIndex -= 0.2 ;
    targetedPicture.style.transform = 'scale(' + zoomIndex + ')' ;
}

// Zoom Reset:

function zoomReset () {
    let targetedPicture = document.getElementById('viewed-img') ;
    zoomIndex = 1.0 ;
    targetedPicture.style.transform = 'scale(' + zoomIndex + ')' ;
}




// Navigation ****************************************************************************************

// locating a picture:

function locatePicture () {
    let searchTarget = document.getElementById('viewed-img').alt ;
    for (let y of allPictureRolls) {
        if (y.includes(searchTarget)) {
            return {
                Roll: y,
                Picture: y.indexOf(searchTarget)
            }
        }
    }
}

// naviagting to next and previous picture in viewer pane:

function navigatePicture(Direction) {
    let picture = locatePicture().Picture;
    let roll = locatePicture().Roll;

    if (Direction == 'prev') {
        if (roll[picture - 1] === undefined) {
            openViewer(roll[picture]);
        } else {
            openViewer(roll[picture - 1]);
        }
    } else {
        if (roll[picture + 1] === undefined) {
            openViewer(roll[picture]);
        } else {
            openViewer(roll[picture + 1]);
        }
    }

}

// Anything related to filter list in viewer pane ***********************************************************************

let filters = {
    grayscale:    0,
    sepia:        0,
    invert:       0,
    saturate:     100,
    hueRotate:    0,
    brightness:   100,
    contrast:     100
}


// Toggle between open and closed filter list

function filterListToggle() {
    const fl  = document.getElementById('filter-list');
    const flc = document.getElementById('filter-list-content');

    if (fl.classList.contains('expanded')) {
        filterListCloser();
    } else {
        fl.classList.add('expanded');
        fl.style.transform = 'scalex(1)';
        setTimeout(() => {
            flc.classList.add('show-b');
        }, 400);
    }
}

// filter List Closer:

function filterListCloser() {
    const fl  = document.getElementById('filter-list');
    const flc = document.getElementById('filter-list-content');

    flc.classList.remove('show-b');
    setTimeout(() => {
        fl.style.transform = 'scalex(0)';
        fl.classList.remove('expanded');
    }, 300);
}

// updtaing the filter properties of the viewed image and filter label:

function filterChanges(filtersType, filterValue, indicator) {
    let indi = document.getElementById(indicator);
    let viewedImage = document.getElementById('viewed-img') ;
    switch (filtersType) {
        case 'grayscale':
            filters.grayscale = filterValue;
            break;
        case 'sepia' :
            filters.sepia = filterValue;
            break;
        case 'invert':
            filters.invert = filterValue;
            break;
        case 'saturate':
            filters.saturate = filterValue;
            break;
        case 'hue-rotate':
            filters.hueRotate = filterValue;
            break;
        case 'brightness':
            filters.brightness = filterValue;
            break;
        case 'contrast':
            filters.contrast = filterValue;
            break;
        default:
        console.log('Error');
    }

    indi.innerHTML = filterValue;
    viewedImage.style.filter = `grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) invert(${filters.invert}%) saturate(${filters.saturate}%) hue-rotate(${filters.hueRotate}deg) brightness(${filters.brightness}%) contrast(${filters.contrast}%)`;
    
}


// Reseting the filters :

// default rangeNames:
let deafaultRangeNames = ['filter-grayscale', 'filter-sepia', 'filter-invert', 'filter-saturate', 'filter-hue-rotate', 'filter-brightness', 'filter-contrast'];

// default FilterNames:
let deafaultFilterNames = ['grayscale', 'sepia', 'invert', 'saturate', 'hue-rotate', 'brightness', 'contrast'];

// default Indicators:
let deafautIndicators = ['indicator-grayscale', 'indicator-sepia', 'indicator-invert', 'indicator-saturate', 'indicator-hue-rotate', 'indicator-brightness', 'indicator-contrast'];


// default values:
let defualtFilterValues = [0, 0, 0, 100, 0, 100, 100];

function filterReset() {
    // filterChanges('grayscale', 0 , 'indicator-grayscale');
    // filterChanges('sepia', 0 , 'indicator-sepia');
    // filterChanges('invert', 0 , 'indicator-invert');
    // filterChanges('saturate', 100 , 'indicator-saturate');
    // filterChanges('hue-rotate', 0 , 'indicator-hue-rotate');
    // filterChanges('brightness', 100 , 'indicator-brightness');
    // filterChanges('contrast', 100 , 'indicator-contrast');

    for (let i = 0 ; i < deafautIndicators.length; i++) {
        filterChanges(deafaultFilterNames[i], defualtFilterValues[i], deafautIndicators[i]);
        document.getElementById(deafaultRangeNames[i]).value = defualtFilterValues[i];
    }

    
}

// changing from Light mode to Dark mode: **************************************************************************

let liteMode = true ;

function changeMode() {

    let modeSource = document.getElementById('modes');

    if (liteMode == true) {
        liteMode = false ;
        modeSource.href = './assets/dark.css';
    } else {
        liteMode = true ;
        modeSource.href = './assets/lite.css';
    }
}


// onloading the page:

function onPageLoad () {
    let modeButton = document.getElementById('change-mode');
    if (liteMode == true) {
        modeButton.checked = false ;
    } else {
        modeButton.checked = true ;
    }
}

onPageLoad ()