type Mods = Record<string, boolean>;

export default function classnames(
  cls: string,
  mods?: Mods,
  additionals?: string[]
): string {
  if (!cls) {
    return '';
  }

  if (typeof cls !== 'string') {
    throw new Error('First argument (main class) must be a string');
  }

  if (!mods) {
    return cls;
  }

  return [
    cls.trim(),
    ...(additionals || []),
    ...Object.entries(mods).filter(([, value]) => value).map(([modCls]) => modCls),
  ].join(' ');
}