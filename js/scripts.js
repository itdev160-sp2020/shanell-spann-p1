var user = 'Visitor';
var salutation = 'Welcome, ';
var greeting = salutation + user + '! Here is our salad website.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;