using System.Collections.Generic;

namespace ToDoListApi.DTOs
{
    public class TareaDTO
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        
        public List<EstadoDTO> Estados { get; set; }
    }
}
