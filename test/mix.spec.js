'use strict';

import deepFreeze from 'deep-freeze';
import {mix} from '../mix';

describe('mix', function () {
  it('Does not mutate objects passed to it', function () {
    const o1 = deepFreeze({ a: 'a', b: 'b' });
    const o2 = deepFreeze({ a: 'A', c: 'c' });
    const result = mix(o1, o2);

    expect(result).toEqual({...o1, ...o2});
    expect(result.a).toBe('A');
    expect(result.b).toBe('b');
    expect(result.c).toBe('c');
    expect(o1.a).toBe('a');
    expect(o1.c).toBeUndefined();
    expect(o2.b).toBeUndefined();
    expect(mix({hi: 'there'}, {hi: undefined}).hi).toBeUndefined();
  });
});
