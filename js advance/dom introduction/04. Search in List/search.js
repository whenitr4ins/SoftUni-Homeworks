function search() {
   let search = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');
   let match = 0;

   towns.forEach((town) => {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         match ++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   });
   result.textContent = `${match} matches found`
}
