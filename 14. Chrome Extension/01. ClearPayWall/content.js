function clearPayWall() {
    let article = document.getElementById('first-step');
    article.style = "display:none";
    let body = document.getElementsByTagName('body')[0];
    body.classList = '';
}

clearPayWall();