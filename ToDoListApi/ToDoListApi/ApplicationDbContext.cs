using Microsoft.EntityFrameworkCore;
using ToDoListApi.Entidades;

namespace ToDoListApi
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //modelBuilder.Entity<TareaEstado>()
            //    .HasKey(x => new { x.TareaId, x.EstadoId });
            //base.OnModelCreating(modelBuilder);
        }

        public DbSet<Estado> Estados { get; set; }       
        public DbSet<Tarea> Tareas { get; set; }
        

    }
}
