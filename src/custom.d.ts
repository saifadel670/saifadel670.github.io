// This file tells TypeScript to recognize and allow imports of .jsx files
// without needing explicit type declarations, resolving the TS(7016) error.
declare module '*.jsx' {
  const content: any;
  export default content;
}
