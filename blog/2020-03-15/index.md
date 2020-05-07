---
date: "2020-03-15"
title: "Hosting Angular App to GitHub Pages for Free"
category: "coding"
tags: ['Angular', 'Coding']
banner: "/assets/bg/3.jpg"
---

Welcome back, In this article i am going to share with you my learning while i was deploying my <a href="http://masoodbinmohammad.github.io">portfolio website</a> to GitHub pages and also i will give you some of the other articles to go through if you find difficulties with my way of deploying the app.

Before you start deploying your app, make sure to create your GitHub repo as public in order to have free hosting service. GitHub does charge if you do want to host your app that is private.

 Assuming that you have already built a beautiful app and waiting for it to kick off and deploy. If not and you need to know how to get started with building angular app please go ahead and refer this angular documentation <a href="https://angular.io/guide/setup-local"> here.</a>

 To get started with, here is an another <a href="https://dzone.com/articles/deploy-angular-app-on-github-pages">article</a> which explains you about one way of deploying your App to GitHub pages. If this works for you i am happy for you and you dont have to come back here. 😉

 But if you still want to know the other alternatives or if the above method did not work out for you , please read ahead. Personally i found the below method pretty cool and easy to manage.

 Now here is the thing, once you have all your app ready, install this package called  `angular-cli-ghpages` by using below command in your Angular CLI.

 ```npm install -g angular-cli-ghpages```

once you have installed this package globally, the very next step is to build your project  with production flag and set the correct base href address.

```ng build --prod --base-href "https://username.github.io/"```

if you are consfused with the base-href address thats okay. you can always change that to whatever works out for you later on.

If you are working on Angular6+ then make sure to set your outputpath from `dist/[PROJECTNAME]` to `dist/`. 

This is because Angular 6 changed angular.json's ```"outputPath": "dist/"``` into ```"outputPath": "dist/[PROJECTNAME]"```, which placed everything in the dist folder in a subfolder, which breaks ngh's functionality.

thats it now run the below command to start deploying your app.

```ngh``` 

and your app will be hosted at ``https://username.github.io/``.

You can optionally add a message to the commit when deploying:

```ngh --message="First deploy"```

You can also specify which branch to deploy:

```ngh --branch=production```

And finally, you can always do a dry run before actually deploying to see the output:

```ngh --dry-run```.

I hope this post helped you. If it did, help othes by spreading the word.


