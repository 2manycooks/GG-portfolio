let projects = document.getElementById('projects');
let info = document.getElementById('info');
let contact = document.getElementById('contact');
let description = document.getElementById('description');

contact.addEventListener('click', () => {
    let infoMarquee = document.createElement('marquee');
    infoMarquee.setAttribute('direction', 'left');
    infoMarquee.setAttribute('scrollamount', '10');
    infoMarquee.setAttribute('behavior', 'down');
    infoMarquee.innerText = 'Email:'
    document.body.insertBefore(infoMarquee, desription);
})