using System.Collections.Generic;

namespace ToDoListApi.DTOs
{
    public class LandingPageDTO
    {
        public List<TareaDTO> Completada { get; set; }
        public List<TareaDTO> NoCompletada { get; set; }
    }
}
