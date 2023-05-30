import { FC, PropsWithChildren } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICardProps {
  width: string;
  height: string;
  variant: CardVariant;
  onClick: () => void;
}

export const Card: FC<PropsWithChildren<ICardProps>> = ({
  width,
  height,
  variant,
  onClick,
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : '',
      }}
      onClick={onClick}>
      {children}
    </div>
  );
};
