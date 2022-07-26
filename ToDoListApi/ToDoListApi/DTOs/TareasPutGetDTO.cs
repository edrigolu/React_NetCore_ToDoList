using System.Collections.Generic;

namespace ToDoListApi.DTOs
{
    public class TareasPutGetDTO
    {
        public TareaDTO Tarea { get; set; }
     
        public List<TareaEstadoDTO> Estados { get; set; }
    }
}
