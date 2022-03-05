import MathCharacter from './MathCharacter';

export default class Zombie extends MathCharacter {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
