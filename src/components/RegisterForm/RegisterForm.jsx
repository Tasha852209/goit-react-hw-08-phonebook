import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/AuthSlice';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledP,
} from './RegisterForm.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <>
      <StyledP>Register</StyledP>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>
          <span>Name:</span>
          <StyledInput
            {...register('name', { required: true })}
            type="text"
            placeholder="name or/and surname"
          />
          {errors.name && onSubmit && Notify.failure('This field is required')}
        </StyledLabel>
        <StyledLabel>
          <span>Email:</span>
          <StyledInput
            {...register('email', { required: true })}
            type="email"
            placeholder="example@mail.com"
          />
          {errors.email && onSubmit && Notify.failure('This field is required')}
        </StyledLabel>
        <StyledLabel>
          <span>Password:</span>
          <StyledInput
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            placeholder="minimum 7 characters"
          />
          {errors.password &&
            onSubmit &&
            Notify.failure('This field is required with 7 characters')}
        </StyledLabel>

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
