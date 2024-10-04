import React from "react";
import styles from "./Toast.module.css";

type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
type ToastState = "success" | "error";

interface IToastProps {
  position: ToastPosition;
  duration: number;
  children: React.ReactNode;
  state: ToastState;
  multiple: boolean;
}

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
