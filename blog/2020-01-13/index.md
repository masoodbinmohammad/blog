---
date: '2020-01-13'
title: 'Why is it Important to Protect Your API from Attacks and How?'
category: 'InfoSec'
tags: ['AWS']
banner: '/assets/bg/2.jpg'
---

It is always a great feeling for a developer when the particular feature or an API implementation which he had been working on from so long and eventually that went live and its in production environment.

But have you ever wondered why you keep getting a random requests from a random IPs once your API or an application reaches to production ? Have you been in these situations before ? If yes I hope this article might help you solving those.

There are many different solutions out there online to mitigate these kind of API attacks. However in this post i will be sharing you my approach and how did it solve the problem.

So we were working on an API for one of our products lately and we have had a success in launching it to production environment. The important thing to notice here is this the API was hosted in AWS EBS volume. For more info you can find the aws documentation <a href="https://docs.aws.amazon.com/elastic-beanstalk/index.html">here.</a>

Now here is thing soon after it went live, after the couple of days we started to recieve huge volume of requests which indeed was not at all valid ones. This was terrifying because of the fact that these requests use to hit our API resulting to load on the server reaching to its threshold values and it was beyond our comprehension.

On doing extensive research , we eventually came to know that these are the situations where in attackers find some of the subdomains using this method `Subdomain Enumeraion`, collect all the information and start the `Directory Bruteforcing`, `DDoS` attacks and many more.

As i said earlier, there are many different solution approaches to this problem and we have finally agreed to go with `AWS WAF (Web Application Firewall)`. In my openiion this is one of the coolest and yet more powerful services that AWS has provided and i am no expert but i would definitely recommend you to have look into this service before you go with other option. I repeat go with this approach if you have hosted your application or your API in AWS.

There are vast varieties of option that this WAF provides and you can give it a shot and follow this <a href="https://docs.aws.amazon.com/waf/">official documentation </a>

If you are interested to know more about how this is actually implemented. Considrrt visiting my this blog <a href="/blog/protecting-your-site-using-aws-waf-web-application-firewall"> here</a> where i have given steps to configure this service.

> I hope this article atleast provided some insight on how and why we have to protect API from these kind of attack scenarios and if it did help , please help others by spreading the word.😊 For any suggestions or feeedbacks 👉 <a href="/contact"> Contact</a>
