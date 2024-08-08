declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const content: IClassNames;
  export = content;
}
