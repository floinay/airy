import {Inject, Injectable, Optional} from '@angular/core';
import {mergeArrayOfObjects} from './helpers';
import {CLASSES_FACTORIES, CLASSES_MAP, ClassesFactory} from '../tokens';
import {GenericObject} from '../../../types/generic-object';

@Injectable()
export class ClassesParserService {
  private readonly classesFactories = mergeArrayOfObjects(this.multiClassesFactories);
  private readonly classesMap = mergeArrayOfObjects(this.multiClassesMap);

  constructor(@Inject(CLASSES_FACTORIES) @Optional() readonly multiClassesFactories: GenericObject<ClassesFactory>[],
              @Inject(CLASSES_MAP) @Optional() readonly multiClassesMap: GenericObject<string[]>[]) {
  }

  parse(name: string, value: string, properties: Map<string, string>): string[] {
    if (name in this.classesFactories) {
      return this.classesFactories[name](value, properties);
    }

    if (name in this.classesMap) {
      return this.classesMap[name];
    }

    return [];
  }
}
