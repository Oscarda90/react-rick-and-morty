

const NavPage = ({page, setPage}) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
        <p>Page: {page}</p>
        <button onClick={() => setPage(page + 1)} className="btn btn-primary btn-sm">Page {page}</button>
    </header>
  )
}

export default NavPage