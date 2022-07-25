using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoListApi.DTOs
{
    public class TareaCreacionDTO
    {
        [Required]
        [StringLength(maximumLength: 50)]
        public string Titulo { get; set; }
        
        public List<int> EstadosIds { get; set; }
    }
}
