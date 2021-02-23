export function fileFormData(key: string, file: File, formData?: FormData): FormData {
  if (!formData) {
    formData = new FormData();
  }

  formData.set(key, file, file.name);

  return formData;
}
