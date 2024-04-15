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

function isValidDate(date: Date) {
    return !isNaN(+date)
}
export function convertDateFromIsoToDayMonthYear(isoDate: string) {
    var date = new Date(isoDate)
    if (isValidDate(date)) {
        return date.toLocaleDateString(
            'pt-br',
            {
                weekday: 'short',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }
        )
    }
    return null
}

export function convertTimeFromIsoToHourMinute(isoDate: string) {
    var dateTime = new Date(isoDate)
    if (isValidDate(dateTime)) {
        return dateTime.toLocaleTimeString('pt-BR').split(':').filter((i, index) => index < 2).join('h')
    }
    return null
}
