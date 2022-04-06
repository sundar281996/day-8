// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

 class Movie {
constructor (movie, studio, rating) {
    this.movie = movie;
    this.studio = studio;
    this.rating = rating;
}
}
var Movie1 = new Movie ('DARBAR', 'LYCA', '4 OUT OF 5');
var Movie2 = new Movie ('DOCTOR', 'S.K', '3 OUT OF 5');
var Movie3 = new Movie ('RRR', 'DVV', '4.5 OUT OF 5');
var Movie4 = new Movie ('PUSHPA', 'M.M', '3 OUT OF 5');
let Movies = [Movie1, Movie2, Movie3, Movie4];
console.log(Movies); 




// write a class to calculate uber price.
 class UberPrice {
    constructor(Basefare, Costperminute, Timeinride, Costperkm, Ridingdis, BookingFee) {
      this.Basefare = Basefare;
      this.Costperminute = Costperminute;
      this.Timeinride = Timeinride;
      this.Costperkm = Costperkm;
      this.Ridingdis = Ridingdis;
      this.BookingFee = BookingFee;
    }
    getfare() {
        console.log(`Your fare is : ${this.Basefare + (this.Costperminute * this.Timeinride) + (this.Costperkm * this.Ridingdis) + this.BookingFee }`);
    }
}
let Firstride = new UberPrice (35,5,8,21,14,5);
Firstride.getfare(); 





// Write a “person” class to hold all the details.
  class Person {
    constructor (Name, Age, Place, MobileNo){
    this.Name = Name;
    this.Age = Age;
    this.Place = Place;
    this.MobileNo = MobileNo;
}
}
  let Person1 = new Person ('sundar', '24', 'rajapalayam', '9076543211');
  let Person2 = new Person ('GOBIKRISHNA', '24', 'chennai', '90987654334');
let Alldetails = [Person1, Person2];
     console.log(Alldetails);  

     




// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md     

  class Circle {
constructor (radius, colour){
this.radius = radius;
this.colour = colour;
}
}
let Result = new Circle ('2', 'Red');
console.log(Result); 