const quotes = [
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou",
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela",
    },
    {
        quote : "This too shall pass.",
        author : "Et hoc transibit",
    },
    {
        quote : "Only I can change me life, no one can do it for me.",
        author : "Carol Burnett",
    },
    {
        quote : "Despite the forecast, live like it’s spring.",
        author : "Lilly Pulitzer",
    },
    {
        quote : "Nothing in more despicable than respect based on fear.",
        author : "Albert camus"
    },
    {
        quote : "Turn your wounds into wisdom.",
        author : "Oprah Gail Winfrey",
    },
    {
        quote : "Great minds have purposes, others have wishes.",
        author: "Washington Irving",
    },
    {
        quote : "Believe in yourself.",
        author : "Anonymous",
    },
    {
        quote : "Change the world by being yourself.",
        author : "Amy Poehler",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;