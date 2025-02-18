import '../../styles/components/SquareList.scss';

interface SectionTitleProps {
    title: string,
    subtitle: string | null,
    list: string[],
}

export default function SectionTitle ({title, subtitle, list}: SectionTitleProps) {

    return (
        <div className="square-list">
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
            <ul>
                {list.map((item, index) => (
                    <>
                        <li key={index}>{item}</li>
                    </>
                ))}
            </ul>
        </div>
    )
}