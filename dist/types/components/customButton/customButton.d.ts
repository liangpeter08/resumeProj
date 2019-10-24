/// <reference types="react" />
interface CustomButtonProps {
    onclick: () => void;
    text: string;
    additionalClass?: string;
}
export default function customButton({ onclick, text, additionalClass }: CustomButtonProps): JSX.Element;
export {};
