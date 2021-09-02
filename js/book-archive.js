// search book button
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    // url 
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))

}


const displaySearchResult = docs => {
    // for notification output
    const warning = document.getElementById("result-num");

    if (docs.length === 0) {
        warning.innerHTML = `<h6>Your search book is not found on any pages.</h6>`;
    }

    const searchResult = document.getElementById('search-results');
    searchResult.textContent = '';
    let count = 0;
    // use for each loop
    docs.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col');
        // show output in innerHtml file
        div.innerHTML = `
        <div class="card-body border border2 border-dark h-100 ">
        <img  class="card-img-top" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"  alt="...">
          <h3><span>Book Name:</span>${book.title}</h3>
          <p><span>Author Name:</span>${book.author_name}</p>
          <h4><span>Publisher:</span>${book.publisher}</p>
          <h4><span>First Publish Year:</span> ${book.first_publish_year}</h4>
        </div>
         `;
        // append child
        searchResult.appendChild(div);
        count++;
    });
    // for count total search book
    const searchResult1 = document.getElementById('total-search');
    const div1 = document.createElement('div');
    div1.classList.add('col');
    div1.innerHTML = `
    <h2>total search items=${count}</h2> `;
    searchResult1.appendChild(div1);

    // console.log(count);
}

