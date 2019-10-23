import { makeComponent } from '../../core';
import { Img as ImgType } from '../../core/SS';

export const Img = makeComponent<ImgType>('Img').create('img');
