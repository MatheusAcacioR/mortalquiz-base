/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mortalDragonSecondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}

Input.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  value: '',
};

// eslint-disable-next-line react/no-typos
Input.propTypes = {
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: propTypes.string.isRequired,
};
