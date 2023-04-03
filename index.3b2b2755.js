!function(){var t={inputGet:document.querySelector("input"),buttonSubmit:document.querySelector("button")};t.buttonSubmit.addEventListener("click",(function(){t.inputGet.value;fetch("https://pixabay.com/api/").then((function(t){return t.json()})).then((function(t){return console.log(t)}))}))}();
//# sourceMappingURL=index.3b2b2755.js.map
