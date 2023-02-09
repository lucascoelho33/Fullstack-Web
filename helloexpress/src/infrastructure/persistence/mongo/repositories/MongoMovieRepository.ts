import { MovieRepository } from "../../../../application/repositories/MovieRepository";
import { Filme } from "../../../../domain/entidades/Movie";

export class MongoMovieRepository implements MovieRepository{
    lancamentos(): Promise<Filme[]> {
        throw new Error("Method not implemented.");
    }
    save(obj: Filme): Promise<void> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Promise<Filme | undefined> {
        throw new Error("Method not implemented.");
    }
    public async all(): Promise<Filme[]> {
        // Usar o código real do MongoDB
        return []
    }
}