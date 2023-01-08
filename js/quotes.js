const quotes = [
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "Respect yourself and others will respect you.",
        author: "Confucius",
    },
    {
        quote: "Rather than love, than money, than fame, give me truth.",
        author: "Henry David Thoreau",
    },
    {
        quote: "To be happy, we must not be too concerned with others.",
        author: "Albert Camus",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "Life is just one damned thing after another.",
        author: "Elbert Hubbard",
    },
    {
        quote: "What I look forward to is continued immaturity followed by death.",
        author: "Dave Barry",
    },
    {
        quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
        author: "Michael Flatley",
    },
    {
        quote: "A mind troubled by doubt cannot focus on the course to victory.",
        author: "Arthur Golden",
    },
    {
        quote: "Strive for excellence, not perfection.",
        author: "H. Jackson Brown Jr.",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[ Math.floor( Math.random() * quotes.length ) ];

quote.innerText = `\u00A0${todaysQuote.quote}\u00A0`;
author.innerText = `\u00A0${todaysQuote.author}\u00A0`;
