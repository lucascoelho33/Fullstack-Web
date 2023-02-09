import { MovieRepository } from "../../../../application/repositories/MovieRepository";
import { Filme } from "../../../../domain/entidades/Movie";

export class FirestoreMovieRepository implements MovieRepository{
    public async all(): Promise<Filme[]>{
        // Usar o código real do firestore
        return []
    }
}