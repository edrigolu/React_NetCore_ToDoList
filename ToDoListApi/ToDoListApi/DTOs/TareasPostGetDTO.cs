using System.Collections.Generic;

namespace ToDoListApi.DTOs
{
    public class TareasPostGetDTO
    {
        public List<TareaDTO> Tareas { get; set; }
        public List<EstadoDTO> Estados { get; set; }
    }
}
