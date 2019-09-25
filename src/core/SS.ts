import React from 'react';
import { StyledBase } from './Types';

export interface Div extends React.HTMLAttributes<any>, StyledBase {}
export interface Span extends React.HTMLAttributes<any>, StyledBase {}
export interface Img extends React.ImgHTMLAttributes<any>, StyledBase {}
export interface Input extends React.InputHTMLAttributes<any>, StyledBase {}
export interface Button extends React.ButtonHTMLAttributes<any>, StyledBase {}
export interface Anchor extends React.AnchorHTMLAttributes<any>, StyledBase {}
export interface Form extends React.FormHTMLAttributes<any>, StyledBase {}
export interface Select extends React.SelectHTMLAttributes<any>, StyledBase {}
export interface Table extends React.TableHTMLAttributes<any>, StyledBase {}
export interface TextArea extends React.TextareaHTMLAttributes<any>, StyledBase {}
export interface Td extends React.TdHTMLAttributes<any>, StyledBase {}
export interface Th extends React.ThHTMLAttributes<any>, StyledBase {}
