const loadNewsBtn = () => {
  const url = `(https://openapi.programming-hero.com/api/news/categories)`
  fetch(url)
    .then((res) => res.json())
    // .then((data) => diplayallNewsBtn(data.data.news_category[0]));
    .then((data) => diplayallNewsBtn(data.data.news_category[0]));
};

const diplayallNewsBtn = (buttns) => {
  console.log(buttns);

  const btnContainer = document.getElementById("btn-container");
  buttns.forEach((buttn) => {
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("ul");
    btnDiv.innerHTML = `
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">${buttn[0].category_name}</a>
    </li>
   
  </ul>
</div>

  
  
  `;
  });
};

loadNewsBtn();

// const loadNews = () => {
//   fetch("https://openapi.programming-hero.com/api/news/category/01")
//     .then((res) => res.json())
//     .then((data) => console.log(data.data));
// };

// loadNews();
