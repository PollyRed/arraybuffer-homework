import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.dope = false;
    this.distance = 1;
  }

  set stoned(value) {
    this.dope = Boolean(value);
  }

  get stoned() {
    return this.dope;
  }

  set attack(value) {
    this.defaultAttack = value;
  }

  get attack() {
    let calculatedAttack = ((100 - (this.distance - 1) * 10) / 100) * this.defaultAttack;
    if (this.stoned) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }
    return calculatedAttack > 0 ? Math.round(calculatedAttack) : 0;
  }
}
