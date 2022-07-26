using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListApi.DTOs;
using ToDoListApi.Entidades;
using ToDoListApi.Utilidades;

namespace ToDoListApi.Controllers
{
    [Route("api/tareas")]
    [ApiController]
    public class TareasController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public TareasController(ApplicationDbContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        //[HttpGet("{id:int}")]
        //public async Task<ActionResult<TareaDTO>> Get(int id)
        //{
        //    var tarea = await _context.Tareas
        //        .Include(x => x.EstadoId).ThenInclude(x => x.Es)                
        //        .FirstOrDefaultAsync(x => x.Id == id);

        //    if (tarea == null) 
        //    { 
        //        return NotFound(); 
        //    }

        //    var dto = _mapper.Map<TareaDTO>(tarea);
        //    dto.Estados = dto.Estados.OrderBy(x => x.Nombre).ToList();
        //    return dto;
        //}

        [HttpGet("filtrar")]
        public async Task<ActionResult<List<TareaDTO>>> FiltrarAsync([FromQuery] TareasFiltrarDTO tareasFiltrarDTO)
        {
            IQueryable<Tarea> tareasQueryable = _context.Tareas.AsQueryable();

            if (!string.IsNullOrEmpty(tareasFiltrarDTO.Titulo))
            {
                tareasQueryable = tareasQueryable.Where(x => x.Titulo.Contains(tareasFiltrarDTO.Titulo));
            }           


            //if (tareasFiltrarDTO.EstadoId != 0)
            //{
            //    tareasQueryable = tareasQueryable.Include(e => e.Estado.Id)
            //        //.Where(x => x.TareaEstados.Select(y => y.EstadoId)
            //        .Contains(tareasFiltrarDTO.EstadoId));
            //}

            await HttpContext.InsertarParametrosPaginacionEnCabecera(tareasQueryable);
            List<Tarea> tareas = await tareasQueryable.Paginar(tareasFiltrarDTO.PaginacionDTO).ToListAsync();
            return _mapper.Map<List<TareaDTO>>(tareas);
        }


        [HttpGet("PostGet")]
            public async Task<ActionResult<TareasPostGetDTO>> PostGet()
            {
                var tareas = await _context.Tareas.ToListAsync();
                var estados = await _context.Estados.ToListAsync();

                var tareasDTO = _mapper.Map<List<TareaDTO>>(tareas);
                var estadosDTO = _mapper.Map<List<EstadoDTO>>(estados);

                return new TareasPostGetDTO() { Tareas = tareasDTO, Estados = estadosDTO };
            }

            [HttpPost]
            public async Task<ActionResult<int>> Post([FromForm] TareaCreacionDTO tareaCreacionDTO)
            {
                Tarea tarea = _mapper.Map<Tarea>(tareaCreacionDTO);
                _context.Add(tarea);
                await _context.SaveChangesAsync();
                return tarea.Id;
            }

            //[HttpGet("PutGet/{id:int}")]
            //public async Task<ActionResult<TareasPutGetDTO>> PutGet(int id)
            //{
            //    var peliculaActionResult = await Get(id);
            //    if (peliculaActionResult.Result is NotFoundResult) { return NotFound(); }

            //    var pelicula = peliculaActionResult.Value;

            //    var generosSeleccionadosIds = pelicula.Generos.Select(x => x.Id).ToList();
            //    var generosNoSeleccionados = await context.Generos
            //        .Where(x => !generosSeleccionadosIds.Contains(x.Id))
            //        .ToListAsync();

            //    var cinesSeleccionadosIds = pelicula.Cines.Select(x => x.Id).ToList();
            //    var cinesNoSeleccionados = await context.Cines
            //        .Where(x => !cinesSeleccionadosIds.Contains(x.Id))
            //        .ToListAsync();

            //    var generosNoSeleccionadosDTO = mapper.Map<List<GeneroDTO>>(generosNoSeleccionados);
            //    var cinesNoSeleccionadosDTO = mapper.Map<List<CineDTO>>(cinesNoSeleccionados);

            //    var respuesta = new PeliculasPutGetDTO();
            //    respuesta.Pelicula = pelicula;
            //    respuesta.GenerosSeleccionados = pelicula.Generos;
            //    respuesta.GenerosNoSeleccionados = generosNoSeleccionadosDTO;
            //    respuesta.CinesSeleccionados = pelicula.Cines;
            //    respuesta.CinesNoSeleccionados = cinesNoSeleccionadosDTO;
            //    respuesta.Actores = pelicula.Actores;
            //    return respuesta;
            //}

            //[HttpPut("{id:int}")]
            //public async Task<ActionResult> Put(int id, [FromForm] TareaCreacionDTO tareaCreacionDTO)
            //{
            //    var tarea = await _context.Tareas
            //        .Include(x => x.TareaEstados)                
            //        .FirstOrDefaultAsync(x => x.Id == id);
            //    if (tarea == null)
            //    {
            //        return NotFound();
            //    }

            //    tarea = _mapper.Map(tareaCreacionDTO, tarea);
            //    await _context.SaveChangesAsync();
            //    return NoContent();
            //}



            //[HttpDelete("{id:int}")]
            //public async Task<ActionResult> Delete(int id)
            //{
            //    var tarea = await _context.Tareas.FirstOrDefaultAsync(x => x.Id == id);
            //    if (tarea == null)
            //    {
            //        return NotFound();
            //    }
            //    _context.Remove(tarea);
            //    await _context.SaveChangesAsync();

            //    return NoContent();
            //}
        }

    }

