const items = [
  {
    id: "item1",
    name: "KURZER TRENCHCOAT MIT GÜRTEL – ZW COLLECTION",
    category: "trench",
    price: "49.99",
    image: "kurzer_trenchcoat_mit_gurtel.jpg",
    description:
      "Kurzer Trench aus Baumwollmischgewebe. Fallendes Revers. Lange verstellbare Ärmel mit Riegel und Knopf. Vordertaschen. Verstellbarer Gürtel aus dem gleichen Material mit Schnalle. Doppelreihige Knopfleiste vorne.",
  },
  {
    id: "item2",
    name: "MANTEL AUS WOLLMISCHGEWEBE MIT HOHEM KRAGEN",
    category: "mantel",
    price: "59.99",
    image: "mantel_aus_wollmischgewebe.jpg",
    description:
      "Mantel aus Wollmischgewebe. Hoher Kragen. Lange Ärmel. Taschen mit doppelter Paspel vorne. Doppelreihige Knopfleiste vorne.",
  },
  {
    id: "item3",
    name: "PILOTENJACKE MIT ABNEHMBARER KAPUZE – ZW COLLECTION",
    category: "jacke",
    price: "89.99",
    image: "pilotenjacke_mit_abnehmbarer_kapuze.jpg",
    description:
      "Pilotenjacke mit Rundhalsausschnitt und abnehmbarer, gesteppter Kapuze. Lange Ärmel mit überschnittener Schulter und elastischen, abnehmbaren Bündchen mit Steppmuster. Seitentaschen. Verstellbarer Saum mit Tunnelzug und Stopper. Metallreißverschluss vorne.",
  },
  {
    id: "item4",
    name: "OVERSHIRT MIT STICKEREI ZW COLLECTION",
    category: "shirt",
    price: "35.99",
    image: "overshirt_mit_stickerei_zw_collection.jpg",
    description:
      "Overshirt aus reiner Baumwolle. Umlegekragen. Lange Ärmel mit geknöpften Bündchen. Aufgesetzte Brusttaschen. Lochstickerei im gleichen Farbton. Metallknöpfe vorne.",
  },
  {
    id: "item5",
    name: "SOFT-MANTEL MIT KAPUZE",
    category: "mantel",
    price: "29.99",
    image: "softmantel_mit_kapuze.jpg",
    description:
      "Mantel mit Kapuze und langen Ärmeln. Paspeltaschen vorne. Gürtel aus dem gleichen Material. Bomberjacke aus Leinenmischgewebe. Rundhalsausschnitt. Lange Ärmel mit Druckknopf. Paspeltaschen vorne. Elastischer Saum mit Gürtel und verstellbaren Schlaufen an den Seiten. Reißverschluss vorne.",
  },
  {
    id: "item6",
    name: "KURZE KUNSTLEDERJACKE",
    category: "lederjacke",
    price: "29.99",
    image: "kurze_kunstlederjacke.jpg",
    description:
      "Jacke mit Umlegekragen. Lange Ärmel. Patten vorne. Paspeltaschen. Verdeckter Reißverschluss und verdeckte Druckknöpfe vorne.",
  },
  {
    id: "item7",
    name: "KURZE BOMBERJACKE AUS LEINENMISCHGEWEBE",
    category: "jacke",
    price: "29.99",
    image: "kurze_bomberjacke_aus_leinenmischgewebe.jpg",
    description:
      "Bomberjacke aus Leinenmischgewebe. Rundhalsausschnitt. Lange Ärmel mit Druckknopf. Paspeltaschen vorne. Elastischer Saum mit Gürtel und verstellbaren Schlaufen an den Seiten. Reißverschluss vorne.",
  },
  {
    id: "item8",
    name: "TAILLIERTER MANTEL AUS MANTECO-WOLLE ZW COLLECTION",
    category: "mantel",
    price: "89.99",
    image: "taillierter_mantel_aus_manteco-wolle.jpg",
    description:
      "Mantel aus Mischgewebe mit Manteco-Wolle. Fallendes Revers. Lange Ärmel mit Schlitz und Knopf. Pattentaschen vorne. Paspeltasche im Brustbereich.",
  },
  {
    id: "item9",
    name: "SCHMAL GESCHNITTENER MANTEL AUS MANTECO-WOLLE – ZW COLLECTION",
    category: "mantel",
    price: "89.99",
    image: "schmal_geschnittener_mantel.jpg",
    description:
      "Schal geschnittener Mantel aus Manteco-Wollmischgewebe. Fallendes Revers. Lange Ärmel mit Schlitz und Knopf. Pattentaschen vorne. Paspeltasche im Brustbereich. Innenfutter. Knopfleiste vorne.",
  },
  {
    id: "item10",
    name: "TAILLIERTER MANTEL SOFT",
    category: "mantel",
    price: "39.99",
    image: "taillierter_mantel_soft.jpg",
    description:
      "Mantel mit Reverskragen. Lange Ärmel mit Schulterpolstern. Taschen mit doppelter Paspel vorne. Gehschlitz am Rückensaum. Knopfleiste vorne.",
  },
  {
    id: "item11",
    name: "JACKE MIT STRUKTURMUSTER UND LAMÉFADEN",
    category: "croppedschnitt",
    price: "29.99",
    image: "jacke_mit_strukturmuster.jpg",
    description:
      "Kurze Jacke mit Reverskragen. Lange Ärmel. Paspeltaschen vorne. Mit Laméfadendetails. Reißverschluss vorne.",
  },
  {
    id: "item12",
    name: "KURZES OVERSIZE-CAPE ZW COLLECTION",
    category: "jacke",
    price: "49.99",
    image: "kurzes_oversize_cape.jpg",
    description:
      "Kurzes Cape mit hohem Kragen und Kapuze mit verstellbarem Tunnelzug im gleichen Farbton. Lange, weite Ärmel, verstellbar mit Riegel und Knopf.",
  },
];

const itemSizeListData = ["XS", "S", "M", "L", "XL", "XXL"];

//This function extracts query parameters from the URL and returns them as an object.//
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const queryParams = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
}

//This function determines the number of columns to display based on the screen width//

function determineColumns() {
  const screenWidth = window.innerWidth;
  let defaultColumns = 6;
  if (screenWidth <= 576) {
    defaultColumns = 1;
  } else if (screenWidth <= 768) {
    defaultColumns = 2;
  } else if (screenWidth <= 1200) {
    defaultColumns = 3;
  }
  return defaultColumns;
}

//This function prevents a function from being called too frequently. It waits a specified amount of time (wait) after the last call before invoking the function.//

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

//This function dynamically creates and displays size options//

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

//This function displays the items on the page based on the selected category and the number of columns.//

function displayItems(category, columns) {
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

      itemElement.style.width = `${Math.floor(100 / columns) - 1}%`;

      itemElement.addEventListener("click", () => {
        window.location.href = `article.html?id=${item.id}`;
      });

      itemList.appendChild(itemElement);
    }
  });
}

//This script handles the hamburger menu for a mobile navigation overlay.//

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
  //This script manages the display of items based on category and column settings. It also handles resizing of the window and updating the display accordingly.//
} else if (path.includes("/damen")) {
  let currentCategory = "all";
  let currentColumns = determineColumns();
  displayItems(currentCategory, currentColumns);

  document.querySelectorAll(".menuOptions a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.hasAttribute("dataCategory")) {
        document.querySelectorAll("div a[dataCategory]").forEach((item) => {
          item.classList.remove("active");
        });

        this.classList.add("active");

        currentCategory = this.getAttribute("dataCategory");
        displayItems(currentCategory, currentColumns);
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

      const dataColumn = parseInt(this.getAttribute("data-columns"));
      const defaultColumn = determineColumns();
      displayItems(currentCategory, dataColumn * defaultColumn);
    });
  });

  window.addEventListener(
    "resize",
    debounce(() => {
      const defaultColumns = determineColumns();
      displayItems(currentCategory, defaultColumns);
    }, 300)
  );
  //This script displays the details of a specific item based on the id parameter in the URL.//
} else if (path.includes("/article")) {
  const queryParams = getQueryParams();
  const itemId = queryParams.id;
  if (itemId) {
    const item = items.find((i) => i.id === itemId);
    if (item) {
      document.getElementById("itemTitle").textContent = item.name;
      document.getElementById("itemPrice").textContent = item.price + " \u20AC";
      document.getElementById("itemImage").src = "images/" + item.image;
      document.getElementById("itemImage").alt = item.name;
      document.getElementById("itemDescription").textContent = item.description;
      document.getElementById("itemCategory").textContent = item.category;
    } else {
      document.getElementById("itemDetails").innerHTML =
        "<p>Item not found.</p>";
    }
  }

  displayItemSize();
}
