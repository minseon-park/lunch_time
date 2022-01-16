type RefReturn =
  | string
  | ((instance: HTMLInputElement | HTMLTextAreaElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | RefObject<HTMLTextAreaElement>
  | null
  | undefined;
