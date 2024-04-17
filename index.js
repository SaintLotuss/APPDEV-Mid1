// alert('Hello');
// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

/* This code snippet demonstrates a 3D card animation effect using jQuery. The animation involves rotating a card element based on the mouse movement within a container. 
Additionally, it includes pop-out animations for various elements when the mouse enters the container.

The first step is to select the card and container elements from the HTML content with jQuery's selector function.

In the second step, add an event listener for when the mouse moves over the container element.
This will invoke a method that decides how much to rotate the card based on the mouse position on the page.

In step three, we add another event listener to detect when the mouse exits (or "leaves") the container element.
This activates a code that returns any rotation performed in step two to its original spot.

Step four adds motion to our card by changing the CSS properties of individual components as we hover over them with our cursor.
These changes create a pop-out effect for these elements.

Finally, in step five, we select all of the components that require animation and assign them variables that can be modified later in the code.
The code aims to create a 3D card animation effect on a webpage by rotating and moving the card in response to the user's mouse movements.
When the user hovers over the card, it emerges; when they move away, it returns to its original position.

*/