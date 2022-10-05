// Assignment1 / Do Young Lee / 301108844 / 2022-10-05
// IIFE -- Immediately Invoked Function Expression
(function(){

    function start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", start);

})();

// It directs users to the homepage when the "send button" is clicked
(function() {
    function send() {
        window.location.href = "/home";
    }
    document.getElementById('send').addEventListener("click", send);
})();

