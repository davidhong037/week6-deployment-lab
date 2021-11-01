// const swordBtn = document.getElementById('sword-btn')
// const axeBtn = document.getElementById('axe-btn')
// const crossbowBtn = document.getElementById('crossbow-btn')
// const forestBtn = document.getElementById('forest-btn')
// const minesBtn = document.getElementById('mines-btn')
// const oldRuinsBtn = document.getElementById('oldruins-btn')

// function selectSword(){
//     alert('You have equipped the sword and shield! Please choose your path.')
// }

// function selectAxe(){
//     alert('You have equipped the double bladed battle axe! Please choose your path.')
// }

// function selectCrossbow(){
//     alert('You have equipped the repeating crossbow! Please choose your path.')
// }

// function selectForest(){
//     alert('You have decided to venture forth into The Terrorlake Forest. Beware of The Terrorblade!')
//     console.log('forest')
// }

// function selectMines(){
//     alert('You have decided to venture forth into The Bloodhill Mines. Beware of the Dwarf King!')
//     console.log('mines')
// }

// function selectOldRuins(){
//     alert('You have decided to venture forth into The Wasted City. Beware of Deathwing!')
//     console.log('old ruins')
// }

// swordBtn.addEventListener('click', selectSword)
// axeBtn.addEventListener('click', selectAxe)
// crossbowBtn.addEventListener('click', selectCrossbow)
// forestBtn.addEventListener('click', selectForest)
// minesBtn.addEventListener('click', selectMines)
// oldRuinsBtn.addEventListener('click', selectOldRuins)


// const canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')
// const width = canvas.width = 320
// const height = canvas.height = 480

// canvas.style.marginTop = window.innerHeight / 2 - height / 2 + 'px'

// let health = 100
// const healthBarWidth = 200
// const healthBarHeight = 30
// const x = width / 2 - healthBarWidth / 2
// const y = height / 2 - healthBarHeight / 2

// const healthBar = new Healthbar (x, y, healthBarWidth, healthBarHeight, health, 'green')

// const frame = function() {
//     context.clearRect(0, 0, width, height)
//     healthBar.show(context)
//     requestAnimationFrame(frame)
// }

// canvas.onclick = function(){
//     health - 10
//     healthBar.updateHealth(health)
// }

// frame()