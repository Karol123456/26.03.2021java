function sprawdzenieImion(){
    const imie = document.getElementById('imie').value
    if(imie.length < 3) {
        alert("Imię nie może być krótszę niż 3 litery.")
    }
  
  }
  
  
  function sprawdzenieNazwiska(){
      const nazwisko = document.getElementById("nazwisko").value
      if(nazwisko.length < 5) {
          alert("Nazwisko nie może być krótszę niż 5 liter.")
      } 
  }


  function getValue() {
    const imieDwa = document.getElementById('imie').value
    const nazwiskoDwa = document.getElementById('nazwisko').value
    const pizzaDwa = document.getElementById('pizza').value
    
    console.log("===========================")
    console.log(imieDwa)
    console.log(nazwiskoDwa)
    console.log(pizzaDwa)
    console.log("===========================")
  }


  function pizza() {
    const pizza = document.getElementById('pizza').value
    console.log(pizza)
}