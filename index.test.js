import c from './index';

const style = {
  'Modal': 'modal',
  'Modal__header': 'modal header',
  'Modal--small': 'modal small',
  'Modal__header--small': 'modal header small'
};

describe('Class name builder tests', () => {
  it ('should return empty string when there is no match', () => {
    const classname = new c(style, 'Modal');

    expect(classname.get({ e: 'missing' })).toBe('');
  });

  it ('should fetch proper block', () => {
    const classname = new c(style, 'Modal');

    expect(classname.get()).toBe('modal');
  });

  it ('should fetch proper element', () => {
    const classname = new c(style, 'Modal');

    expect(classname.get({ e: 'header' })).toBe('modal header');
  });

  it ('should fetch proper modifier', () => {
    const classname = new c(style, 'Modal');

    expect(classname.get({ m: 'small' })).toBe('modal small');
  });

  it ('should fetch proper element and its modifier', () => {
    const classname = new c(style, 'Modal', true);

    expect(classname.get({ e: 'header', m: 'small' })).toBe('modal header modal header small');
  });

  it ('should fetch proper element with modifier, but without separate element', () => {
    const classname = new c(style, 'Modal');

    expect(classname.get({ e: 'header', m: 'small' }, true)).toBe('modal header small');
  });
});
