import type { IToastProps, ToastPosition, ToastState } from "../assets/type";
import styles from "./Toast.module.css";

const toastPosition: Record<ToastPosition, string> = {
  "top-left": "top-left",
  "top-center": "top-center",
  "top-right": "top-right",
  "bottom-left": "bottom-left",
  "bottom-center": "bottom-center",
  "bottom-right": "bottom-right",
};

const toastState: Record<ToastState, string> = {
  success: "success",
  error: "error",
};

function Toast({ position = "top-right", duration = 1200, children, state = "success", multiple = true }: IToastProps) {
  return (
    <div className={`${styles.toast} ${styles[toastPosition[position]]} ${styles[toastState[state]]}`}>{children}</div>
  );
}

export default Toast;
