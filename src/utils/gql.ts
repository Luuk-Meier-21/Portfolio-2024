export function isNullableValue<T>(value: T): boolean {
  return value === null || value === undefined;
}
