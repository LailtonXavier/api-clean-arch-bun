export default interface UseCase<I, O>{
  execute(date: I): Promise<O>
}