const booths = [
    { id: "A2", price: 1200, booked: false, category: "sponsor", gridColumn: "2 / 4", gridRow: "1 / 3", size: "160x160" },
    { id: "A3", price: 1500, booked: false, category: "sponsor", gridColumn: "6/ 8", gridRow: "1 / 3", size: "160x160" },
    { empty: true, gridColumn: "4/ 6", gridRow: "1 / 11" },
    { empty: true, gridColumn: "1/ 11", gridRow: "5 / 6" },
    { id: "A1", price: 1200, booked: false, category: "standard" },
    { id: "A4", price: 100, booked: true, category: "prime" },
    { id: "A5", price: 1500, booked: false, category: "standard" },
    { id: "", empty: true },
    { id: "", empty: true },
    { id: "A9", price: 100, booked: false, category: "sponsor", gridColumn: "6 / 8", gridRow: "7 / 8", size: "90x90" },
    { id: "A6", price: 90, booked: false, category: "standard", size: "90x90" },
    { id: "B1", price: 800, booked: false, category: "standard", size: "90x90" },
    { id: "B2", price: 110, booked: false, category: "standard", size: "90x90" },
    { id: "B3", price: 130, booked: true, category: "prime", size: "90x90" },
    { id: "B4", price: 95, booked: false, category: "standard", size: "90x90" },
    { id: "B5", price: 1200, booked: false, category: "sponsor", size: "90x90" },
    { id: "B6", price: 125, booked: false, category: "sponsor", size: "90x90" },
    { id: "B7", price: 115, booked: false, category: "standard", size: "90x90" },
    { id: "C1", price: 140, booked: false, category: "standard", size: "90x90" },
    { id: "C2", price: 2000, booked: false, category: "standard", size: "90x90" },
    { id: "C3", price: 123, booked: false, category: "standard", size: "90x90" },
    { id: "C4", price: 115, booked: false, category: "prime", size: "90x90" },
    { id: "C5", price: 200, booked: false, category: "prime", size: "90x90" },
    { id: "C6", price: 2300, booked: false, category: "sponsor", size: "90x90" },
    { id: "C7", price: 700, booked: false, category: "sponsor", size: "90x90" },
    { id: "D1", price: 480, booked: false, category: "prime", size: "90x90" },
    { id: "D2", price: 380, booked: false, category: "prime", size: "90x90" },
    { id: "D3", price: 1350, booked: false, category: "sponsor", size: "90x90" },
    { id: "D4", price: 1650, booked: false, category: "sponsor", size: "90x90" },
    { id: "D5", price: 800, booked: false, category: "prime", size: "90x90" },
    { id: "D6", price: 600, booked: false, category: "prime", size: "90x90" },
    { id: "D7", price: 480, booked: false, category: "sponsor", size: "90x90" },
    { id: "E1", price: 380, booked: false, category: "sponsor", size: "90x90" },
    { id: "E2", price: 1350, booked: false, category: "prime", size: "90x90" },
    { id: "E3", price: 725, booked: false, category: "standard", size: "90x90" },
    { id: "E4", price: 500, booked: false, category: "prime", size: "90x90" },
    { id: "E5", price: 420, booked: true, category: "prime", size: "90x90" },
    { id: "E6", price: 1650, booked: false, category: "standard", size: "90x90" },
    { id: "E7", price: 800, booked: false, category: "standard", size: "90x90" },
    { id: "F1", price: 600, booked: false, category: "prime", size: "90x90" },
    { id: "F2", price: 480, booked: false, category: "prime", size: "90x90" },
    { id: "F3", price: 380, booked: false, category: "standard", size: "90x90" },
    { id: "F4", price: 1350, booked: false, category: "standard", size: "90x90" },
    { id: "F5", price: 725, booked: false, category: "standard", size: "90x90" },
    { id: "F6", price: 500, booked: false, category: "prime", size: "90x90" },
    { id: "F7", price: 420, booked: true, category: "prime", size: "90x90" },
    { id: "G1", price: 1650, booked: false, category: "sponsor", size: "90x90" },
    { id: "G2", price: 800, booked: false, category: "standard", size: "90x90" },
    { id: "G3", price: 600, booked: false, category: "standard", size: "90x90" },
    { id: "G4", price: 480, booked: false, category: "standard", size: "90x90" },
    { id: "G5", price: 380, booked: false, category: "standard", size: "90x90" },
    { id: "G6", price: 1350, booked: false, category: "sponsor", size: "90x90" },
    { id: "G7", price: 725, booked: false, category: "prime", size: "90x90" },
    { id: "H1", price: 500, booked: false, category: "prime", size: "90x90" },
    { id: "H2", price: 420, booked: true, category: "prime", size: "90x90" },
    { id: "H3", price: 1650, booked: false, category: "standard", size: "90x90" },
    { id: "H4", price: 800, booked: false, category: "prime", size: "90x90" },
    { id: "H5", price: 600, booked: false, category: "standard", size: "90x90" },
    { id: "H6", price: 420, booked: true, category: "prime", size: "90x90" },
    { id: "H7", price: 1650, booked: false, category: "sponsor", size: "90x90" },
    { id: "I1", price: 800, booked: false, category: "sponsor", size: "90x90" },
    { id: "I2", price: 420, booked: true, category: "prime", size: "90x90" },
    { id: "I3", price: 1650, booked: false, category: "standard", size: "90x90" },
    { id: "I4", price: 800, booked: false, category: "standard", size: "90x90" },
    { id: "I5", price: 310, booked: false, category: "prime", gridColumn: "8 / 8", gridRow: "7 / 9", size: "90x90" },
];


let cart = [];

const grid = document.getElementById("booth-grid");
const cartList = document.getElementById("cart-list");
const cartPrice = document.getElementById("cart-total");
const emptyCartMsg = document.getElementById("empty-cart");
const PriceChart = document.getElementById("premium-chart");


function renderBooths() {
    grid.innerHTML = ""; 

    booths.forEach((booth) => {
        const boothElement = createBoothElement(booth);
        grid.appendChild(boothElement);
    });
}


function createBoothElement(booth) {
    if (booth.empty) {
        const gapDiv = document.createElement("div");
        gapDiv.className = "empty";
        if (booth.gridColumn) gapDiv.style.gridColumn = booth.gridColumn;
        if (booth.gridRow) gapDiv.style.gridRow = booth.gridRow;
        return gapDiv;
    }

    const boothDiv = document.createElement("div");
    boothDiv.className = `booth ${booth.category}`;

    if (booth.gridColumn) boothDiv.style.gridColumn = booth.gridColumn;
    if (booth.gridRow) boothDiv.style.gridRow = booth.gridRow;

    boothDiv.textContent = booth.id;

    if (booth.size) {
        const sizeDiv = document.createElement("div");
        sizeDiv.className = "booth-size";
        sizeDiv.textContent = booth.size;
        boothDiv.appendChild(sizeDiv);
    }

    if (booth.booked) boothDiv.classList.add("booked");
    if (cart.includes(booth.id)) {
        boothDiv.classList.add("selected");
        boothDiv.style.cursor = "default";
    }

    const priceTag = document.createElement("div");
    priceTag.className = "price-tag";
    priceTag.innerHTML = `
  <div class="price-id">${booth.id}</div>
  <div class="price-value">Price: ${booth.price} </div>
`;
    boothDiv.appendChild(priceTag);

    if (!booth.booked && !cart.includes(booth.id)) {
        boothDiv.addEventListener("click", () => toggleCart(booth.id));
    }

    return boothDiv;
}




function toggleCart(boothId) {
    const index = cart.indexOf(boothId);

    if (index === -1) {
        cart.push(boothId);
    } else {
        cart.splice(index, 1);
    }

    renderCart();
    renderBooths();
}

function createCartItem(booth) {
    const li = document.createElement("li");
    li.textContent = `${booth.id} — ${booth.price} KWD`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "❌";
    removeBtn.title = `Deselect ${booth.id}`;
    removeBtn.onclick = (e) => {
        e.stopPropagation();
        toggleCart(booth.id);
    };

    li.appendChild(removeBtn);
    return li;
}


function renderCart() {
    cartList.innerHTML = "";

    if (cart.length === 0) {
        emptyCartMsg.style.display = "block";
    } else {
        emptyCartMsg.style.display = "none";
    }

    let total = 0;
    let sponsorSlotCount = 0;
    cart.forEach((id) => {
        const booth = booths.find((b) => b.id === id);
        total += booth.price;
        if (booth.category === "sponsor") sponsorSlotCount++;
        cartList.appendChild(createCartItem(booth));
    });

    cartPrice.textContent = `Total: ${total} KWD`;
    PriceChart.textContent = `Sponsor booths booked: ${sponsorSlotCount}`;
}

renderBooths();
renderCart();
