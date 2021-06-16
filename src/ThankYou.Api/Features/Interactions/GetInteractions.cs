using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class GetInteractions
    {
        public class Request: IRequest<Response> { }

        public class Response: ResponseBase
        {
            public List<InteractionDto> Interactions { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;
        
            public Handler(IThankYouDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                return new () {
                    Interactions = await _context.Interactions
                    .Include(x => x.InteractionParticipants)
                    .ThenInclude(x => x.Participant)
                    .Select(x => x.ToDto()).ToListAsync()
                };
            }
            
        }
    }
}
