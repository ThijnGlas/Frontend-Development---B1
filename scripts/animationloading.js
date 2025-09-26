document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.index main section:nth-child(3) > section > h3, .index main section:nth-child(3) > section > h4, .index main section:nth-child(3) i, .index main section:nth-child(3) article');

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -85px 0px",
        threshold: 0.8
    };
  
    function observerCallback(entries, observer) {
        entries.forEach((entry, i) => {
            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('loaded');
                }, i * 100); 
                observer.unobserve(entry.target); 
            }
        });
    }
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    elements.forEach((el) => observer.observe(el));
});


// bron: https://codepen.io/daltonw/pen/YzpbWvW?editors=1010