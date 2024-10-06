import { useState } from "react";
import { IToastProps } from "../assets/type";

export const useToast = () => {
  const [toasts, setToasts] = useState<IToastProps[]>([]);

  return {};
};
