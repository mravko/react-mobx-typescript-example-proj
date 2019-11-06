﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WebSitesController : ControllerBase
	{
		private readonly ILogger<WebSitesController> _logger;
		private readonly IMemoryCache memoryCache;

		public WebSitesController(ILogger<WebSitesController> logger, IMemoryCache memoryCache)
		{
			_logger = logger;
			this.memoryCache = memoryCache;

			var cache = memoryCache.Get("SiteModel");
			if (cache == null)
			{
				var defaultList = new List<SiteModel>() {
					new SiteModel {
						WebsiteName = "Website Default",
						WebsiteUrl = "http://web.com",
						DatabaseName = "webdb",
						ConnectionString = "webdbconnstr"
					}
				};
				memoryCache.Set("SiteModel", defaultList);
			}
		}

		[HttpGet]
		public IActionResult Get()
		{
			var toReturn = (List<SiteModel>)memoryCache.Get("SiteModel");
			return Ok(toReturn.Select(x => new { x.Id, x.WebsiteName, x.WebsiteUrl, x.DatabaseName, x.ConnectionString }));
		}

		[HttpPost]
		public IActionResult Post(SiteModel model)
		{
			var toReturn = (List<SiteModel>)memoryCache.Get("SiteModel");
			toReturn.Add(model);
			memoryCache.Set("SiteModel", toReturn);

			return Ok();
		}

		[HttpDelete("{id}")]
		public IActionResult Delete(string id)
		{
			var toReturn = (List<SiteModel>)memoryCache.Get("SiteModel");
			var toRemove = toReturn.FirstOrDefault(x => x.Id == Guid.Parse(id));
			if (toRemove != null)
			{
				toReturn.Remove(toRemove);
			}
			memoryCache.Set("SiteModel", toReturn);

			return Ok();
		}
	}

	public class SiteModel
	{
		public SiteModel()
		{
			Id = Guid.NewGuid();
		}
		public Guid Id { get; set; }
		public string WebsiteName { get; set; } = "";
		public string WebsiteUrl { get; set; } = "";
		public string AdminUserEmail { get; set; } = "";
		public string AdminUserPassword { get; set; } = "";
		public string LogoPath { get; set; } = "";
		public string DatabaseName { get; set; } = "";
		public string ConnectionString { get; set; } = "";
		public string DbAdminUserEmail { get; set; } = "";
		public string DbAdminUserPassword { get; set; } = "";
	}
}