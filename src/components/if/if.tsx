import { IfProps } from './types';

export default function If({ condition, then, children }: IfProps) {
  /**
   * if we have a then (else)
   * check if condition is met, if so, return `then`,
   * otherwise return children;
   */
  if (then) {
    if (!condition) return children;
    return then;
  }

  /**
   * if there is no else statement,
   * check only that the condition is met
   */
  if (condition) return children;

  /**
   * no conditions have been met, return null;
   */
  return null;
}
