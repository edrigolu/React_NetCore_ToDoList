using System.ComponentModel.DataAnnotations;
using ToDoListApi.Validaciones;

namespace ToDoListApi.DTOs
{
    public class EstadoCreacionDTO
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
    }
}
