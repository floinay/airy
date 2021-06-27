export function fileFromEvent(event: Event): File | null {
  const files = filesFromEvent(event);

  return files[0];
}

export function filesFromEvent(event: Event): File[] {
  const files = target(event).files;

  if (files?.length) {
    return files as unknown as File[];
  }

  return [];
}


function target(event: Event): HTMLInputElement {
  return event.target as HTMLInputElement;
}
