import { Widget } from "./widgets";

export type AtributesType = {
  accept?: string; // form
  accesskey?: string; // global
  action?: string; // form
  alt?: string; // applet, area, img, input
  autocomplete?: string; // form (en-US), input
  autofocus?: string; // button, input, keygen, select, textarea
  autoplay?: string; // audio, video
  buffered?: string; // audio, video
  checked?: string; // input
  class?: string; // global
  cols?: string; // textarea
  colspan?: string; // table
  contextmenu?: string; // global
  controls?: string; // audio, video
  default?: string; // input
  disabled?: string; // button, input, keygen, select, textarea
  enctype?: string; // form
  for?: string; // label
  form?: string; // button, fieldset, input, keygen, label, meter, object (en-US), output, progress, select, textarea
  headers?: string; // th, td
  hidden?: string; // global
  href?: string; // a, area, base, link
  id?: string; // global
  label?: string; // label
  lang?: string; // global
  list?: string; // input
  loop?: string; // audio, bgsound (en-US), marquee, video
  max?: string; // input
  maxlength?: string; // input
  media?: string; // audio, video
  method?: string; // form
  min?: string; // input
  multiple?: string; // input, select
  name?: string; // global
  novalidate?: string; // form
  pattern?: string; // input
  placeholder?: string; // input, textarea
  poster?: string; // video
  preload?: string; // audio, video
  radiogroup?: string; // input
  readonly?: string; // input
  rel?: string; // link, area, a
  required?: string; // input
  reversed?: string; // ol, ul
  rows?: string; // textarea
  rowspan?: string; // table
  sandbox?: string; // iframe
  selected?: string; // option
  shape?: string; // textarea, a
  size?: string; // input, select
  src?: string; // audio, embed, iframe, img, input, script, source, track, video
  srcdoc?: string; // iframe
  step?: string; // input
  style?: string; // global
  summary?: string; // table
  target?: string; // a, area, base, form
  title?: string; // global
  type?: string; // button, input
  usemap?: string; // img, input
  value?: string; // input
  wrap?: string; // textarea
};

export type EventsType = {
  click?: Function;
  dblclick?: Function;

  mousedown?: Function;
  mouseup?: Function;
  mousemove?: Function;
  mouseover?: Function;
  mouseout?: Function;

  submit?: Function;
  input?: Function;
  change?: Function;
  focus?: Function;
  blur?: Function;
  reset?: Function;
};

export type TruStrapWidgetType = {
  tag?: string;
  observers?: Array<string>;
  children?: Array<Widget>;
};
export type WidgetType = AtributesType & EventsType & TruStrapWidgetType;

export type ChildrenType = (Widget | string | number)[];
