import { Movie } from "../../domain/entidades/Movie";
import { CRUDRepository } from "./CRUDRepository";

export interface MovieRepository extends CRUDRepository<Movie>{
    lancamentos(): Promise<Movie[]>
    
}