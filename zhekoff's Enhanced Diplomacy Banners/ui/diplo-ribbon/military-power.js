// add MilitaryPower by Hotsolidinfill

export function calculateMilitaryPower(units) {
    let strengthSum = 0;

    for (let i = 0; i < units.length; i++) {
        const unit = units[i];

        if (!unit.Combat.canAttack) {
            continue;
        }

        const strength = Math.max(
            unit.Combat.getMeleeStrength(false),
            unit.Combat.rangedStrength
        );

        // calc MilitaryPower
        strengthSum += Math.round(4 ** (strength / 17));
    }

    return strengthSum;
}