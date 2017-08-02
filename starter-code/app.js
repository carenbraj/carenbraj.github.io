var farm = document.querySelector('.farm');
var FarmAnimals = [];

var FarmAnimal = function(diet, species, animalSound, image) {
  this.diet = diet
  this.talk = function() {
    alert(this.diet + ' says: ' + animalSound + '!')
  }
  this.image = image
  this.type = function(){
    console.log('I am of type - ' + species);
  }
  this.action = function(){
    alert('I eat all day');
  }
};
//diet
//image
//function that alerts the user of the sound the animal makes --> use jquery to bind click to DOM


//sublass
//call the FarmAnimal constructor
// any other subclass properties (limb, diet, fur)

function pig(diet) {
  FarmAnimal.call(this, 'diet', 'pig', 'oink', 'https://www.google.com/search?q=farm+pig&rlz=1C5CHFA_enUS750US750&tbm=isch&imgil=fvYtmNj3RxDNiM%253A%253BFV3LNMwVv0WsOM%253Bhttps%25253A%25252F%25252Fwww.farmsanctuary.org%25252Flearn%25252Fthe-someone-project%25252Fpigs%25252F&source=iu&pf=m&fir=fvYtmNj3RxDNiM%253A%252CFV3LNMwVv0WsOM%252C_&usg=__L0w5kllUDNCJz821bHgdRlw2yU8%3D&biw=1440&bih=803&ved=0ahUKEwiKytPxjbXVAhUIqlQKHXaBDgQQyjcIMw&ei=fvd_WYqTGojU0gL2grog#imgrc=OEfsRPgGPNoR3M:')
  this.action = function(){
  }
};

function cow(diet) {
  FarmAnimal.call(this, 'diet', 'cow', 'moo', 'https://www.google.com/search?q=farm+cow&rlz=1C5CHFA_enUS750US750&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjcgbyMjrXVAhXJwFQKHblVCp8Q_AUICigB&biw=1440&bih=803#imgrc=FS8bHro0gCs1LM:')
  this.action = function(){
  }
};

Pig.prototype = Object.create(FarmAnimal.prototype);
Cow.prototype = Object.create(FarmAnimal.prototype);


var farmPig = new Pig('Babe');
var milkCow = new Cow('Cassie');


FarmAnimals.push(farmPig);
FarmAnimals.push(milkCow);




FarmAnimals.forEach(function(animal) {
  var animalElement = document.createElement('div')
  animalElement.style.backgroundImage = 'url(' + animal.image + ')'
  var bottom = Math.floor(Math.random() * 50);
  animalElement.style.bottom = bottom + '%';
  var left = Math.floor(Math.random() * 90)
  animalElement.style.left = left + '%';
  animalElement.classList.add('animal')
  animalElement.onclick = function() {
    animal.talk();
    animal.type();
    animal.action();
  }
  farm.appendChild(animalElement)
})
