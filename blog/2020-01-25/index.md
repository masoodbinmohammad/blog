---
date: '2020-01-25'
title: 'Protecting your site using AWS WAF (Web Application Firewall) '
category: 'DevOps'
tags: ['AWS']
banner: '/assets/bg/5.jpg'
---

In my previous article i have discussed about why there is a need to protect our application from certain types of attacks. If you have not checked it yet, i would encourage you reading that article to and get more insights on why and when should we think of using WAF. You can find that link <a href="/blog/why-is-it-important-to-protect-your-api-from-attacks-and-how">here.</a>

In this section of the article i am going to directly dive into how we can actually configure WAF in AWS.

The service that we are going to use in AWS is `AWS Firewall Manager`. Once you are logged into the aws console, head to services dropdown and type in the `AWS Firewall Manager` and upon click, that should redirect you to AWS WAF page which looks like this.

<img src="/assets/blog/aws-waf/1.png" alt="landing Page">

Recently aws has introduced their new user-interface for WAF hence we will go with the same. If you want to check out the older one you can navigate the through the option provided on the side bar.

To get started with you need to create a WebACLs for your site. Now if you are wondering what is WebACLs here is the definition from the aws documentation.

```
A web access control list (web ACL) gives you fine-grained control over the web requests that your Amazon CloudFront distribution, Amazon API Gateway API, or Application Load Balancer responds to.

You can use criteria like the following to allow or block requests:

- IP address origin of the request.

- Country of origin of the request.

- String match or regular expression (regex) match in a part of the request.

- Size of a particular part of the request.

- Detection of malicious SQL code or scripting.
```

To be more precise WebACLs are the bunch of configurations that we require to achieve our ultimate task.In order to create this, click on WebACLs that is available in the left side nav bar and it should take you to the Create WebACL page. Here it is how its looks like

<img src="/assets/blog/aws-waf/2.png" alt="Create Web ACLs">

There are 5 steps needed to configure and we will go through each of them.

### Step 1 :: Describe web ACL and associate it to AWS resources

This is one of the prominent steps out of all and you need to fill in the details according to your need.

- Name :: Name that you wish to provide, this can be anything but i would recommend to go with common naming pattern so that it will be easier to identify in future.
- Description :: Optional. Define the purpose so that others easily would understand it.
- CloudWatch metric name :: By default it will be same as that of name you have provided.
- Resource type :: If you having an web-app that is hosted on cloudfront , then go with cloudfront distribution or If you are dealing with an API that is created on API-Gateway or using ALB (Application Load Balancers) go with Regional Resources.
- Region :: If its a cloudfront distribution then it will only allowed to global region else you can choose your preferred region to hosted on.

Here is the sample view.

<img src="/assets/blog/aws-waf/3.png" alt="Create Web ACLs">

- Associated AWS resources :: Now this is important . This is where you have to provide your cloud-front distribution or any regional resources that you are targetting on. You can achieve it by clicking on Add resources button and it lists all the available services that you have hosted. you can add these resources later as well.

<img src="/assets/blog/aws-waf/4.png" alt="Create Web ACLs">

### Step 2 :: Add rules and rule groups

In this step, you actually set the list of rules and based on which your application allows or blocks the traffic. Basically aws does give some of their managed list of rules by default. If your application expects any of those then you could directly go with those option else you have to manually create list of rules using the rule type of options. you can find list of managed rules from their documentation <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups.html">here.</a>

For better understanding as a demo i have created a sample rule which sees if a API has some header called X-API-KEY which is having a length of 60 . If it matches the criteria then it allows the traffic else it is going to block the traffic to your application.

Here is a screenshot of how it looks like.

<img src="/assets/blog/aws-waf/5.png" alt="Add rules">

You can find more about custom rules over <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-user-created-rule-groups.html">here.</a>

Once you are done with this step you task is almost over. Lets go to other steps now

### Step 3 :: Set rule priority

This is place where you set the priority of your rules. What this means is that if you have more than one rules that you have defined , then you need specify which rule will take the precedence over other.

### Step 4 :: Configure metrics

By default WAF uses cloudwatch to monitor the logs . But if you are not satisfied with those you can configure others monitoring and metrics over here.

### Step 5 :: Review and create web ACL

Thats it.!!! Review what you have configured and make sure that all are good to go.

> I hope you found this article useful. If it did please help others spreading the word.😊
> For any suggestions or feeedbacks 👉 <a href="/contact"> Contact</a>
