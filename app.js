const API_URL = "http://localhost:3000/poems";

const renderPoems = (poems) => {
  poems.forEach((poem) => {
    const col = document.createElement("div");
    col.className = "col-3";


    col.innerHTML = `
      <div class="card">
        <img src="${poem.image}" alt="${poem.title}" class="card-img-top" />
        <div class="card-body">
          <p class="card-text">${poem.title} - ${poem.author}</p>
        </div>
      </div>
    `;

    document.getElementById("poetryGrid").appendChild(col);
  });
};

const fetchPoems = async () => {
  try {
    const response = await fetch(API_URL);
    const poems = await response.json();
    renderPoems(poems);
  } catch (error) {
    console.error("Error al cargar los poemas:", error);
  }
};

fetchPoems();