import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: string;
  }
  
  interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    className?: string;
  }
}
