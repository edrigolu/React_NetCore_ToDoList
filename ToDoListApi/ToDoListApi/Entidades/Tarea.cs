using System.ComponentModel.DataAnnotations;
using ToDoListApi.Validaciones;

namespace ToDoListApi.Entidades
{
    public class Tarea
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        [PrimeraLetraMayuscula]
        public string Titulo { get; set; }
        public Estado Estado { get; set; }
    }
}
