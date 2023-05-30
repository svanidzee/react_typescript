import { FC, useRef, useState } from 'react';

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    console.log(value);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      {/* contr */}
      <input onChange={onChangeHandler} value={value} type='text' placeholder='controlled' />
      {/* unctr */}
      <input ref={inputRef} type='text' placeholder='uncontrolled' />
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
};
