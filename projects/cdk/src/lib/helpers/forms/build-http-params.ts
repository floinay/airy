import {HttpParams} from '@angular/common/http';

type FormQuery = {
  [key: string]: string | boolean | number | null | undefined | Array<number | string | boolean | null | undefined>;
};

export function buildHttpParams(query: FormQuery): HttpParams {
  let params: HttpParams = new HttpParams();
  for (const key of Object.keys(query)) {
    // @ts-ignore
    let value = query[key];
    if (value === true) {
      value = 1;
    }
    if (value === false) {
      value = 0;
    }
    if (value) {
      if (value instanceof Array) {
        params = params.append(key, '[]');
        value.forEach((item) => {
          params = params.append(`${key.toString()}[]`, item as string);
        });
      } else {
        params = params.append(key.toString(), value as string);
      }
    }
  }
  return params;
}
