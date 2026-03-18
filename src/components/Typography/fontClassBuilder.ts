export function fontClassBuilder({
    fontType,
    size,
    breakpoint = '',
    textType = '',
    weight = '',
}: {
    fontType: string,
    size: string,
    breakpoint?: string,
    textType?: string,
    weight?: string,
}) {
    if (fontType === 'Headline') {
        return `text-${fontType}-${breakpoint}-${size}`;
    }

    if (fontType === 'Text') {
        return `text-${fontType}-${textType}-${weight}-${size}`;
    }

    return `text-${fontType}-${size}`;
}
