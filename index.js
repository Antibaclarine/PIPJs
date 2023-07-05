class OralStories{
    constructor(title,storyLength,moralLesson){
    this.title=title
    this.storyLength=storyLength
    this.morallesson=moralLesson
    }

}
let story1=new OralStories("The Hare and the hyena","500",["being clever","making wise decions"])
let story2=new OralStories("The Hare and the hyena","500" ,["being clever","making wise decions"])
console.log(story1);
console.log(story2);


class StoryTeller extends OralStories{
    constructor(name,title){
    super(title)
    this.name=name
    }
    tellStories(){
        console.log(`The story ${title} is has ${this.length}`);
    }
}
let Storyeller=new StoryTeller("Mercy","The flying bird")
class  Translator extends OralStories{
    constructor(translatorName,title,language){
        super(title)
        this.translatorName=translatorName
        this.language=language
    }
    get_translation(){
        console.log(`The story ${this.title} is narrated in ${this.language} and is translated by ${this.translatorName}`)
    }
}
let translator=new Translator("Mary","The Birds of the mountain","Kiswahili")
console.log(translator);


class Recipe{
    constructor(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,foodName){
        this.uniqueIngrdients=uniqueIngrdients
        this.preparationTime=preparationTime
        this.cookingMethod=cookingMethod
        this.nutritionalInfaormation=nutritionalInformation
        this.foodName=foodName
    }
    recipeRequirements(){
        return `some foods use  ${this.uniqueIngrdients} which is prepared ${this.preparationTime} using ${this.cookingMethod} and has ${this.nutritionalInfaormation}`
    }
}
let recipes= new Recipe("simple ingredients","1hr 30min","easy","good health","Africa food")
console.log(recipes.recipeRequirements());
console.log(recipes);

class MoroccanRecipe extends Recipe{
    constructor(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,lotOfSpice,foodName){
        super(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,foodName)
        this.lotOfSpice=lotOfSpice
    }
    eatMorrocan(){
 return `Every ${this.foodName} has ${this.lotOfSpice}`
    }     
}
let morrocan =new MoroccanRecipe ("olive oil","1hr","frying","strong body","seafood","enough spice")
console.log(morrocan.eatMorrocan());

class EthiopianRecipe extends Recipe{
    constructor(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,foodName,lotOfPepper){
        super(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,foodName)  
        this.lotOfPepper=lotOfPepper
    }
    eatEthiopian(){
        return `Every ${this.foodName} has ${this.lotOfPepper}`
    }
   
}
let eathiopian=new EthiopianRecipe ("yam floor","1hr","boiling","strong body","injera","enough spice")
console.log(eathiopian.eatEthiopian());

class NigerianRecipe extends Recipe{
    constructor(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,foodName,garri){
        super(uniqueIngrdients,preparationTime,cookingMethod,nutritionalInformation,foodName)
        this.garri=garri
    }
    eatNigerian(){
        return `Every ${this.foodName} has ${this.garri}`
    }
}
let nigerian =new NigerianRecipe ("salt","2hr","deep frying","maintainance","jollof","enough turkey")
console.log(nigerian.eatNigerian());

class Species{
    constructor(name,diet,typicalLifespan,migrationPatterns){
        this.name=name
        this.diet=diet
        this.typicalLifespan=typicalLifespan
        this.migrationPatterns=migrationPatterns
        
    }
    animalCharacter(){
        return`${this.name} eats ${this.diet} it lives for ${this.typicalLifespan} and migrates during ${this.migrationPatterns}`
    }

}
let species=new Species('Lion','meat','300years','dry season')
console.log(species);
console.log(species.animalCharacter());

class Predator extends Species{
    constructor(name,diet,typicalLifespan,migrationPatterns,prey){
    super(name,diet,typicalLifespan,migrationPatterns)
    this.prey=prey
    } 
    predatorCharacter(){
        return `${this.name} eats ${this.diet} and its prey is ${this.prey}`
    }  
}

let predator=new Predator('Cheetah','meat','dry season','gazelle')
console.log(predator);
console.log(predator.predatorCharacter());

class Prey extends Species{
    constructor(name,diet,typicalLifespan,migrationPatterns,predator){
        super(name,diet,typicalLifespan,migrationPatterns)
        this.predator=predator
    }
    preyCharacter(){
        return `${this.name} has a lifeSpan of ${this.typicalLifespan} and it's predator is ${this.predator}`
    }
}
let prey=new Prey('gazelle','300 years','Lion')
console.log(prey);
prey.preyCharacter();


class Artist {
    constructor(name, region, musicStyle, instrument) {
        this.name = name;
        this.region = region;
        this.musicStyle = musicStyle;
        this.instrument = instrument;
    }
    
    differentMusic() {
        if (this.region === "East Africa") {
            return "Taarab";
        } else if (this.region === "West Africa") {
            return "Afrobeat";
        } else if (this.region === "South Africa") {
            return "Amapiano";
        } else if (this.region === "North Africa") {
            return "Fuji";
        } else {
            return "Music style not found";
        }
    }
}

let artist = new Artist("Hadija Kopa", "North Africa", "slow", "piano");
console.log(artist.differentMusic());

class Performance  {
    constructor(artist, schedule, lineup) {
        this.artist = artist;
        this.schedule = schedule;
        this.lineup = lineup;
    }
    
    performanceAlignment() {
        return `${this.schedule} ${this.lineup} ${this.artist}`;
    }
}

let artist2 = new Artist("Davido", "West Africa", "high beats", "piano");
let perfom = new Performance(artist2, "24-05-2023 10.00AM to 12.00AM", 5);
console.log(perfom.performanceAlignment());

class Stage {
    constructor(name, region, musicStyle, instrument, capacity) {
        this.name = name;
        this.region = region;
        this.musicStyle = musicStyle;
        this.instrument = instrument;
        this.capacity = capacity;
    }
    
    stagePerfom() {
        return `${this.name} from ${this.region} ${this.musicStyle} ${this.instrument} ${this.capacity} people capacity`;
    }
}

let stage = new Stage("Sho Madjozi", "South Africa", "quick beats", "piano", 300);
console.log(stage.stagePerfom());

class Product{
    constructor(name,price,quantity){
        this.name=name
        this.price=price
        this.quantity=quantity
    }
    totalValue(){
        return  this.price * this.quantity
        
    }
}
let product=new Product('milk',20,3)
console.log(product.totalValue());

class Student{
    constructor(name,age,grades){
        this.name=name
        this.age=age
        this.grades=grades
    }
    averageGrade(){
        return this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
    }    
    studentInfo(){
        return `${this.name} ${this.age} ${this.grades}`
    }
    passedAverage(){
        return this.averageGrade() >=60
    }
}
let student=new Student("Clarine",16,[23,90,60,50,34])
console.log(student.averageGrade());
console.log(student.studentInfo());
console.log(student.passedAverage());

class FlightBooking {
    constructor() {
      this.flights = [];
    }
  
    searchFlights(destination, date) {
      return this.flights.filter(
        (flight) => flight.destination === destination && flight.date === date
      );
    }
  
    reserveSeat(flightNumber, passengerName) {
      const flight = this.flights.find(
        (flight) => flight.flightNumber === flightNumber
      );
  
      if (flight) {
        if (flight.availableSeats > 0) {
          flight.availableSeats;
          if (!flight.passengers.includes(passengerName)) {
            flight.passengers.push(passengerName);
          }
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  
    getPassengers(flightNumber) {
      const flight = this.flights.find(
        (flight) => flight.flightNumber === flightNumber
      );
  
      if (flight) {
        return flight.passengers;
      } else {
        return [];
      }
    }
  
    generateBookingConfirmation(flightNumber, passengerName) {
      const flight = this.flights.find(
        (flight) => flight.flightNumber === flightNumber
      );
  
      if (flight && flight.passengers.includes(passengerName)) {
        const confirmationNumber = Math.random().toString(36).substr(2, 9);
        return confirmationNumber;
      } else {
        return "";
      }
    }
  
    // Other methods for managing flights and passengers can be added here
  }
  
  // Example usage
  const flightBooking = new FlightBooking();
  
  // Add flights
  flightBooking.flights.push({
    flightNumber: "FL123",
    destination: "New York",
    date: "2022-09-01",
    availableSeats: 100,
    passengers: [],
  });
  
  flightBooking.flights.push({
    flightNumber: "FL456",
    destination: "London",
    date: "2022-09-02",
    availableSeats: 50,
    passengers: [],
  });
  
  // Search for available flights
  const availableFlights = flightBooking.searchFlights("New York", "2022-09-01");
  console.log(availableFlights);
  
  // Reserve seat for a customer
  const reservationSuccess = flightBooking.reserveSeat("FL123", "John Doe");
  console.log(reservationSuccess);
  
  // Get passengers for a flight
  const passengers = flightBooking.getPassengers("FL123");
  console.log(passengers);
  
  // Generate booking confirmation
  const confirmationNumber = flightBooking.generateBookingConfirmation(
    "FL123",
    "John Doe"
  );
  console.log(confirmationNumber);

  
class Book {
    constructor(title, author, copies) {
      this.title = title;
      this.author = author;
      this.copies = copies;
    }
  }
  
  class LibraryCatalog {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, copies) {
      const book = new Book(title, author, copies);
      this.books.push(book);
    }
  
    searchByTitle(title) {
      const foundBooks = this.books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
      return foundBooks;
    }
  
    searchByAuthor(author) {
      const foundBooks = this.books.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
      );
      return foundBooks;
    }
  
    getAvailableCopies(title) {
      const book = this.books.find(
        (book) => book.title.toLowerCase() === title.toLowerCase()
      );
      if (book) {
        return book.copies;
      }
      return 0;
    }
  
    displayBookDetails(title) {
      const book = this.books.find(
        (book) => book.title.toLowerCase() === title.toLowerCase()
      );
      if (book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Available Copies: ${book.copies}`);
      } else {
        console.log(`Book not found.`);
      }
    }
  }
  
  
  const catalog = new LibraryCatalog();
  
  catalog.addBook("The Great Gatsby", "F. Scott Fitzgerald", 5);
  catalog.addBook("To Kill a Mockingbird", "Harper Lee", 3);
  catalog.addBook("1984", "George Orwell", 2);
  
  const searchResults = catalog.searchByAuthor("Fitzgerald");
  console.log(searchResults);
  
  const availableCopies = catalog.getAvailableCopies("The Great Gatsby");
  console.log(availableCopies);
  
  catalog.displayBookDetails("1984");
  

