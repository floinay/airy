export const concatUnique = (first: any[], second: any[]) =>
  first.concat(second.filter(secondItem => first.find(firstItem => firstItem !== secondItem))
  );
