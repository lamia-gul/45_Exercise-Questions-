//40. Album:
//Write a function called make_album() that builds an Object describing a music album. The
//function should take in an artist name and an album title, and it should return a Object containing
//these two pieces of information. Use the function to make three dictionaries representing different
//albums. Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//Make at least one new function call that includes the number of tracks on an album.
function make_album1(artist_name, album_title) {
    return { artist_name: artist_name, album_title: album_title };
}
var album1 = make_album1("Ali", "Breaking Point");
console.log(album1);
var album2 = make_album1("Daniyal", "In my hand");
console.log(album2);
var album3 = make_album1("Hassan", "Lost and found ");
console.log(album3);
function make_album2(artist_name, album_title, number_of_tracks) {
    return { artist_name: artist_name, album_title: album_title, number_of_tracks: number_of_tracks };
}
var album11 = make_album2("Ali", "Breaking Point", 111);
console.log(album11);
var album22 = make_album2("Daniyal", "In my hand");
console.log(album22);
var album33 = make_album2("Hassan", "Lost and found ", 500);
console.log(album33);
