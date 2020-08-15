window.onload = (event) => {
  const repositoryButton = document.getElementById("repositories-btn");
  const overViewsButton = document.getElementById("overviews-btn");
  const  overviews_container = document.getElementById("overviews");
  const  repositories_container = document.getElementById("repositories");
  
  repositoryButton.addEventListener("click",function(){
    console.log(overviews_container);
    overviews_container.classList.add('hide');
    repositories_container.classList.remove('hide');
    overViewsButton.parentElement.classList.remove("main-nav__item--active");
    overViewsButton.parentElement.classList.add("main-nav__item");
    repositoryButton.parentElement.classList.remove("main-nav__item");
    repositoryButton.parentElement.classList.add("main-nav__item--active");
  })
  overViewsButton.addEventListener("click",function(){
    console.log(overviews_container);
    overviews_container.classList.remove('hide');
    repositories_container.classList.add('hide');
    repositoryButton.parentElement.classList.remove("main-nav__item--active");
    repositoryButton.parentElement.classList.add("main-nav__item");
    overViewsButton.parentElement.classList.add("main-nav__item--active");
    overViewsButton.parentElement.classList.remover("main-nav__item");
  })
};