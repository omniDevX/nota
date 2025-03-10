export interface CatInterface {
    id: string;     // repo for home, useless for others
    ghname?: string;
    title: string;
    shorttitle?: string;
    folder?: string;
    cover?: string;
    count?: string;
    path?: string;
}

export type Cat2SubMap = Record<string, CatInterface[]>;
