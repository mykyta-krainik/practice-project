type Mods = Record<string, boolean>;

export default function classnames(
  cls?: string,
  mods: Mods = {},
  additions: string[] = [],
): string {
  if (!cls) {
    return '';
  }

  if (typeof cls !== 'string') {
    throw new Error('First argument (main class) must be a string');
  }

  if (!mods && !additions) {
    return cls;
  }

  return [
    cls.trim(),
    ...additions,
    ...Object.entries(mods)
      .filter(([, value]) => value)
      .map(([modCls]) => modCls),
  ].join(' ');
}
