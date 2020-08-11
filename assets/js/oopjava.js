var converter = new showdown.Converter();
// text = '# hello, markdown!';
// html = converter.makeHtml(text);
// console.log(html);
converter.setFlavor('github');

fetch('oopjava.md')
  .then(response => response.text())
  .then(text => $('#markdowncontent').html(converter.makeHtml(text)));