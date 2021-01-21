import {ThemeSizes} from '../core/size/size';

export type IndentsSizeOptions = { [K in keyof ThemeSizes]: string | number };

export interface CdkModuleOptions {
  nothing: number;
}

