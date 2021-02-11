using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection(); //ha valaki http:// URL-t ad meg, automatikusan átirányít a biztonságos http&s://-re. Mint arról már volt szó, egy http protokollal megnyitott oldalban a böngészõ nem fog betölteni https-el hivatkozott tartalmakat.

            app.UseDefaultFiles(); //innentõl pl. a http&s://cim.hu/ alatt a http&s://cim.hu/index.html oldalt szolgáltatja
            app.UseStaticFiles(); //elérhetõvé teszi a wwwroot mappába helyezett statikus fájlokat
            
            // a sorrend fontos

            app.UseRouting();

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapGet("/", async context =>
            //    {
            //        await context.Response.WriteAsync("Hello World!");
            //    });
            //});
        }
    }
}
