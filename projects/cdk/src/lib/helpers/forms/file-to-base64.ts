import {Observable, from} from 'rxjs';

export const fileToBase64 = (file: File): Observable<string | unknown> => from(new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = error => reject(error);
}));
