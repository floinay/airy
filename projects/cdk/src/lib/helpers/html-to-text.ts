const regexp = /<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g;
export const htmlToText = (html: string): string => {
  return html.replace(regexp, '');
}
export const isPureText = (html: string): boolean => {
  return !regexp.test(html);
}

export const isHtmlString = (string: string): boolean => {
  return regexp.test(string);
}
