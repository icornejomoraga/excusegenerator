window.onload = () => {

    //let randomnumber = Math.random () * 10;
    document.querySelector("#excuse").innerHTML = generateexcuse();
    console.log('hello');
           
};

let generateexcuse = () => {

  
  let pronoun = ['An','The'];
  let someone = ['alien', 'bear', 'ninja'];
  let action = ['stole','destroyed'];
  let something = ['my homework', 'my wallet', 'my bike'];
  let where = ['outside my house', 'on the street', 'at the supermarket']; 
  
  

  let proindex = math.floor(Math.random() * pronoun.length);
  let somindex = math.floor(Math.random() * someone.length);
  let actionindex = math.floor(Math.random() * action.length);
  let somethingindex = math.floor(Math.random() * something.length);
  let whereindex = math.floor(Math.random() * where.length);




  return pronoun[proindex] + ' ' + someone[somindex] + ' ' + action[actionindex] + ' ' + something[somethingindex] + ' ' + where[whereindex];


}
  
