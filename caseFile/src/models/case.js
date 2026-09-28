let currentCase = null

function save(caseData) {
    currentCase = caseData
    return currentCase
}

function get() {
    return currentCase
}

module.exports = {
    save,
    get
}