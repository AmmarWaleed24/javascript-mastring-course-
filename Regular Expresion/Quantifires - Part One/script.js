/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru @gmail.com"; // All Emails
let urls = "https://google.com http://www.website.net web.com"; // http + https

//n+ one or more
console.log(mails.match(/\w+@\w+.(com|sa|org|ru|net)/gi));
//zero or more
console.log(mails.match(/\w*@\w+.(com|sa|org|ru|net)/gi));
//zero or one
console.log(urls.match(/(https?:\/\/)?(www.)?\w+.(com|sa|org|ru|net)/gi));
