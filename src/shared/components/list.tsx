export function List(props: { items: any[] }) {
  return (
    <ul>{
      props.items.map(item => <li>{JSON.stringify(item, undefined, 4)}</li>)
    }</ul>
  );
}
