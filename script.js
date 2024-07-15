let url = "http://localhost:3000/products";

let items;

function getItems() {
  fetch(url)
    .then(response => response.json())
    .then(products => {
      items = products;
      let currentCategory = "all";
      // let currentColumns = determineColumns();
      // displayItems(currentCategory, currentColumns);
      displayItems(currentCategory);
    })
    .catch(error => alert(error))
}

const itemSizeListData = ["XS", "S", "M", "L", "XL", "XXL"];

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
}

// function determineColumns() {
//   const screenWidth = window.innerWidth;
//   let defaultColumns = 6;
//   if (screenWidth <= 576) {
//     defaultColumns = 1;
//   } else if (screenWidth <= 768) {
//     defaultColumns = 2;
//   } else if (screenWidth <= 1200) {
//     defaultColumns = 3;
//   }
//   return defaultColumns;
// }

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function displayItemSize() {
  const itemList = document.getElementById("itemSizeList");
  itemList.innerHTML = "";

  itemSizeListData.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "itemSizeElement";
    itemElement.textContent = item;
    itemList.appendChild(itemElement);
  });
}

function displayItems(category) {
  const itemList = document.getElementById("productList");
  itemList.innerHTML = "";

  items.forEach((item) => {
    if (category === "all" || item.category === category) {
      const itemElement = document.createElement("div");
      itemElement.className = "item";

      const imageElement = document.createElement("img");
      imageElement.src = "images/" + item.image;
      imageElement.alt = item.name;
      itemElement.appendChild(imageElement);

      const titleElement = document.createElement("div");
      titleElement.textContent = item.name;
      itemElement.appendChild(titleElement);

      const priceElement = document.createElement("div");
      priceElement.textContent = item.price + " \u20AC";
      itemElement.appendChild(priceElement);

      // itemElement.style.width = `${Math.floor(100 / columns) - 1}%`;

      itemElement.addEventListener("click", () => {
        window.location.href = `article.html?id=${item.id}`;
      });

      itemList.appendChild(itemElement);
    }
  });
}

let path = window.location.pathname;

if (path.includes("/index")) {
  //INDEX Page script

  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const overlay = document.getElementById("overlay");
    hamburgerMenu.addEventListener("click", () => {
      overlay.style.display =
        overlay.style.display === "flex" ? "none" : "flex";
    });
  });
} else if (path.includes("/damen")) {
  getItems();
  document.querySelectorAll(".menuOptions a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.hasAttribute("dataCategory")) {
        document.querySelectorAll("div a[dataCategory]").forEach((item) => {
          item.classList.remove("active");
        });

        this.classList.add("active");

        currentCategory = this.getAttribute("dataCategory");
        // displayItems(currentCategory, currentColumns);
        displayItems(currentCategory);
      }
    });
  });

  document.querySelectorAll(".columnsOption").forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelectorAll(".columnsOption").forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");

      // const dataColumn = parseInt(this.getAttribute("data-columns"));
      // const defaultColumn = determineColumns();
      // displayItems(currentCategory, dataColumn * defaultColumn);
      displayItems(currentCategory);
    });
  });

  window.addEventListener(
    "resize",
    debounce(() => {
      // const defaultColumns = determineColumns();
      // displayItems(currentCategory, defaultColumns);
      displayItems(currentCategory);
    }, 300)
  );
} else if (path.includes("/article")) {
  const queryParams = getQueryParams();
  const itemId = queryParams.id;
  if (itemId) {
    fetch(`${url}/${itemId}`)
      .then(response => response.json())
      .then(item => {
        document.getElementById("itemTitle").textContent = item.name;
        document.getElementById("itemPrice").textContent = item.price + " \u20AC";
        document.getElementById("itemImage").src = "images/" + item.image;
        document.getElementById("itemImage").alt = item.name;
        document.getElementById("itemDescription").textContent = item.description;
        document.getElementById("itemCategory").textContent = item.category;
      })
      .catch(error => alert(error))


    // } else {
    //   document.getElementById("itemDetails").innerHTML =
    //     "<p>Item not found.</p>";
    // }
  }

  displayItemSize();
}

