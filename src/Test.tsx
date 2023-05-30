import * as React from 'react';

export interface ILinkProps {
  /**
   * hover url to see this!
   */
  url: string;
  className: string;
  children: React.ReactNode;
}

function Link({ children, className, url }: ILinkProps) {
  return (
    <a className={className} target='_blink' ref='noopener noreferrer' href={url}>
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div>
      <Link url='#' className='Link'>
        <p>dffdfdf</p>
      </Link>
    </div>
  );
}
