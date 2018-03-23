# Hamburger Menu Progressive Enhancement

## preface
This assignment aims to recreate the hamburger principle using the progressive enhacement principle;
* The baseline
Available for everyone, should be as close to 100% support on browsers as possible, for the scope of this project we make the assumption that this means no javascript or css.

* Acceptable
This layer will add some styling, which doesn't have to be supported on every browser. For the scope of this project we make the assumption that this means CSS, but no javascript.

* Enjoyable
For the browsers that have javascript enabled with fetch can get the most enjoyable experience. In this stage we assume javascript/css/html is enabled.


## Baseline
**Coverage: 100% of the browsers**   
This is the core functionality of the assignment; when you click on the link, you will be taken to the navbar, which is at the bottom of the page in this scenario.
Screenshots are from tests on `internet explorer 11`, using the emulator to simulate `internet explorer 5`. I'll be making the assumption that if it works on this, it will work on basically anything.

### Stage 1
![image](/img/baseline.png)

### Stage 2 (link has been clicked)
![image](img/baseline-hamburger.png)

Since the core functionality of a hamburger menu is to take the user to the navigation, this seemed like a suitable solution for users without css or javascript.

## Acceptable
**Coverage: 98% will be able to see the functionality with media queriest**  
[media-queries](https://caniuse.com/#feat=css-mediaqueries)

Since CSS is available here, i'm using media queries to only show the hamburger menu if the screen size is smaller then 600px. If media queries aren't supported, the hamburger menu is shown by default.

### big screen
![image](img/acceptable-big-screen.png)


### Stage 1 small screen 
![image](img/acceptable-small-screen.png)
For smaller screens, the hamburger menu is available, now with a bit of styling to make it look more like a hamburger.


### Stage 2 small screen
![image](img/acceptable-small-screen-nav.png)
The nav is also styled differently for small screens, putting the links underneath each other since this is easier for mobile users to use.


## Enjoyable
**Coverage: about 96%**
With javascript enabled, I use position: absolute to position the navbar beneath the hamburger menu on click, by swapping out element classes. I use the fairly new [classlist.toggle](https://caniuse.com/#feat=classlist) in combination with [.addeventlistener](https://caniuse.com/#feat=addeventlistener). In the case these aren't supported, the browser will fallback on the acceptable behaviour
![image](img/enjoyable.png)

