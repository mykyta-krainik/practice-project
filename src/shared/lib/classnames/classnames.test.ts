import classnames from './classnames';

describe('classnames', () => {
  it('should return empty string when no arguments are passed', () => {
    expect(classnames()).toBe('');
  });

  it('should return the same class if no mods or adds passed', () => {
    expect(classnames('foo')).toBe('foo');
  });

  it('should fail when first argument is not a string', () => {
    expect(() => classnames(123 as unknown as string))
      .toThrow();
  });

  it('should include mods if provided true', () => {
    expect(classnames('foo', { bar: true })).toBe('foo bar');
  });

  it('shouldn\'t include mods if provided false', () => {
    expect(classnames('foo', { bar: false })).toBe('foo');
  });

  it('should include additions if provided', () => {
    expect(classnames('foo', undefined, ['bar'])).toBe('foo bar');
  });

  it('should include all mods and additions if provided', () => {
    expect(classnames('foo', { bar: true }, ['car'])).toBe('foo car bar');
  });
});
