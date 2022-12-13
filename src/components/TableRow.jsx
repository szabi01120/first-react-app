import TableCell from './TableCell'

const TableRow = ({ flight }) => {

  const words = Object.values(flight)
  console.log(words)

  return (
    <tr>
        <td>✈︎</td>
        {words?.map((word, index) => (<TableCell key={index} word={word} index={index}/>))}
    </tr>
  )
}

export default TableRow
