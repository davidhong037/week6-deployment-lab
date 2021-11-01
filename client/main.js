const swordBtn = document.getElementById('sword-btn')
const axeBtn = document.getElementById('axe-btn')
const crossbowBtn = document.getElementById('crossbow-btn')
const forestBtn = document.getElementById('forest-btn')
const minesBtn = document.getElementById('mines-btn')
const oldRuinsBtn = document.getElementById('oldruins-btn')

function selectSword(){
    alert('You have equipped the sword and shield! Please choose your path.')
}

function selectAxe(){
    alert('You have equipped the double bladed battle axe! Please choose your path.')
}

function selectCrossbow(){
    alert('You have equipped the repeating crossbow! Please choose your path.')
}

function selectForest(){
    alert('You have decided to venture forth into The Terrorlake Forest. Beware of The Terrorblade!')
    console.log('forest')
}

function selectMines(){
    alert('You have decided to venture forth into The Bloodhill Mines. Beware of the Dwarf King!')
    console.log('mines')
}

function selectOldRuins(){
    alert('You have decided to venture forth into The Wasted City. Beware of Deathwing!')
    console.log('old ruins')
}

swordBtn.addEventListener('click', selectSword)
axeBtn.addEventListener('click', selectAxe)
crossbowBtn.addEventListener('click', selectCrossbow)
forestBtn.addEventListener('click', selectForest)
minesBtn.addEventListener('click', selectMines)
oldRuinsBtn.addEventListener('click', selectOldRuins)



