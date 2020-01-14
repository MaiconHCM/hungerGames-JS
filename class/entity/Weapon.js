class Weapon {
    constructor(config) {
        this.id = config.id;
        this.name = config.name;
        this.damage = config.damage;
        this.durability = config.durability;
        this.wear = 0;
        this.weight = config.weight;
    }
}
