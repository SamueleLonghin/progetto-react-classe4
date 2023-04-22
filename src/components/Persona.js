export default function Persona({data}) {
    return <li key={data.userId}>
        {data.firstName} {data.emailAddress}
    </li>
}