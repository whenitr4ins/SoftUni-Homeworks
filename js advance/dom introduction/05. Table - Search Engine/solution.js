function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const container = Array.from(document.querySelectorAll('tbody tr'));
      const search = document.getElementById('searchField').value;

      container.forEach((row) => {

         if (row.textContent.includes(search)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      document.getElementById('searchField').value = '';

   }
}