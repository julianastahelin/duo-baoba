export function stringsToKebabCase(strings: string[]) {
    strings = strings.map(string =>
        string
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[\s_]+/g, '-')
            .toLowerCase()
    )
    return strings.join('-')
}
