/// <reference types="react" />
interface CustomButtonProps {
    onclick: () => void;
    text: string;
}
export default function customButton(props: CustomButtonProps): JSX.Element;
export {};
