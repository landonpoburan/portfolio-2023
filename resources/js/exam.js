// Click handler for search button
const captureSearchValue = () => {
    //alert(document.getElementById('search-bar').value);
    return document.getElementById('search-bar').value; // Works.
  };
  
  // Filter books based on search input and render filtered books to the DOM
  const filterBooks = (searchString, bookObj) => {
    const searchValue = searchString(); // Works.
    //alert(searchValue); // Testing.
    
    const bookArray = flattenObjectValuesIntoArray(bookObj); // Works.
    //alert(bookArray); // Testing.
  
    const resultArray = bookArray.filter(book => book.includes(searchValue)); // Works.
    //alert(resultArray); // Testing.
    // console.log(resultArray); // Testing output format.
  
    return resultArray;
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = () => {
    // Use: structureBookAsHtml() to build an array of HTML elements.
    const bookList = filterBooks(captureSearchValue, books); // Works.
    // alert(bookList); // Testing.
    // console.log(bookList); // Testing.
  
    let formattedBookHTML = [];
    for (let i = 0; i < bookList.length; i++) {
      //formattedBookHTML.push(structureBookAsHtml(i));
      alert(bookList[i]);
    }
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = () => {
    //alert(captureSearchValue);
    //filterBooks(captureSearchValue, books); // Works.
    structureBooksAsHtml();
  
  
   // this is the final step
   // const renderBooksToDom = (elements) => {
  }
  
  // Grab search button from the DOM
  searchBtn = document.getElementById('search-btn');
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });