const paginate = ({ limit, page, books }) => {
  const indexLast = page * limit;
  const indexFirst = indexLast - limit;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / limit); i++) {
    pageNumbers.push(i);
  }

  const current = books.slice(indexFirst, indexLast);

  return { books: current, pages: pageNumbers[pageNumbers.length - 1] };
};

const sortNames = ({ books, sort }) => {
  if (sort === "asc") {
    books = books.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (sort === "desc") {
    books = books.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }
  return books;
};

const sortPrices = ({ books, price }) => {
  if (price === "asc") {
    books = books.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  }
  if (price === "desc") {
    books = books.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
  }

  return books;
};

const sortReleased = ({ books, released }) => {
  if (released === "asc") {
    books = books.sort((a, b) => {
      if (a.released > b.released) return 1;
      if (a.released < b.released) return -1;
      return 0;
    });
  }
  if (released === "desc") {
    books = books.sort((a, b) => {
      if (a.released < b.released) return 1;
      if (a.released > b.released) return -1;
      return 0;
    });
  }
  return books;
};

const sortDiscount = ({ books, discount }) => {
  if (discount === "asc") {
    books = books.sort((a, b) => {
      if (a.discount > b.discount) return 1;
      if (a.discount < b.discount) return -1;
      return 0;
    });
  }
  if (discount === "desc") {
    books = books.sort((a, b) => {
      if (a.discount < b.discount) return 1;
      if (a.discount > b.discount) return -1;
      return 0;
    });
  }
  return books;
};

const getByStatus = ({ books, status }) => {
  if (status === "true") books = books.filter((book) => book.used === true);
  if (status === "false") books = books.filter((book) => book.used === false);

  return books;
};

const getByLanguage = ({ books, language }) => {
  return books.filter((book) => book.language === language);
};

const getByName = ({ books, name }) => {
  return books.filter((book) =>
    book.name.toLowerCase().includes(name.toLowerCase())
  );
};

const getByGenre = ({ books, genre }) => {
  return books.filter((book) => book.genres.includes(genre));
};

module.exports = {
  paginate,
  sortNames,
  sortPrices,
  sortReleased,
  sortDiscount,
  getByStatus,
  getByLanguage,
  getByName,
  getByGenre,
};