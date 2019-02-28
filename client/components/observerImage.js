import React from "react";



export default (props) => {

    function loadImage() {
        return props;
    }





    /*function createIntersectionObserver() {
        const options = {
            root: null,
            threshold: 1
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(props);
    }*/


    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(props);
                return props;

            }
        });
    }


    (function () {
        const options = {
            root: null,
            threshold: 1
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(props);

    })();



    //createIntersectionObserver();


}