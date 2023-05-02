import React from 'react';
import debounce from 'lodash.debounce';
import mod from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const icon = (
    <svg className={mod.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="search">
          <rect width="24" height="24" opacity="0" />
          <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
        </g>
      </g>
    </svg>
  );
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useMemo(
    () =>
      debounce((str) => {
        dispatch(setSearchValue(str));
      }, 300),
    [setSearchValue],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={mod.root}>
      {icon}

      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={mod.input}
        placeholder="Поиск пиццы..."
      />

      {value && (
        <svg
          onClick={onClickClear}
          className={mod.clear}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="close">
              <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
              <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};