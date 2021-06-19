using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using ThankYou.Api.Extensions;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using ThankYou.Api.Extensions;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class GetInteractionsPage
    {
        public class Request : IRequest<Response>
        {
            public int PageSize { get; set; }
            public int Index { get; set; }
        }

        public class Response : ResponseBase
        {
            public int Length { get; set; }
            public List<InteractionDto> Entities { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;

            public Handler(IThankYouDbContext context)
                => _context = context;

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var query = from interaction in _context.Interactions
                            select interaction;

                var length = await _context.Interactions.CountAsync();

                var interactions = await query.Page(request.Index, request.PageSize)
                    .Select(x => x.ToDto()).ToListAsync();

                return new()
                {
                    Length = length,
                    Entities = interactions
                };
            }

        }
    }
}
