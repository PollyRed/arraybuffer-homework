export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let result = '';
    const buffer16itView = new Int16Array(this.buffer);
    for (let i = 0; i < buffer16itView.length; i += 1) {
      result += String.fromCharCode(buffer16itView[i]);
    }
    return result;
  }
}
