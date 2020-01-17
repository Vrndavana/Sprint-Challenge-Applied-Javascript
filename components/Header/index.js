// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// Target
const theHeader = document.querySelector('.header-container');
// Target append
theHeader.append(Header());

// Function
function Header() {
        // Elements -in function-
    const boxHead = document.createElement('div'),
          dateSpan = document.createElement('span'),
          h1Element = document.createElement('h1'),
          temperature = document.createElement('span');
        //   Appends -in function-
          boxHead.append(dateSpan);
          boxHead.append(h1Element);
          boxHead.append(temperature);
        //   Add class -in function-
          boxHead.classList.add('header');
          dateSpan.classList.add('date');
          temperature.classList.add('temp');
        // Text Content -in function-
          dateSpan.textContent = 'SMARCH 28, 2019';
          h1Element.textContent = 'Lambda Times';
          temperature.textContent = '98°';
        //   Return -in function-
          return boxHead;
}


