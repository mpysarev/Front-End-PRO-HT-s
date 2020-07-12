let baseValue;

module.exports = {
    set: (value) => (baseValue = value),
    add: (value) => (baseValue += value),
    sub: (value) => (baseValue -= value),
    mult: (value) => (baseValue *= value),
    div: (value) => (baseValue /= value)
}

