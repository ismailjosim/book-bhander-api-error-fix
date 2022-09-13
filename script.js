const bookList = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2019.png",
    name: "Eloquent JavaScript",
    overview: "Lorem, ipsum dolor sit amet",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2020.png",
    name: "O'REILLY Learning React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2021.png",
    name: "The Road To React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2022.png",
    name: "C Programming Language",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2023.png",
    name: "Effective Typescript",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2025.png",
    name: "JavaScript Everywhere",
    overview: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const wishlistItems = [];
const cart = [];

const getWishlistItems = () => {
  return bookList.filter((book) => wishlistItems.includes(book.id.toString()));
};

const getCartItems = () => {
  return bookList.filter((book) => cart.includes(book.id.toString()));
};

//====> Toggle item
const switchTab = (id) => {
  if (id === "container") {

    document.getElementById("container").style.display = "grid";
    document.getElementById("wishlist").style.display = "none";
    document.getElementById("cart").style.display = "none";

  } else if (id === "wishlist") {

    document.getElementById("wishlist").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("cart").style.display = "none";
    displayWishlist();

  } else {

    document.getElementById("cart").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("wishlist").style.display = "none";
    displayCart();
  }
};

//===>  show Book Items.
const showBooks = (books) => {
  const bookContainer = document.getElementById("container");

  books.forEach((book) => {
    const div = createCard(book);
    bookContainer.appendChild(div);
  });
};
//===>  Create Card.
const createCard = (book) => {
  const div = document.createElement("div");
  div.classList.add("card");
  // destructure all data from book.
  const { id, image, name, overview } = book;
  div.innerHTML = `
  <div class="image-container">
    <img
      src="${ image }"
      alt=""
    />
    <div class="button-container">
      <button onclick="addToWishlist('${ id }')" class="button"><i class="fa-solid fa-heart"></i></button>
      <button onclick="addToCart('${ id }')" class="button">Add To Cart</button>
    </div>
  </div>
  <div class="info-container">
    <h1>${ name }</h1>
    <p>
      ${ overview.length < 50 ? overview : overview.slice(0, 50) }
    </p>
  </div>`;
  return div;
};

showBooks(bookList);

//===> Add To cart function
const addToCart = id => {
  if (cart.indexOf(id) === -1) {
    cart.push(id);
  }
};


//===> Display Add To cart function
const displayCart = () => {
  const cart = getCartItems();
  const cartEl = document.getElementById("cart");
  cartEl.innerHTML = "";

  cart.forEach((book) => {
    const div = createCard(book);
    cartEl.appendChild(div);
  });
};

//===> Wishlist function
const addToWishlist = id => {
  if (wishlistItems.indexOf(id) === -1) {
    wishlistItems.push(id);
  }
};
//===> Display Wishlist function
const displayWishlist = () => {
  const wishlist = getWishlistItems();
  const wishlistEl = document.getElementById("wishlist")
  wishlistEl.innerHTML = '';

  wishlist.forEach((book) => {
    const div = createCard(book);
    wishlistEl.appendChild(div);
  });
};
