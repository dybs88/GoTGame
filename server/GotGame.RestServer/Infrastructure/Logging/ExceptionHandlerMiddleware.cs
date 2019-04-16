using GotGame.RestServer.Infrastructure.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Logging
{
  public class ExceptionHandlerMiddleware
  {
    private RequestDelegate nextDelegate;
    private ILogger<ExceptionHandlerMiddleware> logger;

    public ExceptionHandlerMiddleware(RequestDelegate next, ILogger<ExceptionHandlerMiddleware> logger)
    {
      nextDelegate = next;
      this.logger = logger;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
      try
      {
        await nextDelegate(httpContext);
      }
      catch(Exception e)
      {
        logger.LogError(e.Message);
        await HandleExceptionAsync(httpContext, e);
      }
    }

    private static Task HandleExceptionAsync(HttpContext httpContext, Exception exception)
    {
      httpContext.Response.ContentType = "application/json";
      httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

      return httpContext.Response.WriteAsync(new ErrorDetails
      {
        StatusCode = httpContext.Response.StatusCode.ToString(),
        Message = "Internal Server Error"
      }.ToString());
    }
  }
}
