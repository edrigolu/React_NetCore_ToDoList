using Microsoft.EntityFrameworkCore;
using ToDoListApi.Entidades;

namespace ToDoListApi
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

       public DbSet<Estado> Estados { get; set; }
    }
}
