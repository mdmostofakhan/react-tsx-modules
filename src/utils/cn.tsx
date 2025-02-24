import clsx from "clsx";
import { twMerge, ClassNameValue } from "tailwind-merge";


const cn = (...inputs: ClassNameValue[]) => {
    return twMerge(clsx(inputs))
}

export default cn;