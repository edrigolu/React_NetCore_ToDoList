using AutoMapper;
using ToDoListApi.DTOs;
using ToDoListApi.Entidades;

namespace ToDoListApi.Utilidades
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Estado, EstadoDTO>().ReverseMap();
            CreateMap<EstadoCreacionDTO, Estado>();
        }
    }
}
