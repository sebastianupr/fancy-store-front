import { ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps, FormEvent, FormHTMLAttributes, InputHTMLAttributes } from "react";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type FormElement = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export type FormSubmitEvent = FormEvent<HTMLFormElement>
