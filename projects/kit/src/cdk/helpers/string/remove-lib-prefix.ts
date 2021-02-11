import {firstLetterToLower} from './first-letter-to-lower';

export function removeLibPrefix(s: string): string {
  if (s.startsWith('air')) {
    return firstLetterToLower(s.replace('air', ''));
  }

  return s;
}
