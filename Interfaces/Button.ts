import { NumberPadButtonId } from "../Config/NumberPadButton";

// General
export type ButtonProps<T> = {
  label: string;
  handlePress?: (option: T) => void;
};

// NumberPadButton
export enum NumberPadButtonType {
  Delete = "Delete",
  Reset = "Reset",
  Equal = "Equal",
  Primary = "Primary",
}

export type NumberPadButtonProps<T> = ButtonProps<T> & {
  buttonType: NumberPadButtonType;
  buttonId: NumberPadButtonId;
};

export type BaseNumberPadButtonProps = {
  buttonType: NumberPadButtonType;
  active?: boolean;
};
