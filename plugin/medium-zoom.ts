import { IApi, unistUtilVisit } from "dumi";

const mediumZoomPlugin = () => {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'image', (node, index, parent) => {
      parent!.children.splice(index!, 1, {
        type: 'html',
        value: `<img src="${node.url}" alt="${node.alt}" class="zoom-able" data-zoom-able />`,
      });
    })
  }
}

export default (api: IApi) => {
  api.describe({
    key: 'medium-zoom'
  })

  api.register({
    key: 'modifyConfig',
    stage: Infinity,
    fn: (memo: IApi['config']) => {
      const cloneExtraRemarkPlugins = memo.extraRemarkPlugins;

      memo.extraRemarkPlugins = [
        mediumZoomPlugin,
        ...(Array.isArray(cloneExtraRemarkPlugins)
          ? cloneExtraRemarkPlugins
          : ([cloneExtraRemarkPlugins].filter(Boolean) as any)),
      ];
      return memo
    }
  })

  api.modifyHTML(($) => {
    $('body').append(`
      <script src="https://registry.npmmirror.com/medium-zoom/1.1.0/files/dist/medium-zoom.min.js"></script>
      <style>
        .zoom-able { cursor: zoom-in }
        .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 980 }
      </style>
      <script>
        const zoom = mediumZoom()
        document.body.onclick = (e) => {
            if (e.type === 'click') {
                const target = e.target
                const dataZoomAble = target.attributes.getNamedItem('data-zoom-able')
                if (dataZoomAble) {
                    if (dataZoomAble.value === '') {
                        zoom.attach(target)
                        dataZoomAble.value = 'true'
                        target.attributes.setNamedItem(dataZoomAble)
                    }
                }
            }
        }
      </script>
    `);
    return $;
  });
}
