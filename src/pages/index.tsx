import { Header } from "@/components/Header/Header";
import { Container } from "./index.styles";
import { SearchBar } from "@/components/SearchBar/SearchBar";


export default function Home(){
  return(
    <Container>
      <Header />
      <SearchBar />
    </Container>
  )
}