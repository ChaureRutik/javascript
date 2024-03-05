const moviesData = [
    { title: "Movie A", genre: "Drama", views: 60000, likes: 35000 },
    { title: "Movie B", genre: "Comedy", views: 75000, likes: 48000 },
    { title: "Movie C", genre: "Action", views: 30000, likes: 25000 },
    { title: "Movie D", genre: "Thriller", views: 45000, likes: 30000 },
    { title: "Movie E", genre: "Romance", views: 55000, likes: 42000 }
  ];
  function movieWithMoreThan5000Vievs(movie){
    for(let i=0;i<movie.length;i++){
        if(movie[i].views>50000){
            console.log(movie[i])
        }
    }
  }
  movieWithMoreThan5000Vievs(moviesData)
  function likesMoreThan40000(){
    let totalLikes=0
    for(let i=0;i<moviesData.length;i++){
        if(moviesData[i].views>40000){
            totalLikes+=moviesData[i].likes
        }
    }return totalLikes
  }
  console.log("toal likes of movie with views more than 40000:",likesMoreThan40000())