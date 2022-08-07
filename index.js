const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9b5abd98104d423899d76626d7019c56');
const prompt = require('prompt');
prompt.start();

prompt.get(['content'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  getNews(result)
});

function onErr(err) {
  console.log(err);
  return 1;
}

function getNews(result) {
    newsapi.v2.topHeadlines({
        q: result.content
      }).then(response => {
        console.log(response);
      });
}