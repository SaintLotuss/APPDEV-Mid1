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

/* 
Grabs elements (Setup): In order to make manipulation easier later, this step uses jQuery to locate certain items on your webpage and stores them in variables.

Moves card on hover: In this step, the card rotates in response to mouse movements made inside the container. It feels like a conductor's hand is guiding the card as your mouse moves.
The card tilts further in that direction the closer your mouse is to the container's edge. 

Removes animation on leave:When you move your mouse away from the container, this step returns the card's rotation to its initial position, meaning it does not rotate at all.
Additionally, it creates a visually pleasing transition by adding a seamless transition effect similar to a stage curtain closing.

Adds animation on enter:When you hover over the container after completing this step, the card elements inside will stand out.
It gives different card pieces a translation effect that looks like three dimensions.

Final step, This stage, which is sometimes omitted from the original description, concentrates on choosing particular components inside the card. 
References to things like headings, photos, titles, social media icons, and maybe profile data are retrieved. These are probably the elements that step 4's pop-out animation will apply to.
*/
