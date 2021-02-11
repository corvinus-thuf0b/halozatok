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

            app.UseHttpsRedirection(); //ha valaki http:// URL-t ad meg, automatikusan �tir�ny�t a biztons�gos http&s://-re. Mint arr�l m�r volt sz�, egy http protokollal megnyitott oldalban a b�ng�sz� nem fog bet�lteni https-el hivatkozott tartalmakat.

            app.UseDefaultFiles(); //innent�l pl. a http&s://cim.hu/ alatt a http&s://cim.hu/index.html oldalt szolg�ltatja
            app.UseStaticFiles(); //el�rhet�v� teszi a wwwroot mapp�ba helyezett statikus f�jlokat
            
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
