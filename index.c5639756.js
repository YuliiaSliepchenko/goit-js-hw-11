const t={inputGet:document.querySelector("input"),buttonSubmit:document.querySelector("button")};t.buttonSubmit.addEventListener("click",(function(){t.inputGet.value;fetch("https://pixabay.com/api/").then((t=>t.json())).then((t=>console.log(t)))}));
//# sourceMappingURL=index.c5639756.js.map
