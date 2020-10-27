const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 12;
const STRONG_ATTACK_VALUE = 15;
const HEAL_VALUE = 18;

const MODE_ATTACK = 'ATTACK'; 
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';


const enteredValue = prompt('Maximum life for you and the monster', '100')

let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}


let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonuslife = true;

adjustHealthBars(chosenMaxLife);

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentPlayerHealth <= 0 && hasBonuslife){
        hasBonuslife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead if the bonus life did not save your ass')
        
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth> 0){
        alert('YOU WON!!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('YOU LOST');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('YOU HAVE A DRAW');
    }
    if (currentMonsterHealth <= 0 || currentPlayerHealth <=0){
        reset();
    }
}

function attackMonster(mode){
    let maxDamage;
    if (mode === MODE_ATTACK){
        maxDamage = ATTACK_VALUE;
    } else if(mode=== MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler(){
   attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
   attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if  (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You can't heal more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE)
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);