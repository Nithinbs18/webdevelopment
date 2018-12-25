var movies = [
        {
        name: "kgf",
        rate: 4.5,
        watched: false
         },
         {
            name: "zero",
            rate: 3.5,
            watched: true
             }
]

movies.forEach(function(movie)
    {
        var r = "You have ";
        if(movie.watched == true)
        {
            r+="watched ";
        }
        else{ r+="not watched ";}
        r+=movie.name + " of rating :" + movie.rate;
        alert(r);
    }
)