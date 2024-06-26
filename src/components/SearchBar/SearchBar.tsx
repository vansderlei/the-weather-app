import useGeolocation from "@/hooks/useGeolocation ";
import { SearchInput, SearchInputWrapper, SearchButton, SerachContainer, SearchResults } from "./SearchBar.styles";
import { FaSearch } from "react-icons/fa";


export function SearchBar(){


  return(
    <SerachContainer>
      <SearchInputWrapper>
        <SearchButton>
          <FaSearch size={25} color="#ffffff" />
        </SearchButton>
      <SearchInput placeholder="Search a city" />
      </SearchInputWrapper>
      <SearchResults>
      </SearchResults>
    </SerachContainer>
  )
}