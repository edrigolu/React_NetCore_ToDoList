namespace ToDoListApi.DTOs
{
    public class TareasFiltrarDTO
    {
        public int Pagina { get; set; }
        public int RecordsPorPagina { get; set; }
        public PaginacionDTO PaginacionDTO
        {
            get { return new PaginacionDTO() { Pagina = Pagina, RecordsPorPagina = RecordsPorPagina }; }
        }
        public string Titulo { get; set; }
        public int EstadoId { get; set; }
        public bool Completada { get; set; }
        public bool NoCompletada { get; set; }
    }
}
