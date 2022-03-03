import MathCharacter from './MathCharacter';

export default class Magician extends MathCharacter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
