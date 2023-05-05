document.addEventListener('DOMContentLoaded',()=>{  
    // the document.addEventListener('DOMContentLoaded',()=>{ }); code is a commonly used pattern in JavaScript for ensuring that your code only runs after the DOM has finished loading, which can help prevent errors and ensure that your code runs as intended.
    const cardArray=[
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          },
          {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          }
    ]
    cardArray.sort(()=>0.5-Math.random())//the sort() method is able to shuffle the array elements randomly by generating a different sequence of random numbers each time the code is executed.

    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    let cardsChosen=[]
    let cardsChosenId=[]
    let cardsWon=[]

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            const card=document.createElement('img')// This line creates a new HTML img element and assigns it to a constant variable called card.

            card.setAttribute('src','images/blank.png')//This line sets the src attribute of the img element to a path that points to an image file called blank.png. This is likely an image that will be displayed on the game board until the player flips the card over to reveal its contents.

            card.setAttribute('data-id',i)//This line sets a custom attribute called data-id on the img element and assigns it a value equal to the current value of the loop index variable i. This is a way of associating each card element with a unique identifier that can be used later to identify it when it is clicked on.

            card.addEventListener('click',flipCard)

            grid.appendChild(card)//This line appends the img element to an existing HTML element called grid. This is presumably the element that will contain the game board and will display the cards as they are generated.
        }
    }

    function checkForMatch(){
        const cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optiontwoId=cardsChosenId[1]

        if(optionOneId===optiontwoId){
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optiontwoId].setAttribute('src','images/blank.png')
            alert('You have clicked the same image!')
        }
        else if(cardsChosen[0]===cardsChosen[1]){//This line checks whether the player has selected two cards with the same name by comparing the values of cardsChosen[0] and cardsChosen[1]. If they are equal, it means the player has found a match. The function displays an alert telling the player that they found a match and sets the src attribute of both cards to 'images/blank.png'. It also removes the flipCard event listener from both cards, which prevents the player from selecting them again. Finally, it adds the matched cards to the cardsWon array.
            alert('You found a match')
            // cards[optionOneId].setAttribute('src','images/blank.png')
            // cards[optiontwoId].setAttribute('src','images/blank.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optiontwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        } 
        else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optiontwoId].setAttribute('src','images/blank.png')
            alert('Sorry,try again')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent='Congratulations! You found them all!'
        }

    }

    function flipCard(){
        let cardId=this.getAttribute('data-id')//This line retrieves the value of the data-id attribute from the clicked card element using the getAttribute method and assigns it to a variable called cardId. This variable is used to index into the cardArray array to retrieve information about the clicked card.
        cardsChosen.push(cardArray[cardId].name)//This array is used to keep track of the cards that the player has selected during a round of the game.
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)//This line sets the src attribute of the clicked card element to the path of the image associated with the selected card. This reveals the contents of the card to the player.
        if(cardsChosen.length==2){
            setTimeout(checkForMatch,500)
        }
    }
    createBoard()
})