export function filesFormData(files: { [key: string]: File | File[] }, formData: FormData = new FormData()): FormData {

  Object.entries(files).forEach(([key, fileOrFiles]) => {
    if (fileOrFiles instanceof File) {
      formData.set(key, fileOrFiles, fileOrFiles.name);
    } else {
      fileOrFiles.forEach(file => formData.append(key, file, file.name));
    }
  });

  return formData;
}
