var quote= [
    {'quote':"“Be yourself; everyone else is already taken.”",
'author':"Oscar Wilde"},
    {'quote':"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
'author':"Albert Einstein"},
    {'quote':"“A room without books is like a body without a soul.”",
'author':"Marcus Tullius"},
]


function addQuote(){
    var number= Math.floor(Math.random()*quote.length)
    console.log(number);


document.getElementById("quote").innerHTML= quote[number].quote;
document.getElementById("author").innerHTML= quote[number].author;
}