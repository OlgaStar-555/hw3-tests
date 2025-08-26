const statusLit = [
    {
        limitValue: 50,
        status: 'healthy'
    },
    {
        limitValue: 15,
        status: 'wounded'
    },
    {
        limitValue: 0,
        status: 'critical'
    },
];

export default function getHealthStatus(character) {
    if (character.health <= 0) {
        return null;
    }

    return statusLit.find(obj => character.health > obj.limitValue)?.status;
}