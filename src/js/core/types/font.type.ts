export type FontSettings = {
    size: string,
    color: string,
    family?: FontFamily,
    opacity?: number,
}

export enum FontFamily {
    Inter = 'Inter',
    Roboto = 'Roboto',
    Montserrat = 'Montserrat',
    // Lato = 'Lato',
    // OpenSans = 'Open Sans',
}