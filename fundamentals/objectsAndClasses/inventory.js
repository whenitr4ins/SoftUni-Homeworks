function solve(input) {
    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let [heroName, heroLevel, itemsStr] = input[i].split(' / ');
        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: itemsStr.split(', ')
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);
    }
}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);