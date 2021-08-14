window.onload = function() {

    //let randomnumber = Math.random () * 10;
    document.querySelector("#excuse").innerHTML = generateexcuse();
    console.log('hello'+randomnumber);
           
}

let generateexcuse = () => {

  
  let pronoun = ['An','The'];
  let someone = ['alien', 'bear', 'ninja'];
  let action = ['stole','destroyed',];
  let something = ['my homework', 'my wallet', 'my bike'];
  let where = ['outside my house', 'on the street', 'at the supermarket']; 
  
  let proindex = math.floor(Math.random() * pronoun.length);
  let somindex = 0;
  let actionindex = 0;  
  let somethingindex = 0;  
  let whereindex = 0;

  //let proindex = math.floor(math.randomnumber() * pronoun.length);
  //let somindex = math.floor(math.randomnumber() * someone.length);
  //let actionindex = math.floor(math.randomnumber() * action.length);
  //let somethingindex = math.floor(math.randomnumber() * something.length);
  //let whereindex = math.floor(math.randomnumber() * where.length);




  return pronoun[proindex] + ' ' + someone[somindex] + ' ' + action[actionindex] + ' ' + something[somethingindex] + ' ' + where[whereindex];


}
  
