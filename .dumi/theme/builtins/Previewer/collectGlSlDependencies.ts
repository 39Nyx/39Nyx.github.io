import { glslMeta } from '../../utils/glsl';

export function collectGlSlDependencies(props: any) {
  const { id, dependencies } = props.asset;
  const urlPrefix = id.split('-').slice(0, -3).join('/') + '/demos';
  const dependenciesMap: Record<string, { type: string, value: string }> = {};
  if (dependencies) {
    const indexTsx = dependencies['index.tsx'].value;
    let index: number = 1;
    const str: string = `from '!!raw-loader!./`;
    const regex = new RegExp(`^${str}`);
    while (index < indexTsx.length) {
      const substr = indexTsx.substring(index);
      if (regex.test(substr)) {
        const endIndex: number = substr.indexOf('.glsl');
        const glslName = substr.substring(str.length, endIndex);
        const glslUrl = `${ urlPrefix }/${ glslName }.glsl`;
        if (glslMeta[glslUrl]) {
          dependenciesMap[`${ glslName }.glsl`] = {
            type: 'FILE',
            value: glslMeta[glslUrl].value
          };
        }
        index += endIndex + 5;
      } else {
        index++;
      }
    }
  }
  return dependenciesMap;
}
