import {BaseQueryableQuery} from "@/types/queries/base-query";
import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const cleanQueryParams = (query: BaseQueryableQuery) => {
    const cleanedQuery: Record<string, any> = {};
    for (const key in query) {
        const value = query[key as keyof BaseQueryableQuery];

        if (key === "isDeleted" || key === "isActive") {
            if (Array.isArray(value)) {
                cleanedQuery[key] = value
                    .filter((item) => item !== null)
                    .map((item) => item.toString());
            } else if (value !== undefined && value !== null) {
                cleanedQuery[key] = [value.toString()];
            }
        } else if (Array.isArray(value)) {
            const filteredArray = value.filter((item) => item !== null);
            if (filteredArray.length > 0) {
                cleanedQuery[key] = filteredArray;
            }
        } else if (value !== undefined && value !== null) {
            cleanedQuery[key] = value;
        }
    }

    const params = new URLSearchParams();

    for (const key in cleanedQuery) {
        const value = cleanedQuery[key];
        if (Array.isArray(value)) {
            value.forEach((val) => {
                params.append(key, val);
            });
        } else {
            params.append(key, value.toString());
        }
    }

    return params;
};

