


// let listOfWords =[['ant','bee','cat'],['road','doll','pear'],['crunch','broad','range'],['bricks','routes','people']] someday.....

let play = true
let listOfWords = ['cat', 'road', 'broad', 'bridge','scrable','creation','randomize']
let playCardContainer = document.getElementById("playCardContainer")
let announce = document.getElementById("announce")
let innerh3 = document.getElementById("wordlevel").innerText
let userAnswer = ""
let shuffledWord = ""
let counter = 0


function justrandomnumber(word) {
  return Math.floor(Math.random() * word.length)
}


function random(word) {
  let result = ''
  let indexnormal = []
  for (let i = 0; i < word.length; i++) {
    indexnormal.push(i)
  }
  randomindex = []
  while (indexnormal.length !== randomindex.length) {
    let randomnumber = justrandomnumber(word)
    let flag = true
    for (let j = 0; j < randomindex.length; j++) {

      if (indexnormal[randomnumber] === randomindex[j]) {
        flag = false
      }
    }
    if (flag) {
      randomindex.push(indexnormal[randomnumber])
    }
    //dicek lagi kalo sama kaya awal di ulang
    if (randomindex.length === indexnormal.length) {
      let counter = 0
      for (let j = 0; j < indexnormal.length; j++) {
        if (randomindex[j] === indexnormal[j]) {
          counter += 1
          if (counter === randomindex.length) {
            randomindex = []
          }
        }
      }
    }
  }
  for (let i = 0; i < randomindex.length; i++) {
    result += word[randomindex[i]]
  }
  return result
}



function delay(){
  setTimeout(closecard, 5000)
}

function closecard(){

  for(let i = 0; i< document.getElementById("playCardContainer").children.length; i++){
    document.getElementById("playCardContainer").children[i].setAttribute("class", "closedBox")
    console.log(i,"-----------",document.getElementById("playCardContainer").children.length )
  }
}

function displayafterclick(currentanswer){
  for(let i = 0; i< document.getElementsByClassName("closedBox").length; i++){
    if(document.getElementsByClassName("closedBox")[i].innerText===currentanswer)
    document.getElementsByClassName("closedBox")[i].setAttribute("class", "box")
  }
}


function nextLevel() {
  userAnswer = ''
  document.getElementById("levelcounter").innerText = `Level ${counter}`
  shuffledWord = random(listOfWords[counter])
  document.getElementById("wordlevel").innerText = listOfWords[counter]
  console.log(listOfWords[counter])
  playCardContainer.innerHTML = ""
  for (let j = 0; j < shuffledWord.length; j++) {
    playCardContainer.innerHTML += `<div class="box"><h4>${shuffledWord[j]}</h4></div>`
  }
  delay()
}

function addlistenerandcheck(boxes) {

  let indexcount = -1
  for (let j = 0; j < boxes.length; j++) {
    boxes[j].addEventListener("click", function(e) {
      userAnswer += e.target.innerText
      indexcount++
      console.log(userAnswer[indexcount], listOfWords[counter][indexcount])
      displayafterclick(userAnswer[indexcount])//=======================================================================
      check(indexcount)
    })
  }  
}


function check(currentIndex) {

  if (userAnswer[currentIndex] !== listOfWords[counter][currentIndex]) {
    
    alert('Sorry, Wrong box')
    if(startagain()){
      counter = 0
      nextLevel()
      addlistenerandcheck(document.getElementsByClassName("box"))

    }
  }
  else if (listOfWords[counter][currentIndex] === userAnswer[currentIndex]) {
    
    if (listOfWords[counter].length === userAnswer.length) {
      if(listOfWords[counter+1]===undefined){
        alert("Congratulations, You've Completed the Game!")
      }
      else{
        alert('Nice one, get ready for the next level !')
        console.log('to next level')
        counter+=1
        nextLevel()
        addlistenerandcheck(document.getElementsByClassName("box"))
      }


    }
  }

}

function startagain(){
  userAnswer=""
  let ask = prompt('wanna play again? Y/N')
  if(ask==="y"|| ask==="Y"){
    return true
  }
  return false
}

alert('Press OK to play')
nextLevel()
addlistenerandcheck(document.getElementsByClassName("box"))