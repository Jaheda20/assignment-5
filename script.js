let seatCount = 0;
let totalPrice = 0;

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

        const seatName = btn.innerText;
        const seatClass = 'Economy';
        const ticketPrice = document.getElementById("ticket-price");
        const price = parseInt(ticketPrice.innerText);
        // console.log(seatName, seatClass, price)
        const table = document.getElementById('booking-info');
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerText=seatName;
        cell2.innerText=seatClass;
        cell3.innerText=price;

        e.target.setAttribute("disabled", true);

        if(bookedSeats > 0){
            seatCount ++
            // console.log('no of seatCount is:', seatCount);
        }
        if(seatCount >= 4 ){
            alert('You have reached max selection');
            disableAllButtons();
            return;
        }

        // total price Calculation
        totalPrice += price;
        document.getElementById('total-price-calc').innerText=totalPrice;
        
    })
    
}


const applyCoupon = document.getElementById('apply-coupon');
applyCoupon.addEventListener('click', function(){
    // console.log('clicked')
    const couponCode1= document.getElementById('coupon1').innerText;
    // console.log(couponCode1);
    const couponCode2 = document.getElementById('coupon2').innerText;
    // console.log(couponCode2);
    const couponCode = document.getElementById('coupon-code').value;
    const couponApplyField=document.getElementById('coupon-apply-field');
    if(couponCode ==="NEW15"){
        const discountAmount = totalPrice * 0.15;
        const grandTotal = totalPrice - discountAmount;
        setTextElementValueById('grand-total-calc', grandTotal);
        document.getElementById('coupon-code').value = " ";   
    }
    else if (couponCode === "Couple 20"){
        const discountAmount = totalPrice * 0.20;
        const grandTotal = totalPrice - discountAmount;
        setTextElementValueById('grand-total-calc', grandTotal);
        document.getElementById('coupon-code').value = " ";
    }
    else{
        alert("Invalid Coupon Code");
        setTextElementValueById('grand-total-calc', totalPrice);
        document.getElementById('coupon-code').value = " ";
        
    }
    
    
})





function setTextElementValueById(id, value){
    const element = document.getElementById(id);
    element.innerText = value;

}

function disableAllButtons(){
    for(const btn of buttons){
        btn.setAttribute("disabled", true);
    }
}



