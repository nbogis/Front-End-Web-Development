Dear reviewer, 
I am aiming for this project to exceed so please return it back to me when it fails the exceeding specification. However, in the first part I got 96 score in mobile and desktop. I already exceeded the second project from my previour submission. Please follow my instructions below to be able to get the same result. 

I minified the pizza files. However, the html pages don't look different from the original one as if there is no styling at all. I don't think that is what I suppose to get. Please let me know if there is a way to fix this problem. I appreciate it all your help.     

In both parts, I used Grunt to minify my files. You can see the ones with .min are minified by Grunt. 

####Part 1: Optimize PageSpeed Insights score for index.html

Steps to finish Part 1: 

1. Resized the images and add srcset to the html file. 

2. Made analytics js file async 

3. Added media query to print.css

4. Removed spaces from script in the html file

5. Removed fonts. It takes so long to download fonts

6. Used grunt to minify css, js, html, and images

After getting all your files ready, you need to test your files. To do so: 

1. You need to create a server-side site. To do so: 
go to your working directory and type [python -m SimpleHTTPServer], then open a web page and type [0.0.0.0:8000/your-html-file].

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
  in your browser type 0.0.0.0:8080/index.min.html


1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

2. In a separate terminal, run ngrok

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```
* You need to make sure that you are using the same port as the one you used in step 1 

3. Copy the public URL ngrok gives you (Forwarding url [example. http://ba64698c.ngrok.io]) 

4. Open PageSpeed Insight url and paste your url for analyzing and add the html file [example: http://5b7ccaa1.ngrok.io/index.min.html]

* You need to make sure that you opne the minified html to get a better score. 

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).


Steps to finish Part 1: 

1. Read through and understand main.js

2. Followed Cam's instructions to speedup resizing the pizzas

3. Resized the images and added srcset to them

4. Changed from querySelectorAll and query Selector to getElementsByClass Name 
and getElementById

5. Moved variables decleration outside of loops

6. Worked on moving pizzas while scrolling: 
  a. Changed the number of generated pizza to a value based on the viewport height
	b. replaced (i%5) with incrementing number from 0 to 4
	c. created different layers for each pizza so repainitng occurs in smaller area and not the entire page. Used 3d translation to move the pizza layers
	d. repalce basicLEft with translation

7. Used grunt to minify css, js, html, and images files  

To test the project: 

1. Create a local host by opening your terminal and cd to the directory of the html file. 
2. 


==================================================================== 

I don't remember where I found these notes but they are useful: 

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
