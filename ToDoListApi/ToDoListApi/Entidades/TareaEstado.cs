namespace ToDoListApi.Entidades
{
    public class TareaEstado
    {
        public int TareaId { get; set; }
        public int EstadoId { get; set; }
        public Tarea Tarea { get; set; }
        public Estado Estado { get; set; }
    }
}
