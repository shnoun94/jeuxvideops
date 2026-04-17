import {describe, it, expect} from 'vitest';
import {getRandomInt, rectIntersect, circleIntersect, timeToString} from './script.js';

describe('SpaceWord - Tests Unitaires Fournis', () => {
  it('getRandomInt(-42, 42) < 43', () => expect(getRandomInt(-42, 42) < 43).toBe(true));
  it('getRandomInt(42, 42)', () => expect(getRandomInt(42, 42)).toBe(42));

  it('rectIntersect(1,1,2,1,4,1,1,2)', () => expect(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2)).toBe(false));
  it('rectIntersect(1,1,5,2,4,1,1,2)', () => expect(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2)).toBe(true));

  it('circleIntersect(3,2,1,6,1,1.5)', () => expect(circleIntersect(3, 2, 1, 6, 1, 1.5)).toBe(false));
  it('circleIntersect(3,2,1,3,-2,4)', () => expect(circleIntersect(3, 2, 1, 3, -2, 4)).toBe(true));

  it('timeToString(123456789)', () => expect(timeToString(123456789)).toBe('17:36:78'));
  it('timeToString("toto")', () => expect(timeToString('toto')).toBe('NaN:NaN:NaN'));
});
describe('SpaceWord - Tests Supplémentaires', () => {
  it('getRandomInt(10, 20) >= 10', () => expect(getRandomInt(10, 20) >= 10).toBe(true));
  it('getRandomInt(-10, -5) >= -10 && <= -5', () => expect(getRandomInt(-10, -5) >= -10 && 
  getRandomInt(-10, -5) <= -5).toBe(true));

  it('rectIntersect(0,0,10,10,0,0,10,10)', () => expect(rectIntersect(0, 0, 10, 10, 0, 0, 10, 10)).toBe(true));

  it('circleIntersect(5,5,2,5,5,3)', () => expect(circleIntersect(5, 5, 2, 5, 5, 3)).toBe(true));

  it('timeToString(0)', () => expect(timeToString(0)).toBe('00:00:00'));
});
