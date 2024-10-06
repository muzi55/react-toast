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

interface IToast extends IToastProps {
  index: number;
}

const toastState: Record<ToastState, string> = {
  success: "success",
  error: "error",
};

function Toast({
  position = "top-right",
  duration = 1200,
  message,
  state = "success",
  multiple = true,
  index,
}: IToast) {
  return (
    <div
      className={`${styles.toast} ${styles[toastPosition[position]]} ${styles[toastState[state]]}`}
      style={{
        transform: `translateY(${index * 100}px)`, // index에 따라 Y축으로 이동
      }}>
      {message}
    </div>
  );
}

export default Toast;
