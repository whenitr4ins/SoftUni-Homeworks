function solve() {

    function mage(name) {
        let hero = {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                if (this.mana > 0) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                } else {
                    console.log(`${this.name} cannot cast ${spell}, insufficient mana!`);
                }
            }
        };
        return hero;
    }

    function fighter(name) {
        let hero = {
            name,
            health: 100,
            stamina: 100,
            fight() {
                if (this.stamina > 0) {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                } else {
                    console.log(`${this.name} is too tired to fight!`);
                }
            }
        };
        return hero;
    }

    return { mage, fighter };
}