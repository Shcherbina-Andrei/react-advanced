import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some-class')).toBe('some-class');
  });

  test('with additional class', () => {
    const expected = 'some-class additional class1';
    expect(classNames(
      'some-class',
      {},
      ['additional', 'class1'],
    ))
      .toBe(expected);
  });

  test('with options', () => {
    const expected = 'some-class additional class1 scrollable invisible';
    expect(classNames(
      'some-class',
      { scrollable: true, invisible: true },
      ['additional', 'class1'],
    )).toBe(expected);
  });

  test('with options false', () => {
    const expected = 'some-class additional class1 scrollable';
    expect(classNames(
      'some-class',
      { scrollable: true, invisible: false },
      ['additional', 'class1'],
    )).toBe(expected);
  });

  test('with options undefined', () => {
    const expected = 'some-class additional class1 scrollable';
    expect(classNames(
      'some-class',
      { scrollable: true, invisible: undefined },
      ['additional', 'class1'],
    )).toBe(expected);
  });
});
