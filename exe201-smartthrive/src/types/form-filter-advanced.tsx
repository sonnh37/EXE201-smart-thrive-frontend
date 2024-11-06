export type FormFilterAdvanced = {
    name: string;
    label: string;
    defaultValue: any;
    render: ({field}: { field: any }) => JSX.Element;
};
  