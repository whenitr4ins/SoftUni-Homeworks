function create(words) {
   let contentRef = document.getElementById("content");
   for (let word of words) {
      let divElement = document.createElement("div");
      let pElement = document.createElement("p");
      pElement.textContent = word;
      pElement.style.display = "none"

      divElement.addEventListener("click", onClick);


      divElement.appendChild(pElement);
      contentRef.appendChild(divElement);
   }
   function onClick(event) {
      let target = event.currentTarget.children[0].style.display = "block";
   }
}
