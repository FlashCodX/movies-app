import {
  Container,
  List,
  ListItem,
  ListItemReference,
} from "../Pagination/PaginationStyles";

export const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <List>
        {pageNumbers.map((number) => (
          <ListItem key={number}>
            <ListItemReference
              href="#"
              className={`${currentPage === number ? "selected" : ""}`}
              onClick={() => paginate(number)}
            >
              {number}
            </ListItemReference>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
