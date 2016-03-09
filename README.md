# Name: Parth Shah
## ID: 1001126223

> What server framework did you choose and why?

I used Node.js because it is easy to use and a lot of material on internet is easily available. Additionally Node js express adds dead simple routing and support for Connect middleware, allowing many extensions and useful features.

> What client framework did you choose and why?

I used JQuery framework because jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. JQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

> What aspect of the implementation did you find easy, if any, and why?

Using Jquery was easy. Because I had past experience using it.

> What aspect of the implementation did you find hard, if any, and why?

Creating a map was bit challanging. Because this was the first time i had to ancounter this proble.

> What components OTHER than your client and server framework did you install,
if any, and if so, what is their purpose for your solution?

I used googles Map and chart APIs. For that required frameworks were installed.

> What Ubuntu commands are required to deploy and run your server?

```sh
$ heroku login
$ git clone https://github.com/shahparth616/pbs6223_cse5335-project-1.git
$ cd pbs6223_cse5335-project-1
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
$ heroku open
```