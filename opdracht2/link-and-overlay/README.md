# Link & Overlay Progressive Enhancement

## preface
This assignment aims to create a modal triggered by a link using the progressive enhacement principle;
* The baseline
Available for everyone, should be as close to 100% support on browsers as possible, for the scope of this project we make the assumption that this means no javascript or css.

* Acceptable
This layer will add some styling, which doesn't have to be supported on every browser. For the scope of this project we make the assumption that this means CSS, but no javascript.

* Enjoyable
For the browsers that have javascript enabled with fetch can get the most enjoyable experience. In this stage we assume javascript/css/html is enabled.


## Baseline
**Coverage: 100% of the browsers**   
This is the core functionality of the assignment; when you click on the link,you see modular data.  
Screenshots are from tests on `internet explorer 11`, using the simulator to simulate `internet explorer 5`. I'll be making the assumption that if it works on this, it will work on basically anything.

### Stage 1
![image](img/baseline.png)

### Stage 2 (link has been clicked)
![image](img/baseline-modal.png)

The trick to make it function like this is that i'm serving a static page on click [dialog.html](dialog.html) on click.

## Acceptable
**Coverage: 100% will be able to see the styled button, around 90% for the centered text**  
Couldn't find any sources for the coverage of margin:auto in combination with position absolute top:0 etc to center the div, but in my own tests it works on IE8+.
### Stage 1
![image](img/acceptable-ie8.png)
The link has been styled to look like a button. This isn't the most accesible styling, but it felt like it made sense in this case.

### Stage 2 
![image](img/acceptable-ie8=modal.png)
The text has been centered and the background is dimmed. On older browsers the text won't be centered.


## Enjoyable
With javascript enabled, I feature check if the users browser supports fetch or xmlhttprequest, and allows the fetching of local files (many don't). If this is the case, I present a modal with the content of dialog.html instead of opening the page as a whole. In the other cases the fallback will still be used. 
![image](img/enjoyable-firefox.png)