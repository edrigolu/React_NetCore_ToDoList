using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Collections.Generic;

namespace ToDoListApi.Filtros
{
    public class ParsearBadRequests : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            IStatusCodeActionResult casteoResult = context.Result as IStatusCodeActionResult;
            if (casteoResult is null)
            {
                return;
            }

            var codigoEstatus = casteoResult.StatusCode;
            if (codigoEstatus == 400)
            {
                var respuesta = new List<string>();
                var resultadoActual = context.Result as BadRequestObjectResult;
                if (resultadoActual.Value is string)
                {
                    respuesta.Add(resultadoActual.Value.ToString());
                }
                else
                {
                    foreach (var llave in context.ModelState.Keys)
                    {
                        foreach (var error in context.ModelState[llave].Errors)
                        {
                            respuesta.Add($"{llave}: {error.ErrorMessage}");
                        }
                    }
                }

                context.Result = new BadRequestObjectResult(respuesta);
            }
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
        }
    }
}
