export interface CRUDRepository<T>{
    all(): Promise<T[]>
    save(obj: T): Promise<void>
    get(id: number): Promise<T | undefined>
}