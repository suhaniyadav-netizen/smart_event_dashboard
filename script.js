const form=document.querySelector('#form')
const eventCards=document.querySelector('.cards')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card=document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
        <h2>${title}</h2>
        <p>Date: ${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class=deleteCard> X </div>    
        `
    card.querySelector('.deleteCard').addEventListener('click',function(){
        card.remove()    
    })  
    eventCards.appendChild(card)
})

document.addEventListener('keydown',(event)=>{
    const k = document.querySelector('.key')
    if(k){
        k.innerText = "You pressed: " + event.key
    }
})

