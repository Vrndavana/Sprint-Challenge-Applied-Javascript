

// Target
        const getCards = document.querySelector('.cards-container');

// Axios Dbl ForEach using Object.Values
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    Object.values(response.data.articles).forEach(item => {
        item.forEach(items => {
            getCards.append(createCards(items))
        })
    })
})
.catch(error => {
    console.log(error)
})

// Function
function createCards (article){
         // Create Elements -in function-
    const cardContainer = document.createElement('div'),
          headlineContainer = document.createElement('div'),
          authorContainer = document.createElement('div'),
          imgContainer = document.createElement('div'),
          imgElement = document.createElement('img'),
          spanContainer = document.createElement('span');
         //   Appends -in function-
          cardContainer.append(headlineContainer);
          cardContainer.append(authorContainer);
          authorContainer.append(imgContainer);
          imgContainer.append(imgElement);
          authorContainer.append(spanContainer);
         //   class listt add -in function-
          cardContainer.classList.add('card');
          headlineContainer.classList.add('headline');
          authorContainer.classList.add('author');
          imgContainer.classList.add('img-container');
         //   Text Content -in function-
          headlineContainer.textContent = article.headline
          imgElement.src = article.authorPhoto
          spanContainer.textContent = `By ${article.authorName}`   
        // Return -in function- 
          return cardContainer;
        }

