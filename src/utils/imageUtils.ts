import get from 'lodash/get';
import Assets from '../assets';
import type {ImageSourceType} from '../components/image';

export function isSvgUri(source?: ImageSourceType) {
  // @ts-expect-error
  return typeof source === 'object' && source?.uri?.endsWith?.('.svg');
}

export function isSvg(source?: ImageProps['source']) {
  return typeof source === 'function' || isSvgData(source) || isSvgUri(source);
}

export function isBase64ImageContent(data: string) {
  const base64Content = data.split(',')[1];
  const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  return base64regex.test(base64Content);
}

export function getAsset(assetName = '', assetGroup = '') {
  return get(Assets, `${assetGroup}.${assetName}`);
}

function isSvgData(source?: ImageProps['source']) {
  const sourceString = (source as string);
  return typeof source === 'string' && (sourceString.includes('</svg>') || sourceString.includes('data:image/svg'));
}
