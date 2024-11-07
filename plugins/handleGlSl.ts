import { IApi } from 'dumi';
import fs from 'fs';
import path from 'path';

const collectListName: string[] = [];

function traverseDirectory(dir: string) {
  // 获取目录中的所有文件和子目录
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath); // 同步获取文件状态

    if (stats.isDirectory()) {
      traverseDirectory(filePath); // 递归调用遍历子目录
    } else {
      if (filePath.endsWith('.glsl')) {
        // console.log(`文件: ${ filePath }`);
        collectListName.push(filePath);
      }
    }
  });
}

function randomId(hasId: any) {
  const id = Math.floor(Math.random() * 200);
  if (hasId[id]) {
    return randomId(hasId);
  }
  hasId[id] = true;
  return id;
}

function generateGlsl() {
  const currentDirectory = process.cwd();
  traverseDirectory(path.join(currentDirectory, 'docs'));
  const hasId: any = {};
  const variableNameList: string[] = [];
  const importStringList = collectListName.map((filePath) => {
    const variableName = `${path.basename(filePath, '.glsl')}${randomId(
      hasId,
    )}`;
    variableNameList.push(
      `'${filePath.substring(
        currentDirectory.length,
      )}': { value: ${variableName} }`,
    );
    return `import ${variableName} from '${filePath}';`;
  });
  const textValue = `${importStringList.join(
    '\n',
  )}\nexport const glslMeta = {\n${variableNameList.join(', ')}\n}`;
  console.log(textValue);
  fs.writeFile(
    path.join(currentDirectory, '.dumi/tmp/dumi/meta/glsl.ts'),
    textValue,
    { encoding: 'utf8' },
    (err) => {
      if (err) {
        console.error('写入文件失败', err);
      } else {
        console.log('写入文件成功');
      }
    },
  );
}

generateGlsl()

// export default (api: IApi) => {
//   api.describe({
//     key: 'changeFavicon',
//     config: {
//       schema(joi) {
//         return joi.string();
//       },
//       onChange: api.ConfigChangeType.regenerateTmpFiles,
//     },
//     enableBy: api.EnableBy.config,
//   });
//
//   api.register({
//     key: 'addFoo',
//     // 同步
//     fn: (args: any) => {
//       console.log('addFoo', args);
//       return args;
//     },
//   });
//
//   api.modifyConfig((memo) => {
//     generateGlsl();
//     return memo;
//   });
// };
