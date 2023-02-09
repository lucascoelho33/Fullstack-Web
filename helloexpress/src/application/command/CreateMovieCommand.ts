import { Movie } from "../../domain/entidades/Movie"
import { MovieRepository } from "../repositories/MovieRepository"


interface CreateMovieRequestModel{
    nome: string,
    genre: string,
    duration: number,
    year: number
}

interface CreateMovieResponseModel{
    id: string
}

export class CreateMovieCommand{
    private movieRepository: MovieRepository

    constructor(movieRepository: MovieRepository){
        this.movieRepository = movieRepository
    }

    public async execute(request: CreateMovieRequestModel): Promise<CreateMovieResponseModel>{

        // Lógica de Application
        const newMovie = request as unknown as Movie 

        const id = await this.movieRepository.save(newMovie)

        return {id}
    }
}