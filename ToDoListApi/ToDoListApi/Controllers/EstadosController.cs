using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ToDoListApi.DTOs;
using ToDoListApi.Entidades;
using ToDoListApi.Utilidades;

namespace ToDoListApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadosController : ControllerBase
    {
        private readonly ILogger<EstadosController> _logger;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public EstadosController(ILogger<EstadosController> logger, ApplicationDbContext context, IMapper mapper)
        {
            _logger = logger;
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Estados
        [HttpGet]
        public async Task<ActionResult<List<EstadoDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = _context.Estados.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var generos = await queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();
            return _mapper.Map<List<EstadoDTO>>(generos);
        }

        // GET: api/Estados/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<EstadoDTO>> Get(int id)
        {
            var estado = await _context.Estados.FirstOrDefaultAsync(x => x.Id == id);

            if (estado == null)
            {
                return NotFound();
            }

            return _mapper.Map<EstadoDTO>(estado);
        }


        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutEstado(int id, Estado estado)
        //{
        //    if (id != estado.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(estado).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!EstadoExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] EstadoCreacionDTO estadoCreacionDTO)
        {
            var estado = await _context.Estados.FirstOrDefaultAsync(x => x.Id == id);

            if (estado == null)
            {
                return NotFound();
            }
            estado = _mapper.Map(estadoCreacionDTO, estado);
            await _context.SaveChangesAsync();
            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult> Post([FromBody] EstadoCreacionDTO estadoCreacionDTO)
        {
            var estado = _mapper.Map<Estado>(estadoCreacionDTO);
            _context.Add(estado);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Estados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstado(int id)
        {
            var estado = await _context.Estados.FindAsync(id);
            if (estado == null)
            {
                return NotFound();
            }

            _context.Estados.Remove(estado);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EstadoExists(int id)
        {
            return _context.Estados.Any(e => e.Id == id);
        }
    }
}
