import Character from '../Character';
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
