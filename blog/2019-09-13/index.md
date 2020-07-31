---
date: '2019-09-13'
title: 'Writing Clean Code Using Null Conditional Operator and Null Coalescing Operator'
category: 'Coding'
tags: ['C#', '.NET']
banner: '/assets/bg/1.jpg'
---

### Introduction

In this article i am going share one of the useful tips for writing a clean code which i have learnt in C#.

### Example

For a demo purpose we wil take employees in an organisation as reference and lets create the Employees object which has 3 properties namely EmployeeID, Name and Salary.

```
class Employees
{
    public int? EmployeeID { get; set; }
    public string Name { get; set; }
    public long? Salary { get; set; }

}
```

Here for a use case point of view we are going to fetch employee details from database and display or render these details in front-end.

But for demo purpose i am going to initialise our employees object with some static employee details.

```
List<Employees> employee = new List<Employees>()
{
    new Employees() { EmployeeID = 1, Name = "John", Salary = 10000 },
    new Employees() { EmployeeID = 2, Name = "Steve", Salary = 20000 },
    new Employees() { EmployeeID = 3, Name = "Robert", Salary = 30000 }
};
```

As you can see i have created list of employees object with three employee details.

Okay , now we have the data ready. We will loop through each employee and display the details in the console.

```
foreach (var item in employees)
{
    if (item != null)
    {

        if (item.EmployeeID != null)
        {
            Console.WriteLine(item.EmployeeID);
        }
        else
        {
            Console.WriteLine("No ID Exists");
        }

        if (string.IsNullOrEmpty(item.Name))
        {
            Console.WriteLine(item.Name);
        }
        else
        {
            Console.WriteLine("No Name Exists");
        }

        if (item.Salary != null)
        {
            Console.WriteLine(item.Salary);
        }
        else
        {
            Console.WriteLine("No Salary Exists");
        }
    }

}
```

here i have used traditional way of implementation. As you can easily guess it what i basically did was just looped through each employee and checked for any null reference for employee object itself and for its properties.

However if this object has many properties and if you need to have these type of checks for every property then this code becomes more lengthy. Hence this is when the Null Conditional Operator and Null Coalescing Operator comes into picture. Let me simplify the same logic which was written above using these operaors

```
foreach (var item in employees)
{
    Console.WriteLine(item?.Name ?? "No Name Exists");

    Console.WriteLine(item?.EmployeeID.ToString() ?? "No ID Exists");

    Console.WriteLine(item?.Salary.ToString() ?? "No Salary Exists");
}
```

Isn't this so clear, concise and yet easy to implment. Now Let me explain what are these operators and how does it work.

The `?` operator is the null conditional operator and this operator lets you access members and elements only when the receiver is not-null, returning null result otherwise. In our case if item object is null it returns null if not it will print the items properties.

The `??` operator is the null coalescing opertor and this was designed to be used easy with null-conditional operators. It provides default value when the null conditional operator returns null.
Hence in our if item is null then right side of the code going to be printed.

Thats it . This is how you can easily use these two operators in combination to make your code look simple and clean.

> I hope this article found useful for you. If it did please help others spreading the word.😊
