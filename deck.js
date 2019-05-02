import { slides as intro } from './1-intro.mdx';
import { slides as bem } from './2-bem.mdx'
import { slides as functional } from './3-functional.mdx';
import { slides as modules } from './4-modules.mdx';
import { slides as cssinjs } from './5-cssinjs.mdx';
import { slides as outro } from './6-outro.mdx';

export { future as theme } from '@mdx-deck/themes'

export const slides = [
  ...intro,
  ...bem,
  ...functional,
  ...modules,
  ...cssinjs,
  ...outro,
];
