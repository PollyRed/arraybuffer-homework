import getBuffer from '../GetBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Конвертация в строку', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(converter.toString()).toEqual(expected);
});
