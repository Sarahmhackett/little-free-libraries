import { render, screen } from "@testing-library/react";
import LibraryCard from "./LibraryCard";

describe("LibraryCard", () => {
  const mockProps = {
    id: "123",
    name: "Little Library",
    street: "123 Main St",
    town: "Garforth",
    city: "Leeds",
    postcode: "12345",
    image: "/test-image.jpg",
  };

  it("renders the library name and address", () => {
    render(<LibraryCard {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();

    expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/Garforth/i)).toBeInTheDocument();
    expect(screen.getByText(/Leeds/i)).toBeInTheDocument();
    expect(screen.getByText(/12345/i)).toBeInTheDocument();

    // Check "See More" link href includes the id
    const seeMoreLink = screen.getAllByRole("link", { name: /see more/i })[0];
    expect(seeMoreLink).toHaveAttribute(
      "href",
      `/library-details/${mockProps.id}`
    );
  });
});
