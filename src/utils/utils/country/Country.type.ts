export type Country = {
  id: string;
  code: string;
  flag: string;
  phonePrefix: string;
  label: string;
  value: Record<string, any>;
  phoneFormat: RegExp;
};
