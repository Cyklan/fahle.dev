interface RHProps {
  link: string;
  title: string;
}

const RepositoryHighlight: React.FC<RHProps> = ({link, title, children}) => {
  return <>
    <h4><a href={link} target="_blank" rel="noreferrer">{title}</a></h4>
    <p>{children}</p>
  </>
}

export default RepositoryHighlight;