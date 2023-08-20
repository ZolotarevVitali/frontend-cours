type Mode = Record<string, string | boolean>;
type ModeEntry = [string, string | boolean];

export function classNames(className: string, classList: string[] = [], mode: Mode = {}) {

  return [
    className,
    ...classList,
    ...Object.entries(mode)
      .filter(([className, value]: ModeEntry)  => value)
      .map(([className, value]: ModeEntry)  => className)
  ].join(' ');
}