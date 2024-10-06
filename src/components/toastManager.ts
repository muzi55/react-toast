import type { IToastArray, IToastProps } from "../assets/type";

let toasts: IToastArray[] = [];
let listeners: ((toasts: IToastArray[]) => void)[] = [];

export const addToast = (toast: IToastProps) => {
  const toastWithId: IToastArray = { ...toast, id: Date.now() };
  toasts.push(toastWithId);
  listeners.forEach((listener) => listener([...toasts])); // 새로운 배열로 전달

  if (toast.duration) {
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== toastWithId.id); // id를 기준으로 필터링
      listeners.forEach((listener) => listener([...toasts])); // 새로운 배열로 전달
    }, toast.duration);
  }
};

export const subscribe = (listener: (toasts: IToastArray[]) => void) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
