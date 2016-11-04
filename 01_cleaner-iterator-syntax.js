const assert = require('assert');

let urls = ['http://wwww.example1.com'];

// Cleaner iterator syntax
for (var url of urls) {
  assert(url == 'http://wwww.example1.com')
}

for (var url in urls) {
  assert(url == 0);
}
