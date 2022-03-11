﻿using AutoMapper;
using CrudO.Attributes;
using CrudO.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrudO
{
    public static class Mapping
    {
        private static readonly Lazy<IMapper> Lazy = new Lazy<IMapper>(() =>
        {
            var config = new MapperConfiguration(cfg => {
                // This line ensures that internal properties are also mapped over.
                cfg.ShouldMapProperty = p => p.GetMethod.IsPublic || p.GetMethod.IsAssembly;
                cfg.AddProfile<MappingProfile>();
            });
            var mapper = config.CreateMapper();
            return mapper;
        });

        public static IMapper Mapper => Lazy.Value;
    }

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<FormsContext, FormsContextAttribute>();
            CreateMap<ItemBase, ItemAttribute>();
            CreateMap<FormsContextAttribute, FormsContext>();
            CreateMap<ItemAttribute, ItemBase>();
            // Additional mappings here...
        }
    }
}
