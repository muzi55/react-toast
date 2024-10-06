export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export type ToastState = "success" | "error";

export interface IToastProps {
  position: ToastPosition;
  duration: number;
  message: string;
  state: ToastState;
  multiple: boolean;
}

export interface IToastArray extends IToastProps {
  id: number;
}
