import * as Icons from './social'


export type IconName = keyof typeof Icons


interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName
}

export function Icon({ name, ...props }: IconProps) {
    if (Object.keys(Icons).includes(name)) {
        const Icon = Icons[name]
        return <Icon {...props} />
    } else {
        return null
    }
}
