function reqListener() {
    var articles = JSON.parse(this.responseText);
    let articlesDiv = document.getElementById("articles");
    Array.from(articles.articles).forEach(article => {
        let articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        let title = document.createElement('h2');
        title.textContent = article.title;
        let description = document.createElement('p');
        description.textContent = article.description;
        let waysHeader = document.createElement('h3');
        waysHeader.textContent = "Ways to Achieve:";
        let waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(way => {
            let listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        let benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = "Benefits:";
        let benefitsList = document.createElement('ul');
        article.benefits.forEach(benefit => {
            let listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(articleDiv);
    });
}

var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
var url = './data.json';
req.open('GET', url, true);
req.responseType = 'text';
req.send();
