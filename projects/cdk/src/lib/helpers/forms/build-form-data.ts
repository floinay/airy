import {isArray} from 'lodash-es';

type FileOrFiles = File | File[];

export function buildFormData(files: { [key: string]: FileOrFiles }, existingFormData?: FormData): FormData {
  const formData = existingFormData || new FormData();

  Object.entries(files).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.set(key, value, value.name);
    }
    if (isArray(value)) {
      // @ts-ignore
      value.forEach(file => formData.append(`${key}[]`, file as string, file['name']));
    }
  });

  return formData;
}
