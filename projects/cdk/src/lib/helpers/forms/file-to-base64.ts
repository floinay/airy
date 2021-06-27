import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';

export const fileToBase64 = (file: File): Observable<string> => fromPromise(new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = error => reject(error);
}));
