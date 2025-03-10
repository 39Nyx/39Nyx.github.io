import React, { useRef } from 'react';
import { useLocation } from 'dumi';
import { useLiveDemo } from 'dumi/dist/client/theme-api';
import classnames from 'classnames';
import PreviewerActions from 'dumi/theme-default/slots/PreviewerActions';
import { collectGlSlDependencies } from './collectGlSlDependencies';
import { merge } from 'lodash';

const Previewer: React.FC = (props: any) => {
  const demoContainer = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();
  const link = `#${ props.asset.id }`;

  const {
    node: liveDemoNode,
    error: liveDemoError,
    loading: liveDemoLoading,
    setSource: setLiveDemoSource
  } = useLiveDemo(props.asset.id, {
    iframe: Boolean(props.iframe || props._live_in_iframe),
    containerRef: demoContainer
  });
  const extendDependencies = collectGlSlDependencies(props);
  props.asset.dependencies = merge(props.asset.dependencies, extendDependencies);
  return (
    <div
      id={ props.asset.id }
      className={ classnames('dumi-default-previewer', props.className) }
      style={ props.style }
      data-debug={ props.debug }
      data-active={ hash === link || undefined }
    >
      <div
        className="dumi-default-previewer-demo"
        style={ { background: props.background } }
        data-compact={ props.compact || undefined }
        data-transform={ props.transform || undefined }
        data-iframe={ props.iframe || undefined }
        data-error={ Boolean(liveDemoError) || undefined }
        data-loading={ liveDemoLoading || undefined }
        ref={ demoContainer }
      >
        { props.iframe ? (
          <iframe
            style={
              ['string', 'number'].includes(typeof props.iframe)
                ? { height: Number(props.iframe) }
                : {}
            }
            src={ props.demoUrl }
          ></iframe>
        ) : (
          liveDemoNode || props.children
        ) }
      </div>
      { liveDemoError && (
        <div className="dumi-default-previewer-demo-error">
          {/*<IconError />*/ }
          { liveDemoError.toString() }
        </div>
      ) }
      <div className="dumi-default-previewer-meta">
        { (props.title || props.debug) && (
          <div className="dumi-default-previewer-desc">
            <h5>
              <a href={ link }>
                { props.debug && <strong>DEV ONLY</strong> }
                { props.title }
              </a>
            </h5>
            { props.description && (
              <div
                className="markdown"
                dangerouslySetInnerHTML={ { __html: props.description } }
              />
            ) }
          </div>
        ) }
        <PreviewerActions
          { ...props }
          onSourceChange={ setLiveDemoSource }
          demoContainer={
            props.iframe
              ? (demoContainer.current?.firstElementChild as HTMLIFrameElement)
              : demoContainer.current!
          }
        />
      </div>
    </div>
  );
};

export default Previewer;
