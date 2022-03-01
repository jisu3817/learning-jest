const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(3);
    expect(cal.value).toBe(3); 
  });

  it('clear', () => {
    cal.set(3);
    cal.clear();

    expect(cal.value).toBe(0);
   }); 

  it('add', () => {
    cal.set(1);
    cal.add(15);
    expect(cal.value).toBe(16);
  });

  it('add show throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
      // toThrow => 에러 메세지, 정규표현식도 검사 가능!
    }).toThrow('Value can not be greater than 100');
  });

  it('substracts', () => {
    cal.set(10);
    cal.subtract(3);
    expect(cal.value).toBe(7);
  });

  it('multiplies', () => {
    cal.set(2);
    cal.multiply(3);
    expect(cal.value).toBe(6);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
