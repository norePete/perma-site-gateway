const {default: Arweave} = require('arweave');
const {default: TestWeave} = require('testweave-sdk');
const fs = require('browserify-fs');
const arweave = Arweave.init({
  host: 'localhost',
  port: 1984,
  protocol: 'http',
  timeout: 20000,
  logging: false,
});

window.p4 = async function p4() {
  const testWeave = await TestWeave.init(arweave);
  let data = ` 
 
<!DOCTYPE html>
<html>
  <head>
    <title>Web Design in 4 minutes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:url" content="https://jgthms.com/web-design-in-4-minutes/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Web Design in 4 minutes">
    <meta property="og:description" content="Learn the basics of web design in 4 minutes with this interactive tutorial.">
    <meta property="og:image" content="https://jgthms.com/web-design-in-4-minutes/learn-web-design-in-4-minutes.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@jgthms">
    <meta name="twitter:creator" content="@jgthms">
    <meta name="twitter:title" content="Web Design in 4 minutes">
    <meta name="twitter:description" content="Learn the basics of web design in 4 minutes with this interactive tutorial.">
    <meta name="twitter:image" content="https://jgthms.com/web-design-in-4-minutes/learn-web-design-in-4-minutes.png">

    <link rel="stylesheet" type="text/css" href="index.css">
  </head>
  <body>
    <header id="header">
      <img id="logo" src="web-design-in-4-minutes.png" alt="Web Design in 4 minutes logo">
      <h1>Web Design in 4 minutes</h1>
      <p>
        <a href="https://jgthms.com" target="_blank">by Jeremy Thomas</a>
      </p>
    </header>

    <main>
      <section id="start">
        <p>Let's say you have a product, a portfolio, or just an idea you want to share with everyone on your <em>own</em> website. Before you publish it on the internet, you want to make it look attractive, professional, or at least <em>decent</em> to look at.</p>
        <p>What is the <a class="step" data-step="0" href="#content">first thing</a> you need to work on?</p>
      </section>

      <section id="content">
        <h2>Content</h2>
        <p>The purpose of <strong>design</strong> is to enhance the presentation of the content it's applied to. It might sound obvious, but content being the <strong>primary</strong> element of a website, it should not be established as an afterthought.</p>
        <p>Written content, like the paragraph you're currently reading, makes up for more than 90% of the Web. Styling this textual content will go a long way.</p>
        <p>Let's assume you've already finalised the content you want to publish and just created an empty <code>style.css</code> file, what is the <a class="step" data-step="1" href="#centering">first rule</a> you can write?</p>
      </section>

      <section id="centering">
        <h2>Centering</h2>
        <p>Long lines of text can be hard to parse, and thus hard to <strong>read</strong>. Setting a limit of characters per line greatly enhances the readability and appeal of a wall of text.</p>
<pre><span class="selector">body</span> {
  <span class="attribute">margin</span>: <span class="number">0</span> auto;
  <span class="attribute">max-width</span>: <span class="number">50</span><span class="unit">em</span>;
}</pre>
        <p>After styling the text <em>blocks</em>, what about styling the <a class="step" data-step="2" href="#font-family">text itself</a>?</p>
      </section>

      <section id="font-family">
        <h2>Font family</h2>
        <p>The browser's font defaults to <code>"Times"</code>, which can look unappealing (mostly because it is the "unstyled" font). Switching to a <strong>sans-serif</strong> font like <code>"Helvetica"</code> or <code>"Arial"</code> can vastly improve the look of your page.</p>
<pre><span class="selector">body</span> {
  <span class="attribute">font-family</span>: <span class="string">"Helvetica"</span>, <span class="string">"Arial"</span>, sans-serif;
}</pre>
        <p><em>If you want to stick with a serif font, try <code>"Georgia"</code>.</em></p>
        <p>While this makes the text more <em>appealing</em>, let's also make it <a class="step" data-step="3" href="#spacing">more readable</a>.</p>
      </section>

      <section id="spacing">
        <h2>Spacing</h2>
        <p>When a page looks "broken" to a user, it's usually a <strong>spacing</strong> issue. Providing space both <em>around</em> and <em>within</em> your content can increase the appeal of your page.</p>
<pre><span class="selector">body</span> {
  <span class="attribute">line-height</span>: <span class="number">1.5</span>;
  <span class="attribute">padding</span>: <span class="number">4</span><span class="unit">em</span> <span class="number">1</span><span class="unit">em</span>;
}

<span class="selector">h2</span> {
  <span class="attribute">margin-top</span>: <span class="number">1</span><span class="unit">em</span>;
  <span class="attribute">padding-top</span>: <span class="number">1</span><span class="unit">em</span>;
}</pre>
        <p>While the layout has greatly improved so far, let's apply more <a class="step" data-step="4" href="#color-contrast">subtle changes</a>.</p>
      </section>

      <section id="color-contrast">
        <h2>Color &amp; contrast</h2>
        <p>Black text on a white background can be harsh on the eyes. Opting for a softer shade of black for body text makes the page more <strong>comfortable</strong> to read.</p>
<pre><span class="selector">body</span> {
  <span class="attribute">color</span>: <span class="number">#555</span>;
}</pre>
        <p>And in order to keep a decent level of <strong>contrast</strong>, let's pick a darker shade for <strong>important</strong> words</p>
<pre><span class="selector">h1</span>,
<span class="selector">h2</span>,
<span class="selector">strong</span> {
  <span class="attribute">color</span>: <span class="number">#333</span>;
}</pre>
        <p>While most of the page has been improved visually, some elements (like the code snippets) still seem <a class="step" data-step="5" href="#balance">out of place</a>.</p>
      </section>

      <section id="balance">
        <h2>Balance</h2>
        <p>It only takes a few additional touches to correct the balance of the page:</p>
<pre><span class="selector">code</span>,
<span class="selector">pre</span> {
  <span class="attribute">background</span>: <span class="number">#eee</span>;
}

<span class="selector">code</span> {
  <span class="attribute">padding</span>: <span class="number">2</span>px <span class="number">4</span>px;
  <span class="attribute">vertical-align</span>: text-bottom;
}

<span class="selector">pre</span> {
  <span class="attribute">padding</span>: <span class="number">1</span>em;
}</pre>
        <p>At this point, you might want to make your page stand out and give it <a class="step" data-step="6" href="#primary-color">identity</a>.</p>
      </section>

      <section id="primary-color">
        <h2>Primary color</h2>
        <p>Most brands have a <strong>primary color</strong> that acts as a visual accent. On a website, this accent can be used to provide emphasis on interactive elements, like <strong>links</strong>.</p>
<pre><span class="selector">a</span> {
  <span class="attribute">color</span>: <span class="number">#e81c4f</span>;
}</pre>
        <p>But to keep the balance, we will need some <a class="step" data-step="7" href="#secondary-colors">additional colors</a>.</p>
      </section>

      <section id="secondary-colors">
        <h2>Secondary colors</h2>
        <p>The accent color can be complemented with more <em>subtle</em> shades, to be used on borders, backgrounds, or even the body text.</p>
<pre><span class="selector">body</span> {
  <span class="attribute">color</span>: <span class="number">#566b78</span>;
}

<span class="selector">code</span>,
<span class="selector">pre</span> {
  <span class="attribute">background</span>: <span class="number">#f5f7f9</span>;
  <span class="attribute">border-bottom</span>: <span class="number">1</span><span class="unit">px</span> solid <span class="number">#d8dee9</span>;
  <span class="attribute">color</span>: <span class="number">#a7adba</span>;
}

<span class="selector">pre</span> {
  <span class="attribute">border-left</span>: <span class="number">2</span><span class="unit">px</span> solid <span class="number">#69c</span>;
}</pre>
        <p>Having changed the shades, why not change the <a class="step" data-step="8" href="#custom-font">shapes</a>...</p>
      </section>

      <section id="custom-font">
        <h2>Custom font</h2>
        <p>Since text is the main content of a webpage, using a <strong>custom font</strong> gives the page even more noticeable identity.</p>
        <p>While you can embed your own webfont or use an online service like <a href="https://typekit.com" target="_blank">Typekit</a>, let's use <code>"Roboto"</code> from the free <a href="https://fonts.google.com" target="_blank">Google Fonts</a> service:</p>
<pre><span class="keyword">@import</span> <span class="string">'https://fonts.googleapis.com/css?family=Roboto:300,400,500'</span>;

<span class="selector">body</span> {
  <span class="attribute">font-family</span>: <span class="string">"Roboto"</span>, <span class="string">"Helvetica"</span>, <span class="string">"Arial"</span>, sans-serif;
}</pre>
        <p>After enhancing your identity through <em>text</em>, how about adding a <a class="step" data-step="9" href="#images">thousand words</a>...</p>
      </section>

      <section id="images">
        <h2>
          <img src="images.png" alt="Spongebob rainbow meme saying 'Images'">
        </h2>
        <p>Graphics and icons can be used either as ornaments to support your content, or actively take part in the message you want to convey.</p>
        <p>Let's enhance our header with a nice <strong>background image</strong> from <a href="https://unsplash.com/photos/qH36EgNjPJY" target="_blank">Unsplash</a></p>
<pre><span class="selector">header</span> {
  <span class="attribute">background-color</span>: <span class="number">#263d36</span>;
  <span class="attribute">background-image</span>: url(<span class="string">"header.jpg"</span>);
  <span class="attribute">background-position</span>: center top;
  <span class="attribute">background-repeat</span>: no-repeat;
  <span class="attribute">background-size</span>: cover;
  <span class="attribute">line-height</span>: <span class="number">1.2</span>;
  <span class="attribute">padding</span>: <span class="number">10</span><span class="unit">vw</span> <span class="number">2</span><span class="unit">em</span>;
  <span class="attribute">text-align</span>: center;
}</pre>
        <p>Let's also add a <strong>logo</strong></p>
<pre><span class="selector">header img</span> {
  <span class="attribute">display</span>: inline-block;
  <span class="attribute">height</span>: <span class="number">120</span><span class="unit">px</span>;
  <span class="attribute">vertical-align</span>: top;
  <span class="attribute">width</span>: <span class="number">120</span><span class="unit">px</span>;
}</pre>
        <p>Let's take that opportunity to enhance the text styles.</p>
<pre><span class="selector">header h1</span> {
  <span class="attribute">color</span>: white;
  <span class="attribute">font-size</span>: <span class="number">2.5</span><span class="unit">em</span>;
  <span class="attribute">font-weight</span>: <span class="number">300</span>;
}

<span class="selector">header a</span> {
  <span class="attribute">border</span>: <span class="number">1</span><span class="unit">px</span> solid <span class="number">#e81c4f</span>;
  <span class="attribute">border-radius</span>: <span class="number">290486</span><span class="unit">px</span>;
  <span class="attribute">color</span>: white;
  <span class="attribute">font-size</span>: <span class="number">0.6</span><span class="unit">em</span>;
  <span class="attribute">letter-spacing</span>: <span class="number">0.2</span><span class="unit">em</span>;
  <span class="attribute">padding</span>: <span class="number">1</span><span class="unit">em</span> <span class="number">2</span><span class="unit">em</span>;
  <span class="attribute">text-transform</span>: uppercase;
  <span class="attribute">text-decoration</span>: none;
  <span class="attribute">transition</span>: none <span class="number">200</span><span class="unit">ms</span> ease-out;
  <span class="attribute">transition-property</span>: color, background;
}

<span class="selector">header a:hover</span> {
  <span class="attribute">background</span>:  <span class="number">#e81c4f</span>;
  <span class="attribute">color</span>: white;
}</pre>
        <p><a href="#header">And voil&agrave;</a>!</p>
        <p>We've designed a decent page in just a few minutes, following basic principles of web design. There's only <a class="step" data-step="10" href="#share">one last thing</a> left to do...</p>
      </section>

      <section id="share">
        <h2>Learn CSS!</h2>
        <p>
          I've written a <strong>44-page pdf</strong> that teaches you how to <strong>build your own webpage</strong> from scratch. <span class="emoji">😃</span>
        </p>
        <p class="cover">
          <a class="resource" href="https://jgthms.com/css-in-44-minutes-ebook">
            <img src="https://jgthms.com/images/empty.png"
                 srcset="css-in-44-minutes-book-cover.png 1x,
                         css-in-44-minutes-book-cover@2x.png 2x,
                         css-in-44-minutes-book-cover@3x.png 3x,
                         css-in-44-minutes-book-cover@4x.png 4x"
                         alt="CSS in 44 minutes book cover"
                         width="252"
                         height="352">
          </a>
        </p>
        <h2>Share the love!</h2>
        <nav class="buttons">
          <a class="button github" href="https://github.com/jgthms/web-design-in-4-minutes" target="_blank">
            <em>Download on</em> <strong>GitHub</strong>
          </a>
          <a
            class="button facebook"
            href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fjgthms.com%2Fweb-design-in-4-minutes%2F"
            rel="nofollow"
            target="_blank"
            >
            <em>Share on</em> <strong>Facebook</strong>
          </a>
          <a
            class="button twitter"
            data-social-network="Twitter"
            data-social-action="tweet"
            data-social-target="https://jgthms.com/web-design-in-4-minutes/"
            href="https://twitter.com/intent/tweet?text=Web%20Design%20in%204%20minutes&url=https%3A%2F%2Fjgthms.com%2Fweb-design-in-4-minutes%2F&via=jgthms"
            rel="nofollow"
            target="_blank"
            >
            <em>Share on</em> <strong>Twitter</strong>
          </a>
        </nav>
        <h2>Learn how to design with code!</h2>
        <p>
          Here are the resources I wrote to help you learn CSS:
        </p>
        <nav class="resources">
          <a class="resource-marksheet resource" href="http://marksheet.io" target="_blank">
            <figure class="resource-icon">
              <img src="marksheet.png" alt="Logo of MarkSheet">
            </figure>
            <p>
              <strong class="resource-name">MarkSheet</strong>
              my <strong>free tutorial</strong> to learn HTML and CSS
            </p>
          </a>
          <a class="resource-bulma resource" href="https://bulma.io" target="_blank">
            <figure class="resource-icon">
              <img src="bulma.png" alt="Logo of Bulma">
            </figure>
            <p>
              <strong class="resource-name">Bulma</strong>
              my <strong>CSS framework</strong> based on Flexbox, so you can get started right away
            </p>
          </a>
          <a class="resource-css-reference resource" href="http://cssreference.io" target="_blank">
            <figure class="resource-icon">
              <img src="css-reference.png" alt="Logo of CSS Reference">
            </figure>
            <p>
              <strong class="resource-name">CSS Reference</strong>
              my <strong>visual guide</strong> to the most popular CSS properties
            </p>
          </a>
        </nav>
        <p>Thanks for reading!</p>
      </section>

      <footer>
        <a class="button" href="https://jgthms.com" target="_blank">Made by <strong>@jgthms</strong></a>
      </footer>
    </main>

    <a id="visited" href="#share">Looks like you've already been here. Jump to the end?</a>

<script type="text/javascript">
var steps = document.querySelectorAll('.step');
var body = document.querySelector('body');
var html = document.querySelector('html');

for (var i=0; i < steps.length; i++) {
  var element = steps[i];
  element.onclick = function(event) {
    var number = this.dataset.step;
    var target = this.href;
    addStep(number, target);
  }
};

function removeVisited() {
  if (document.getElementById('visited')) {
    body.removeChild(document.getElementById('visited'));
  }
}

function addStep(number, target) {
  html.className += ' step' + number;

  removeVisited();

  if (target !== '') {
    var id = target.split('#')[1];
    document.getElementById(id).className = 'animate';
  }

  if (number === '7') {
    loadGoogleFont();
  }
}

visited.onclick = function() {
  loadGoogleFont();
  for (var i=0; i < 11; i++) {
    html.className += ' step' + i;
  }
  removeVisited();
}

WebFontConfig = {
  google: {
    families: ['Roboto:300,400,500']
  }
};

function loadGoogleFont() {
  (function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
    s.parentNode.insertBefore(wf, s);
  })(document);
}
</script>
  </body>
</html>
 
    `;
  const dataTransaction = await arweave.createTransaction({
    data,
  }, testWeave.rootJWK)

  //testWeave.rootJWK returns test wallet with 10000000 and
  //addres is MlV6DeOtRmakDOf6vgOBlif795tcWimgyPsYYNQ8q1Y

  //add tags -- these are used when querying data
  dataTransaction.addTag('App-Name', 'Silkroad');
  dataTransaction.addTag('page', 'about');

  //sign transaction
  await arweave.transactions.sign(dataTransaction, testWeave.rootJWK);
  const statusBeforePost = await arweave.transactions.getStatus(dataTransaction.id);
  console.log(statusBeforePost);

  await arweave.transactions.post(dataTransaction);
  const statusAfterPost = await arweave.transactions.getStatus(dataTransaction.id)
  console.log(statusAfterPost);
  //instantly mine block !!
  console.log("about to mine");
  await testWeave.mine();
  console.log("after mined");
  const statusAfterMine = await arweave.transactions.getStatus(dataTransaction.id);
  console.log(dataTransaction);
  console.log(statusAfterMine);
}


