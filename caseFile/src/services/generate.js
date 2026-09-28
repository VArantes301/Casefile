function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function odds(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
     
}

function gender() {
    const result = Math.random() < 0.5 ? "male" : "female"
    return result
}

function generateStats(totalPoints, minPerStat) {
    const stats = ['strength', 'dexterity', 'mind', 'wisdom'];

    let remainingPoints = totalPoints - (stats.length * minPerStat)

    if (remainingPoints < 0) remainingPoints = 0;

    const result = {
        strength: minPerStat,
        dexterity: minPerStat,
        mind: minPerStat,
        wisdom: minPerStat
    };

    while(remainingPoints > 0) {
        const randomStat = stats[Math.floor(Math.random() * stats.length)]
        result[randomStat]++
        remainingPoints--
    }
    
    return result
}



function shuffle(array) {
    const copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

// Sorteia uma chave de `weights` ({ key: peso }) proporcionalmente ao peso de cada uma.
function weightedRandom(weights) {
    const entries = Object.entries(weights)
    const total = entries.reduce((sum, [, weight]) => sum + weight, 0)
    let roll = Math.random() * total

    for (const [key, weight] of entries) {
        if (roll < weight) return key
        roll -= weight
    }

    return entries[entries.length - 1][0]
}


module.exports = {
    gender,
    generateStats,
    random,
    odds,
    shuffle,
    weightedRandom
}