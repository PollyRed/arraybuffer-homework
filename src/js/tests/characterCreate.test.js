import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Zombie from '../Zombie';

test('Персонаж создаётся корректно', () => {
  const expected = {
    name: 'Rawwwr',
    type: 'Zombie',
    health: 100,
    level: 1,
  };
  expect(new Character('Rawwwr', 'Zombie')).toEqual(expected);
});

test('Уменьшение урона в зависимости от расстояния', () => {
  const mage = new Magician('ZloyMag');
  expect(mage.attack).toEqual(10);
  mage.distance = 2;
  expect(mage.attack).toEqual(9);
  mage.distance = 11;
  expect(mage.attack).toEqual(0);
});

test('Уменьшение атаки под действием "дурмана"', () => {
  const daemon = new Daemon('DobryDemon');
  daemon.stoned = true;
  expect(daemon.attack).toEqual(10);
  daemon.distance = 2;
  expect(daemon.attack).toEqual(4);
});

test('Уменьшение урона в зависимости от расстояния', () => {
  const zombie = new Zombie('Dave');
  expect(zombie.attack).toEqual(40);
  zombie.distance = 2;
  expect(zombie.attack).toEqual(40);
  zombie.distance = 11;
  expect(zombie.attack).toEqual(40);
});
