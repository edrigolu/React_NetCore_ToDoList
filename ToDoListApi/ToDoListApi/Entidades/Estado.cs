using System.ComponentModel.DataAnnotations;
using ToDoListApi.Validaciones;

namespace ToDoListApi.Entidades
{
    public class Estado
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 20)]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
    }
}
