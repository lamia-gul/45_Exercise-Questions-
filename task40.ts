
function make_album1(artist_name:string, album_title:string)
{
    return {artist_name, album_title};
}

let album1 = make_album1("Ali" , "Breaking Point")
console.log(album1);
let album2 = make_album1("Daniyal" , "In my hand")
console.log(album2);
let album3 = make_album1("Hassan" , "Lost and found ")
console.log(album3);

function make_album2(artist_name:string, album_title:string, number_of_tracks?:number)
{
    return {artist_name, album_title, number_of_tracks};
}

let album11 = make_album2("Ali" , "Breaking Point" , 111)
console.log(album11);
let album22 = make_album2("Daniyal" , "In my hand")
console.log(album22);
let album33 = make_album2("Hassan" , "Lost and found " , 500)
console.log(album33);

