import getHealthStatus from "../js/health";

test.each([
    [
        'healthy',
        {
            name: 'Strong John',
            health: 90
        },
        'healthy'
    ],
    [
        'wounded', {
            name: 'Ordinary Harry',
            health: 45
        },
        'wounded'
    ],
    [
        'critical', {
            name: 'Weak Rick',
            health: 10
        },
        'critical'
    ],
    [
        'dead', {
            name: 'Dead Zet',
            health: 0
        },
        null
    ],
])('testing function getHealthStatus with status "%s" for character %o', (_, character, expected) => {
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
})








