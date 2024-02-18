let seatCount = 0;

const buttons = document.getElementsByClassName('economy');

for(const btn of buttons){
    btn.addEventListener('click', function(e){
        e.target.style.background = '#1DD100';  
        
        const selectedSeats = document.getElementById("selected-seats");
        const totalSeats = document.getElementById("total-seats");
        const bookedSeats = parseInt(selectedSeats.innerText)+1;
        const remainingSeats = parseInt(totalSeats.innerText)-1;
        setTextElementValueById('selected-seats', bookedSeats);
        setTextElementValueById('total-seats', remainingSeats);
        
    })
    
}




function setTextElementValueById(id, value){
    const element = document.getElementById(id);
    element.innerText = value;

}



